"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type MotionContextType = {
  motionEnabled: boolean;
  toggleMotion: () => void;
};

const MotionContext = createContext<MotionContextType | null>(null);

export function MotionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [motionEnabled, setMotionEnabled] = useState(true);

  const toggleMotion = () => {
    setMotionEnabled((current) => {
      const next = !current;

      localStorage.setItem(
        "motion-enabled",
        String(next)
      );

      return next;
    });
  };

  return (
    <MotionContext.Provider
      value={{
        motionEnabled,
        toggleMotion,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  const context = useContext(MotionContext);

  if (!context) {
    throw new Error(
      "useMotion deve ser usado dentro de <MotionProvider>"
    );
  }

  return context;
}