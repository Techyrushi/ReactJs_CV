"use client";
import { useState } from "react";
import Link from "next/link";
import { Activity, ArrowUpRight } from "lucide-react";

const USER = "Techyrushi";
const GITHUB = `https://github.com/${USER}`;

const GRAPH_SOURCES = [
  `https://github-readme-activity-graph.vercel.app/graph?username=${USER}&theme=react-dark&bg_color=0d1117&color=08f7fe&line=ff2e63&point=ffffff&area=true&hide_border=true`,
  `https://github-readme-activity-graph.vercel.app/graph?username=${USER}&theme=react-dark&bg_color=1b1b1b&color=FEFE5B&line=FEFE5B&point=FFFFFF&area=true&hide_border=true`,
  `https://ghchart.rshah.org/FEFE5B/${USER}`,
];

const ActivityGraph = ({ repoCount, stars }) => {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const tryNext = () => {
    if (index + 1 < GRAPH_SOURCES.length) setIndex((current) => current + 1);
    else setFailed(true);
  };

  return (
    <div className="w-full rounded-xl border border-accent/30 bg-[#0d1117]/80 overflow-hidden">
      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 px-3 sm:px-4 py-3 border-b border-accent/20 bg-background/40">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-accent shrink-0" />
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Activity graph</p>
            <h4 className="text-sm sm:text-base font-semibold text-yellow-100">
              GitHub contribution timeline
            </h4>
          </div>
        </div>
        <Link
          href={GITHUB}
          target="_blank"
          className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-yellow-100/70 hover:text-accent transition-colors"
        >
          @{USER}
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:thin]">
        {!failed ? (
          <img
            key={GRAPH_SOURCES[index]}
            src={GRAPH_SOURCES[index]}
            alt={`${USER} GitHub activity graph`}
            className="block w-full min-w-[320px] sm:min-w-0 h-auto object-cover object-left"
            loading="lazy"
            onError={tryNext}
          />
        ) : (
          <div className="px-4 py-6 sm:py-8">
            <div className="flex items-end justify-between gap-1 h-24 sm:h-28 mb-4">
              {[35, 55, 40, 70, 50, 85, 60, 75, 45, 90, 65, 80].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-accent/20 to-accent/80"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <p className="text-sm text-yellow-100 text-center">
              {repoCount ?? "68+"} repos · {stars ?? "0"} stars ·{" "}
              <Link href={GITHUB} target="_blank" className="text-accent hover:underline">
                view live on GitHub
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityGraph;
