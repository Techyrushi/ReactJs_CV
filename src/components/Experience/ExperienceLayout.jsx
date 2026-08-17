import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ExperienceLink = motion(Link);

const ExperienceLayout = ({
  name,
  role,
  description,
  dateRange,
  demoLink,
  imageUrl,
  highlights = [],
  tags = [],
}) => {
  const className =
    "text-sm md:text-base flex flex-col w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg gap-3";

  const content = (
    <>
      <div className="flex items-start justify-between gap-4 w-full">
        <div className="flex items-start space-x-3 min-w-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-10 h-10 rounded-full bg-white/10 p-1 shrink-0"
          />
          <div className="min-w-0">
            <h2 className="text-foreground text-yellow-100 font-semibold">
              {name}
            </h2>
            {role && (
              <p className="text-accent text-xs sm:text-sm font-medium">
                {role}
              </p>
            )}
          </div>
        </div>
        <p className="text-muted sm:text-foreground text-yellow-100 whitespace-nowrap text-xs sm:text-sm shrink-0">
          {dateRange}
        </p>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs uppercase tracking-wide text-accent border border-accent/30 rounded-full px-2.5 py-0.5 bg-accent/5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {description && (
        <p className="text-muted text-yellow-100/80 text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      )}
      {highlights.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-yellow-100/70 text-xs sm:text-sm">
          {highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </>
  );

  if (demoLink) {
    return (
      <ExperienceLink
        variants={item}
        href={demoLink}
        target="_blank"
        className={className}
      >
        {content}
      </ExperienceLink>
    );
  }

  return (
    <motion.div variants={item} className={className}>
      {content}
    </motion.div>
  );
};

export default ExperienceLayout;
