"use client";

import { useMotion } from "@/contexts/MotionContext";

export default function MotionToggle() {
  const { motionEnabled, toggleMotion } = useMotion();

  return (
    <button
      type="button"
      onClick={toggleMotion}
      aria-pressed={motionEnabled}
      className="
        inline-flex items-center gap-2
        rounded-full
        border border-white/10
        bg-black/20
        px-3 py-2
        text-xs font-medium
        text-white
        backdrop-blur-md
        transition
        hover:bg-black/30
      "
    >
      <span
        className={`
          h-2 w-2 rounded-full
          ${motionEnabled ? "bg-green-400" : "bg-white/30"}
        `}
      />

      Motion {motionEnabled ? "On" : "Off"}
    </button>
  );
}