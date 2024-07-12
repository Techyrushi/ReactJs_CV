import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ExperienceLink = motion(Link);
const ExperienceLayout = ({ name, description, date, demoLink, imageUrl }) => {
   // Format the date to exclude the day of the week
   const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <ExperienceLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
      <img
          src={imageUrl}
          alt={name}
          className="w-10 h-10 rounded-full"
        />&nbsp;
         <div>
        <h2 className="text-foreground text-yellow-100">{name}</h2>
        <p className="text-muted hidden sm:inline-block text-yellow-100">
          {description}
        </p>
        </div>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-muted sm:text-foreground text-yellow-100">
      {formattedDate}
      </p>
    </ExperienceLink>
  );
};

export default ExperienceLayout;
