import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Certifications from "./Certifications";
import { certificationsData } from "@/app/data";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Reliability
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            DevOps Engineer and SRE with 3+ years of experience delivering cloud
            infrastructure, CI/CD automation, and production reliability for SaaS,
            hosting, gaming, and streaming platforms. I design Kubernetes and Docker
            platforms, Terraform infrastructure as code, and GitLab / GitHub Actions
            pipelines so teams ship faster without sacrificing uptime.
            I keep production healthy with Prometheus, Grafana, ELK, Datadog, and Zabbix,
            and apply SRE practices — SLO/SLA, on-call, RCA, GitOps, DevSecOps, and DORA
            metrics. Recent work includes an AIOps SRE assistant that diagnoses incidents
            from logs, metrics, and cluster health.
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

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Techyrushi&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Techyrushi"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <Link href="https://github.com/Techyrushi" target="_blank" className="w-full">
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api?username=Techyrushi&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="Techyrushi"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,linux,bash,docker,kubernetes,terraform,ansible,jenkins,githubactions,grafana,prometheus,nginx,nodejs,nestjs,express,python,java,mongodb,mysql,postgresql,redis,git,github,laravel,php,vscode,postman`}
            alt="Techyrushi skills"
            loading="lazy"
          />
        </ItemLayout>

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

        <ItemLayout className={"col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=Techyrushi&theme=dark&type=svg&background=EB545400&ring=FFEF20&border=FFF60C00"
            alt="Techyrushi streak"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-6 !p-0"}>
          <a
            href="https://github.com/Techyrushi/argocd-in-one-shot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=Techyrushi&repo=argocd-in-one-shot&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&text_bold=false&description_lines_count=2&icon_color=FEFE5B"
              alt="Techyrushi ArgoCD repo"
              loading="lazy"
            />
          </a>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://raw.githubusercontent.com/avayyyyyyy/avayyyyyyy/output/snake.svg`}
            alt="Techyrushi"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
