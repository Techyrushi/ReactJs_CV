"use client";

import { motion } from "framer-motion";

const HomeStatus = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute bottom-3 xs:bottom-5 left-1/2 z-20 flex w-[min(92vw,40rem)] -translate-x-1/2 justify-center"
    >
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-accent/25 bg-background/45 px-3 py-2 backdrop-blur-md shadow-glass-inset">
        <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] xs:text-xs text-yellow-100/90">
          Nashik, India
        </span>
        <span className="hidden xs:inline h-3 w-px bg-accent/30" />
        <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] xs:text-xs text-yellow-100/90">
          3+ yrs DevOps / SRE
        </span>
        <span className="hidden sm:inline h-3 w-px bg-accent/30" />
        <span className="hidden sm:inline rounded-full bg-accent/10 px-2.5 py-1 text-xs text-yellow-100/90">
          AWS · K8s · GitOps
        </span>
      </div>
    </motion.div>
  );
};

export default HomeStatus;
