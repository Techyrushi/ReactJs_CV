import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({
  name,
  description,
  date,
  demoLink,
  imageUrl,
  stack,
  secondaryLink,
  departments = [],
  devops = [],
}) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
    : null;

  return (
    <motion.div
      variants={item}
      className="text-sm md:text-base flex flex-col w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg gap-3"
    >
      <div className="flex items-start justify-between gap-4 w-full">
        <div className="flex items-start space-x-3 min-w-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-10 h-10 rounded-full bg-white/10 p-1.5 shrink-0"
          />
          <div className="min-w-0">
            <h2 className="text-foreground text-yellow-100 font-semibold">
              {name}
            </h2>
            {stack && (
              <p className="text-accent/90 text-[11px] sm:text-xs mt-1 leading-relaxed">
                {stack}
              </p>
            )}
          </div>
        </div>
        {date && (
          <p className="text-muted sm:text-foreground text-yellow-100 whitespace-nowrap text-xs sm:text-sm shrink-0">
            {formattedDate}
          </p>
        )}
      </div>
      <p className="text-muted text-yellow-100/80 text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
      {departments.length > 0 && (
        <div>
          <p className="text-yellow-100 text-xs sm:text-sm font-medium mb-2">
            7 Government of Maharashtra departments
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-yellow-100/70 text-xs sm:text-sm list-disc list-inside">
            {departments.map((department) => (
              <li key={department}>{department}</li>
            ))}
          </ul>
        </div>
      )}
      {devops.length > 0 && (
        <div className="rounded-lg border border-accent/20 bg-background/35 p-3 sm:p-4">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm">
            DevOps &amp; deployment workflow
          </h3>
          <ul className="grid grid-cols-1 gap-2 text-xs leading-relaxed text-yellow-100/75 sm:grid-cols-2 sm:text-sm">
            {devops.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 text-accent">
                  ▸
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
        {demoLink && (
          <Link
            href={demoLink}
            target="_blank"
            className="text-accent hover:underline font-medium"
          >
            View project
          </Link>
        )}
        {secondaryLink?.href && (
          <Link
            href={secondaryLink.href}
            target="_blank"
            className="text-accent hover:underline font-medium"
          >
            {secondaryLink.label}
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectLayout;
