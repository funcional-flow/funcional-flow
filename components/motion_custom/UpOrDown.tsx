import * as motion from "motion/react-client";
import React from "react";

interface UpOrDownCustomProps {
  children: React.ReactNode;
  delayNum?: number;
}

export default function UpOrDownCustom({
  children,
  delayNum = 0,
}: UpOrDownCustomProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 1, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 280,
          damping: 22,
          delay: delayNum,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
