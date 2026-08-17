"use client";
import { motion } from "framer-motion";
import ExperienceLayout from "./ExperienceLayout";
import Certifications from "@/components/about/Certifications";
import { certificationsData } from "@/app/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ExperienceList = ({ experience }) => {
  return (
    <div>
      <div>
        <h1 className="flex items-center justify-center font-bold text-4xl mb-2">
          Experience
        </h1>
        <p className="text-center text-yellow-100/70 text-sm mb-5 px-4">
          3+ years focused on DevOps engineering and Site Reliability.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-auto xl:max-w-5xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
      >
        {experience.map((exp, index) => {
          return <ExperienceLayout key={index} {...exp} />;
        })}
      </motion.div>

      <div className="w-full max-w-auto xl:max-w-5xl px-4 mx-auto lg:px-16 mt-14">
        <h2 className="flex items-center justify-center font-bold text-3xl mb-2">
          Certifications
        </h2>
        <p className="text-center text-yellow-100/70 text-sm mb-6">
          Cloud, DevOps, SRE, and infrastructure credentials.
        </p>
        <Certifications certifications={certificationsData} />
      </div>
    </div>
  );
};

export default ExperienceList;
