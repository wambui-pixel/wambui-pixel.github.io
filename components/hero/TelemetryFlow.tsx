"use client";

import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import * as THREE from "three";

const SKILLS = ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"];

const TRAVEL_SECONDS = 0.9;
const PAUSE_SECONDS = 0.35;
const SEGMENT_SECONDS = TRAVEL_SECONDS + PAUSE_SECONDS;
const CYCLE_SECONDS = SEGMENT_SECONDS * SKILLS.length;

const PALETTE = {
  dark: {
    node: "#a78bfa",
    nodeActive: "#e9d5ff",
    pulse: "#f5d0fe",
    line: "#a855f7",
    lineOpacity: 0.3,
  },
  light: {
    node: "#8b5cf6",
    nodeActive: "#7e22ce",
    pulse: "#c026d3",
    line: "#9333ea",
    lineOpacity: 0.45,
  },
};

// A closed ring rather than a line: nodes sit at even angles around a
// shared center, entirely in the right-hand "lane" of the viewport so
// nothing falls behind the headline text column on the left. The pulse
// travels continuously around the loop with no reset/snap, reading as a
// system in constant circulation (an event loop / ring topology) rather
// than a single packet retracing a one-way pipeline.
function buildCurve() {
  const centerX = 2.5;
  const centerY = 0;
  const radiusX = 0.9;
  const radiusY = 1.3;
  const points = SKILLS.map((_, i) => {
    const angle = (i / SKILLS.length) * Math.PI * 2;
    const x = centerX + Math.cos(angle) * radiusX;
    const y = centerY + Math.sin(angle) * radiusY;
    const z = Math.sin(angle * 1.4) * 0.7;
    return new THREE.Vector3(x, y, z);
  });
  return new THREE.CatmullRomCurve3(points, true, "catmullrom", 0.4);
}

export function TelemetryFlow({
  reducedMotion,
  isDark,
}: {
  reducedMotion: boolean;
  isDark: boolean;
}) {
  const colors = isDark ? PALETTE.dark : PALETTE.light;
  const N = SKILLS.length;
  const curve = useMemo(() => buildCurve(), []);
  const linePoints = useMemo(() => curve.getPoints(120), [curve]);
  const nodePositions = useMemo(
    () => SKILLS.map((_, i) => curve.getPointAt(i / N)),
    [curve, N]
  );

  const pulseRef = useRef<THREE.Mesh>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastHighlightRef = useRef(0);

  useFrame((state) => {
    if (reducedMotion || !pulseRef.current) return;

    const elapsed = state.clock.elapsedTime % CYCLE_SECONDS;
    const segment = Math.min(Math.floor(elapsed / SEGMENT_SECONDS), N - 1);
    const localT = elapsed - segment * SEGMENT_SECONDS;

    let curveT: number;
    let highlight: number;
    if (localT <= TRAVEL_SECONDS) {
      const travelProgress = localT / TRAVEL_SECONDS;
      const eased = travelProgress < 0.5
        ? 2 * travelProgress * travelProgress
        : 1 - Math.pow(-2 * travelProgress + 2, 2) / 2;
      curveT = (segment + eased) / N;
      highlight = segment;
    } else {
      curveT = ((segment + 1) % N) / N;
      highlight = (segment + 1) % N;
    }

    if (highlight !== lastHighlightRef.current) {
      lastHighlightRef.current = highlight;
      setActiveIndex(highlight);
    }

    const safeT = ((curveT % 1) + 1) % 1;
    pulseRef.current.position.copy(curve.getPointAt(safeT));
  });

  return (
    <group>
      <Line points={linePoints} color={colors.line} transparent opacity={colors.lineOpacity} lineWidth={1} />

      {nodePositions.map((pos, i) => (
        <group key={SKILLS[i]} position={pos}>
          <mesh>
            <icosahedronGeometry args={[0.13, 0]} />
            <meshStandardMaterial
              color={i === activeIndex ? colors.nodeActive : colors.node}
              emissive={i === activeIndex ? colors.nodeActive : colors.node}
              emissiveIntensity={i === activeIndex ? 1.4 : 0.5}
              toneMapped={false}
            />
          </mesh>
          {i === activeIndex && (
            <Html center distanceFactor={8} occlude={false}>
              <span
                className="whitespace-nowrap rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-violet-900 dark:text-violet-100 backdrop-blur-sm"
                style={{ transform: "translateY(18px)" }}
              >
                {SKILLS[i]}
              </span>
            </Html>
          )}
        </group>
      ))}

      {!reducedMotion && (
        <mesh ref={pulseRef} position={nodePositions[0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color={colors.pulse} toneMapped={false} />
          <pointLight color={colors.pulse} intensity={3} distance={2.2} />
        </mesh>
      )}
    </group>
  );
}
