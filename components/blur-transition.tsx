"use client";

import { motion } from "framer-motion";

export function BlurTransition({
  children,
  index = 0,
  className,
}: {
  children?: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const delay = index * 0.15;
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        filter: "blur(5px)",
        y: 10,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      exit={{}}
      transition={{
        opacity: { duration: 0.5, delay },
        filter: { duration: 0.8, delay },
        y: { duration: 0.2, ease: "easeOut", delay },
      }}
    >
      {children}
    </motion.div>
  );
}
