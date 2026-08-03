import * as motion from "motion/react-client";
import React from "react";

interface TweenCustomProps {
  children: React.ReactNode;
  delayNum?: number;
}

export default function TweenCustom({ children, delayNum=0 }: TweenCustomProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          scale: {
            type: "tween",
            visualDuration: 0,
            delay: delayNum,
            bounce: 0,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
