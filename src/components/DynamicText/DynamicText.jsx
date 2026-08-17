"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Sparkles } from "lucide-react";
import { BtnList } from "@/app/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const resumeLink = BtnList.find((btn) => btn.icon === "resume")?.link;

const DynamicText = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="pointer-events-none max-w-[18.5rem] xs:max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg"
    >
      <motion.div
        variants={item}
        className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/50 px-3 py-1.5 backdrop-blur-md shadow-glass-inset"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-[10px] xs:text-xs uppercase tracking-[0.18em] text-accent font-medium">
          Open to DevOps / SRE roles
        </span>
      </motion.div>

      <motion.p
        variants={item}
        className="mt-4 sm:mt-5 text-sm sm:text-base text-yellow-100/80"
      >
        Hi, I am
      </motion.p>

      <motion.h1
        variants={item}
        className="mt-1 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-accent to-yellow-600 bg-[length:200%_auto] animate-gradient-x"
      >
        Rushikesh Chavan
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-2 sm:mt-3 flex items-center gap-2 text-sm sm:text-lg text-yellow-200/90 font-medium"
      >
        <Sparkles className="w-4 h-4 text-accent shrink-0" />
        DevOps Engineer · Site Reliability Engineer
      </motion.p>

      <motion.div
        variants={item}
        className="mt-3 min-h-[1.75rem] sm:min-h-[2rem] text-xs sm:text-base text-yellow-100/90"
      >
        <ReactTyped
          strings={[
            "3+ years building reliable cloud platforms.",
            "Kubernetes, Docker, Terraform & GitOps.",
            "AWS Certified Solutions Architect.",
            "CI/CD, observability, and AIOps.",
            "Let's keep production calm and fast.",
          ]}
          typeSpeed={42}
          backSpeed={18}
          backDelay={1600}
          loop
        />
      </motion.div>

      <motion.div
        variants={item}
        className="pointer-events-auto mt-5 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3"
      >
        <Link
          href="/experience"
          className="group inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-4 py-2 text-xs sm:text-sm font-medium text-accent backdrop-blur-md transition-all duration-300 hover:bg-accent hover:text-background hover:shadow-glass-sm"
        >
          <Briefcase className="w-3.5 h-3.5" />
          Experience
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background/40 px-4 py-2 text-xs sm:text-sm font-medium text-yellow-100 backdrop-blur-md transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-glass-sm"
        >
          Projects
        </Link>
        {resumeLink && (
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs sm:text-sm text-yellow-100/80 transition-colors duration-300 hover:text-accent"
          >
            Resume
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default DynamicText;
