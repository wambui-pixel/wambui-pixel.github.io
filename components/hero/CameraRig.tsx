"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const REST_POSITION = new THREE.Vector3(0, 0, 6);
const START_POSITION = new THREE.Vector3(0, 1.2, 11);
const FLY_IN_SECONDS = 1.8;
const PARALLAX_STRENGTH = 0.6;
const PARALLAX_LERP = 0.04;

export function CameraRig({ reducedMotion }: { reducedMotion: boolean }) {
  const { camera, pointer } = useThree();
  const startTimeRef = useRef<number | null>(null);
  const target = useRef(new THREE.Vector3());

  useFrame((state) => {
    if (reducedMotion) {
      camera.position.copy(REST_POSITION);
      camera.lookAt(0, 0, 0);
      return;
    }

    if (startTimeRef.current === null) startTimeRef.current = state.clock.elapsedTime;
    const elapsed = state.clock.elapsedTime - startTimeRef.current;
    const flyProgress = Math.min(elapsed / FLY_IN_SECONDS, 1);
    const eased = 1 - Math.pow(1 - flyProgress, 3);

    target.current.lerpVectors(START_POSITION, REST_POSITION, eased);

    if (flyProgress >= 1) {
      target.current.x += pointer.x * PARALLAX_STRENGTH;
      target.current.y += pointer.y * PARALLAX_STRENGTH * 0.6;
    }

    camera.position.lerp(target.current, flyProgress >= 1 ? PARALLAX_LERP : 1);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
