"use client";

import { motion } from "framer-motion";
import { Briefcase, Cloud, MapPin } from "lucide-react";
import useExperienceDuration from "@/hooks/useExperienceDuration";

const HomeStatus = () => {
  const experienceDuration = useExperienceDuration();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute bottom-4 xs:bottom-6 left-1/2 z-20 w-[min(92vw,38rem)] -translate-x-1/2"
    >
      <div
        aria-label="Professional profile summary"
        className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-1.5 rounded-2xl border border-white/10 bg-gradient-to-br from-background/85 via-background/75 to-background/60 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl ring-1 ring-accent/10 xs:gap-x-2 xs:p-2.5"
      >
        <div className="inline-flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-[10px] font-medium text-yellow-100/85 xs:px-3 xs:text-xs">
          <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-accent" />
          <span>Pune, India</span>
        </div>
        <span aria-hidden="true" className="h-5 w-px bg-white/10" />
        <div className="inline-flex items-center gap-1.5 rounded-xl bg-accent/10 px-2.5 py-2 text-[10px] font-semibold text-accent ring-1 ring-inset ring-accent/15 xs:px-3 xs:text-xs">
          <Briefcase aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
          <span className="tabular-nums">{experienceDuration} yrs experience</span>
        </div>
        <span aria-hidden="true" className="hidden h-5 w-px bg-white/10 sm:block" />
        <div className="hidden items-center gap-1.5 rounded-xl px-2.5 py-2 text-[10px] font-medium text-yellow-100/85 sm:inline-flex sm:px-3 sm:text-xs">
          <Cloud aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-accent" />
          <span>AWS · Kubernetes · GitOps</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeStatus;
