"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { getWebGLSupport } from "@/lib/webgl";

const HeroScene = dynamic(() => import("@/components/hero/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const noopSubscribe = () => () => {};
const getServerSnapshot = () => false;

export function HeroSceneClient() {
  const supported = useSyncExternalStore(noopSubscribe, getWebGLSupport, getServerSnapshot);

  if (!supported) return null;

  return (
    <div className="absolute inset-0 z-10 opacity-0" style={{ animation: "fadeIn 1.2s ease 0.15s both" }}>
      <HeroScene />
    </div>
  );
}
