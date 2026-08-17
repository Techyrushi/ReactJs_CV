"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

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

const ProjectList = ({ projects }) => {
  return (
    <div>
      <div>
        <h1 className="flex items-center justify-center font-bold text-4xl mb-2">
          Projects
        </h1>
        <p className="text-center text-yellow-100/70 text-sm mb-5 px-4">
          Production platforms spanning DevOps, SRE, backend, and Maharashtra government systems.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-auto xl:max-w-5xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
      >
        {projects.map((project, index) => {
          return <ProjectLayout key={index} {...project} />;
        })}
      </motion.div>
    </div>
  );
};

export default ProjectList;
