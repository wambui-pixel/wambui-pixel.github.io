"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { getWebGLSupport } from "@/lib/webgl";

const HeroScene = dynamic(() => import("@/components/hero/HeroScene"), {
  ssr: false,
  loading: () => null,
});

// Below `lg` the headline spans the full width, leaving no lane for the
// ring, so the scene is skipped entirely rather than rendered off-screen.
const WIDE_QUERY = "(min-width: 1024px)";

function subscribeWide(callback: () => void) {
  const query = window.matchMedia(WIDE_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

const getShowSceneSnapshot = () => window.matchMedia(WIDE_QUERY).matches && getWebGLSupport();
const getServerSnapshot = () => false;

export function HeroSceneClient() {
  const show = useSyncExternalStore(subscribeWide, getShowSceneSnapshot, getServerSnapshot);

  if (!show) return null;

  return (
    <div
      className="absolute inset-0 z-10 overflow-hidden opacity-0"
      style={{ animation: "fadeIn 1.2s ease 0.15s both" }}
    >
      <HeroScene />
    </div>
  );
}
