"use client";

import { MeshGradient } from "@paper-design/shaders-react";
// import { useMotion } from "@/contexts/MotionContext";

export default function BackgroundMesh() {
//   const { motionEnabled } = useMotion();

  return (
    <div className="absolute inset-0 z-0">
      <MeshGradient
        width={1920}
        height={1080}
        // colors={["#130821", "#18092a", "#0c0515"]}
        colors={["#130821", "#0d001a", "#000000", "#18092a"]}
        distortion={0.8}
        swirl={0.1}
        speed={1}
        minPixelRatio={1}
        maxPixelCount={720 * 480}
        // speed={motionEnabled ? 1 : 0}
      />
    </div>
  );
}
