import * as motion from "motion/react-client";
import React from "react";

interface SectionDropInProps {
  children: React.ReactNode;
  initialNum?: number;
  delayNum?: number;
  cimaBaixo?: boolean;
  balanco?: number;
}

export default function SectionDropIn({
  children,
  initialNum = 240,
  delayNum = 0,
  cimaBaixo = false,
  balanco = 22,
}: SectionDropInProps) {
  if (cimaBaixo) {
    initialNum = -initialNum;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: initialNum }}
      whileInView={{ opacity: 1, y: 0 }}
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
