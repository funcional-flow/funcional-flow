import * as motion from "motion/react-client";
import React from "react";

interface SpringCustomProps {
  children: React.ReactNode;
  delayNum?: number;
}

export default function SpringCustom({ children, delayNum=0 }: SpringCustomProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          scale: {
            type: "spring",
            visualDuration: 0.4,
            delay: delayNum,
            bounce: 0.5,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
