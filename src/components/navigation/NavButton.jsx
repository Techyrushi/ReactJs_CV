import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  User,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    case "experience":
      return <Briefcase className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  shortLabel,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  const displayLabel = shortLabel || label;

  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              whileHover={{ scale: 1.16 }}
              whileTap={{ scale: 0.92 }}
              className="text-foreground rounded-full flex items-center justify-center custom-bg transition-shadow duration-300 hover:shadow-[0_0_22px_rgba(254,254,91,0.45)]"
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative w-12 h-12 md:w-14 md:h-14 p-3 md:p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background/90 text-foreground text-sm rounded-md shadow-lg whitespace-nowrap border border-accent/20">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              whileTap={{ scale: 0.92 }}
              className="text-foreground rounded-full flex flex-col items-center justify-center"
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative w-11 h-11 p-2.5 custom-bg rounded-full hover:text-accent hover:shadow-[0_0_18px_rgba(254,254,91,0.4)] transition-shadow">
                {getIcon(icon)}
              </span>
              <span
                className={clsx(
                  "mt-1 text-[9px] leading-tight text-yellow-100/80 max-w-[3.6rem] text-center",
                  labelDirection === "left" ? "self-end" : "self-start"
                )}
              >
                {displayLabel}
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
