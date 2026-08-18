import React from "react";
import ItemLayout from "./ItemLayout";
import Certifications from "./Certifications";
import GitHubShowcase from "./GitHubShowcase";
import { certificationsData } from "@/app/data";

const AboutDetails = () => {
  return (
    <section id="next-section" className="py-20 w-full scroll-mt-8">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            DevOps Engineer · Site Reliability
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I build and run production platforms: Kubernetes, Docker, Terraform, GitLab /
            GitHub Actions CI/CD, and AWS. The work is SRE-shaped — 99.9% uptime, SLO/SLA,
            on-call, RCA, GitOps, and observability with Prometheus, Grafana, Datadog, and
            Zabbix. 3+ years shipping cloud infrastructure for hosting, SaaS, gaming, and
            streaming. Always learning. Always shipping. Always improving reliability.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+ <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            99.9% <sub className="font-semibold text-base">production uptime</sub>
          </p>
        </ItemLayout>

        <GitHubShowcase />

        <ItemLayout className={"col-span-full flex-col items-start"}>
          <h3 className="text-lg md:text-xl text-accent w-full">Education</h3>
          <div className="w-full space-y-3 text-xs sm:text-sm font-light">
            <p>
              <span className="font-semibold text-foreground">Master in Computer Application (MCA)</span>
              <br />
              Government College of Engineering, Maharashtra · CGPA 8.65
              <br />
              Oct 2022 – Apr 2024
            </p>
            <p>
              <span className="font-semibold text-foreground">Bachelor in Computer Science (BSc CS)</span>
              <br />
              Savitribai Phule Pune University, Maharashtra · CGPA 8.86
              <br />
              Aug 2019 – Apr 2022
            </p>
          </div>
        </ItemLayout>

        <div className="col-span-full flex flex-col items-start gap-4">
          <div>
            <h3 className="text-lg md:text-xl text-accent">Certifications</h3>
            <p className="text-xs sm:text-sm text-yellow-100/60 mt-1">
              Cloud, DevOps, SRE, and infrastructure credentials.
            </p>
          </div>
          <Certifications certifications={certificationsData} />
        </div>

        <ItemLayout className={"col-span-full !p-3 sm:!p-4 overflow-hidden"}>
          <img
            className="w-full h-auto"
            src="https://raw.githubusercontent.com/avayyyyyyy/avayyyyyyy/output/snake.svg"
            alt="GitHub contribution snake"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
