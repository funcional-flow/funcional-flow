import * as motion from "motion/react-client";
import React from "react";

interface SectionTweenProps {
  children: React.ReactNode;
  initialNum?: number;
  delay?: number;
  upToDown?: boolean;
  typeAnimation?: string;
  horizontal?: boolean;
  amountCustom?: number
}

export default function SectionTween({
  children,
  initialNum = 240,
  delay = 0,
  upToDown = true,
  horizontal = false,
  amountCustom = 0.6
}: SectionTweenProps) {
  let valorX = 0;
  let valorY = 0;
  if (upToDown) {
    initialNum *= -1;
  }
  if (horizontal) {
    valorX = initialNum;
    valorY = 0;
  } else {
    valorX = 0;
    valorY = initialNum;
  }
  const initi = { opacity: 0, x: valorX, y: valorY }
  return (
      <motion.div
        initial={initi}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: amountCustom }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: delay,
        }}
      >
        {children}
      </motion.div>
  );
}
