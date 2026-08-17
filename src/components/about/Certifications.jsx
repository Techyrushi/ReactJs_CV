"use client";
import { motion } from "framer-motion";

const Certifications = ({ certifications, className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 w-full">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group relative overflow-hidden rounded-xl border border-accent/20 bg-background/30 p-4 backdrop-blur-md hover:border-accent/60 hover:shadow-glass-sm transition-colors"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent opacity-70" />
            <div className="flex items-start gap-3">
              <img
                src={cert.icon}
                alt=""
                className="w-11 h-11 rounded-lg bg-white/5 p-1.5 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-accent font-semibold">
                    {cert.category}
                  </span>
                </div>
                <h4 className="text-sm text-yellow-100 font-semibold leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs text-yellow-100/60 mt-1">{cert.issuer}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
