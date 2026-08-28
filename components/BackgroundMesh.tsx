"use client";

import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

function hasHardwareAcceleration() {
  const canvas = document.createElement("canvas");

  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  if (!gl) return false;

  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

  if (!debugInfo) {
    // Não conseguimos descobrir o renderer.
    // Nesse caso, assumimos que WebGL está disponível.
    return true;
  }

  const renderer = gl
    .getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    .toLowerCase();

  const softwareRenderers = [
    "swiftshader",
    "llvmpipe",
    "software rasterizer",
    "software",
    "microsoft basic render driver",
  ];

  return !softwareRenderers.some((name) => renderer.includes(name));
}

export default function BackgroundMesh() {
  const [useShader, setUseShader] = useState<boolean | null>(null);

  useEffect(() => {
    setUseShader(hasHardwareAcceleration());
  }, []);

  // Evita renderizar algo antes da detecção
  if (useShader === null) {
    return <div className="fixed inset-0 bg-neutral-950" />;
  }

  if (!useShader) {
    return <FallbackGradient />;
  }

  return (
    <div className="absolute inset-0 z-0 hidden lg:block">
      <MeshGradient
        width={1920}
        height={1080}
        colors={["#130821", "#18092a", "#0c0515", "#130821", "#0c0515"]}
        distortion={0.8}
        swirl={0.1}
        grainMixer={0}
        grainOverlay={0}
        speed={1}
      />
    </div>
  );
}

function FallbackGradient() {
  return (
    <div className="absolute bg-purple4 inset-0 z-0" />
  );
}
