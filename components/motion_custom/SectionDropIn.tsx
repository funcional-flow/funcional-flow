import * as motion from "motion/react-client";
import React from "react";

interface SectionDropInProps {
  children: React.ReactNode;
  initialNum?: number;
  delayNum?: number;
  cimaBaixo?: boolean;
  balanco?: number;
  horizontal?: boolean;
}

export default function SectionDropIn({
  children,
  initialNum = 240,
  delayNum = 0,
  cimaBaixo = false,
  balanco = 22,
  horizontal = false,
}: SectionDropInProps) {
  if (cimaBaixo) {
    initialNum = -initialNum;
  }

  let inicial;
  if (horizontal) {
    inicial = { opacity: 0, x: initialNum, y: 0 };
  } else {
    inicial = { opacity: 0, x: 0, y: initialNum };
  }
  return (
    <motion.div
      initial={inicial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 480,
        damping: balanco,
        delay: delayNum,
      }}
    >
      {children}
    </motion.div>
  );
}
