"use client";

import { useTheme } from "next-themes";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { CAMERA_FOV, CameraRig, REST_POSITION } from "@/components/hero/CameraRig";
import { TelemetryFlow } from "@/components/hero/TelemetryFlow";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function HeroScene() {
  const reducedMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme !== "light";

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      camera={{ fov: CAMERA_FOV, position: REST_POSITION.toArray() }}
    >
      <ambientLight intensity={isDark ? 0.4 : 0.8} />
      <pointLight position={[3, 3, 4]} intensity={0.6} color="#a855f7" />

      <CameraRig reducedMotion={reducedMotion} />
      <TelemetryFlow reducedMotion={reducedMotion} isDark={isDark} />

      {!reducedMotion && (
        <Sparkles
          count={60}
          scale={[9, 5, 4]}
          size={1.4}
          speed={0.25}
          opacity={isDark ? 0.35 : 0.5}
          color={isDark ? "#c4b5fd" : "#7c3aed"}
        />
      )}
    </Canvas>
  );
}
