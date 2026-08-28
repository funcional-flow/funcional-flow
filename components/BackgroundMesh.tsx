"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useMotion } from "@/contexts/MotionContext";

export default function BackgroundMesh() {
  const { motionEnabled } = useMotion();

  return (
    <div className="absolute inset-0 z-0">
      <MeshGradient
        width={1920}
        height={1080}
        colors={["#130821", "#18092a"]}
        distortion={0.8}
        swirl={0.1}
        speed={motionEnabled ? 1 : 0}
      />
    </div>
  );
}
