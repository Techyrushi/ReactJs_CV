"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Radar,
  Sparkles,
} from "lucide-react";
import ItemLayout from "./ItemLayout";
import ActivityGraph from "./ActivityGraph";
import { certificationsData, socialLinks } from "@/app/data";

const GITHUB = "https://github.com/Techyrushi";
const USER = "Techyrushi";

const STAT_SOURCES = [
  `https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true`,
  `https://github-readme-statss-inky.vercel.app/api?username=${USER}&show_icons=true&theme=tokyonight&hide_border=true`,
  `https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&theme=dark&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B&text_color=FFFFFF`,
];

const LANG_SOURCES = [
  `https://github-readme-stats.vercel.app/api/top-langs/?username=${USER}&layout=compact&theme=tokyonight&hide_border=true&langs_count=8`,
  `https://github-readme-statss-inky.vercel.app/api/top-langs/?username=${USER}&layout=compact&theme=tokyonight&hide_border=true`,
];

const STREAK_SOURCES = [
  `https://streak-stats.demolab.com/?user=${USER}&theme=tokyonight&hide_border=true`,
  `https://streak-stats.demolab.com/?user=${USER}&theme=dark&hide_border=true&ring=FEFE5B&fire=FEFE5B&currStreakLabel=FEFE5B`,
];

const VIEW_SOURCES = [
  `https://komarev.com/ghpvc/?username=${USER}&label=Profile%20Visits&color=0e75b6&style=for-the-badge`,
  `https://komarev.com/ghpvc/?username=${USER}&label=GitHub+Views&color=00b4d8&style=for-the-badge`,
];

const PINNED = [
  { repo: "argocd-in-one-shot", label: "ArgoCD GitOps", stack: "GitOps · Kubernetes" },
  { repo: "ansible-in-one-shot", label: "Ansible IaC", stack: "Ansible · Terraform" },
  { repo: "devops-ai-playbook", label: "AIOps Playbook", stack: "AIOps · SRE" },
];

const MATRIX = [
  { name: "CI / CD", stack: "GitLab · Jenkins · GitHub Actions", level: 90 },
  { name: "Kubernetes", stack: "EKS · Helm · ArgoCD", level: 88 },
  { name: "IaC", stack: "Terraform · Ansible", level: 86 },
  { name: "Observability", stack: "Prometheus · Grafana · Datadog", level: 84 },
  { name: "Cloud / Linux", stack: "AWS · Nginx · SSL / VPS", level: 92 },
  { name: "SRE", stack: "SLO · RCA · On-call · DORA", level: 85 },
];

const DEVOPS_TOOLS = [
  { name: "AWS", icon: "aws" },
  { name: "Linux", icon: "linux" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Terraform", icon: "terraform" },
  { name: "Ansible", icon: "ansible" },
  { name: "Jenkins", icon: "jenkins" },
  { name: "GitHub Actions", icon: "githubactions" },
  { name: "GitLab", icon: "gitlab" },
  { name: "Grafana", icon: "grafana" },
  { name: "Prometheus", icon: "prometheus" },
  { name: "Nginx", icon: "nginx" },
];

const IMPACT_METRICS = [
  { value: "60%", label: "Faster deployments", detail: "GitLab CI/CD · Docker · Kubernetes" },
  { value: "99.9%", label: "Production uptime", detail: "Hosting · SaaS · streaming platforms" },
  { value: "50%", label: "Faster incident detection", detail: "Datadog · Zabbix · Prometheus" },
  { value: "3+", label: "Years DevOps / SRE", detail: "Cloud · CI/CD · on-call delivery" },
];

const PLATFORM_EXPERTISE = [
  "AWS EKS · EC2 · S3 · RDS · IAM · VPC",
  "GitOps with ArgoCD, Helm, and GitHub Actions",
  "Terraform & Ansible infrastructure automation",
  "Linux, Nginx, SSL/TLS, VPS, and PM2 operations",
  "Prometheus, Grafana, ELK, and Datadog observability",
  "SLO/SLA, RCA, on-call, and DORA reliability practices",
];

const socialIcon = (name) => {
  switch (name) {
    case "github":
      return Github;
    case "linkedin":
      return Linkedin;
    case "instagram":
      return Instagram;
    case "mail":
      return Mail;
    case "leetcode":
      return Code2;
    default:
      return Globe;
  }
};

const FallbackImage = ({ sources, alt, className, fallback }) => {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const fail = () => {
    if (index + 1 < sources.length) setIndex((current) => current + 1);
    else setFailed(true);
  };

  if (failed || !sources[index]) return fallback || null;

  return (
    <img
      src={sources[index]}
      alt={alt}
      className={className}
      loading="lazy"
      onError={fail}
      onLoad={(event) => {
        if (!event.currentTarget.naturalWidth) fail();
      }}
    />
  );
};

const GitHubShowcase = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USER}`),
          fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`),
        ]);
        if (!active) return;
        if (userRes.ok) setProfile(await userRes.json());
        if (repoRes.ok) {
          const data = await repoRes.json();
          if (Array.isArray(data)) setRepos(data);
        }
      } catch {
        // Native cards remain visible if GitHub widgets are down.
      }
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  const languages = useMemo(() => {
    const counts = {};
    repos.forEach((repo) => {
      if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
  }, [repos]);

  const stars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
  const devopsRepos = repos.filter((repo) =>
    /devops|k8s|kube|terraform|ansible|argo|docker|ci|helm|aws/i.test(
      `${repo.name} ${repo.description || ""}`
    )
  ).length;

  return (
    <>
      <ItemLayout className="col-span-full flex-col items-stretch !space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 w-full">
          <div>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.22em] text-accent mb-1">
              DevOps Stats Matrix
            </p>
            <h3 className="text-xl md:text-3xl font-semibold text-yellow-100">
              GitHub overview · Techyrushi
            </h3>
            <p className="text-xs sm:text-sm text-yellow-100/70 mt-1 max-w-2xl">
              CI/CD, GitOps, and SRE telemetry. Widgets fall back to the GitHub API so this
              section still reads if a CDN is down.
            </p>
          </div>
          <Link
            href={GITHUB}
            target="_blank"
            className="inline-flex items-center gap-2 self-start rounded-full border border-accent/50 bg-accent text-background px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-yellow-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            Open GitHub profile
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </ItemLayout>

      <ItemLayout className="col-span-full sm:col-span-6 lg:col-span-3 flex-col items-start !space-y-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Profile views</p>
        <FallbackImage
          sources={VIEW_SOURCES}
          alt="GitHub profile visits"
          className="h-8 sm:h-9 w-auto max-w-full"
          fallback={<p className="text-2xl font-semibold text-yellow-100">github.com/{USER}</p>}
        />
      </ItemLayout>

      <ItemLayout className="col-span-full sm:col-span-6 lg:col-span-3 flex-col items-start">
        <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Public repos</p>
        <p className="text-3xl sm:text-4xl font-semibold text-yellow-100">
          {profile?.public_repos ?? "68+"}
        </p>
      </ItemLayout>

      <ItemLayout className="col-span-full sm:col-span-6 lg:col-span-3 flex-col items-start">
        <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Followers</p>
        <p className="text-3xl sm:text-4xl font-semibold text-yellow-100">
          {profile?.followers ?? "10+"}
        </p>
      </ItemLayout>

      <ItemLayout className="col-span-full sm:col-span-6 lg:col-span-3 flex-col items-start">
        <p className="text-[10px] uppercase tracking-[0.2em] text-accent">DevOps repos</p>
        <p className="text-3xl sm:text-4xl font-semibold text-yellow-100">
          {repos.length ? devopsRepos || 8 : "8+"}
        </p>
      </ItemLayout>

      {MATRIX.map((item) => (
        <ItemLayout
          key={item.name}
          className="col-span-full sm:col-span-6 lg:col-span-4 flex-col items-start !space-y-3"
        >
          <div className="w-full flex items-center justify-between gap-3">
            <h4 className="text-sm sm:text-base font-semibold text-yellow-100">{item.name}</h4>
            <span className="text-accent text-xs font-semibold">{item.level}%</span>
          </div>
          <p className="text-xs text-yellow-100/65">{item.stack}</p>
          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full bg-accent" style={{ width: `${item.level}%` }} />
          </div>
        </ItemLayout>
      ))}

      <ItemLayout className="col-span-full flex-col items-start !space-y-3 !p-4 sm:!p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Highlighted</p>
          <h3 className="text-lg md:text-xl font-semibold text-yellow-100">DevOps & SRE stack</h3>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {DEVOPS_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-2 rounded-xl border border-accent/25 bg-background/40 px-2 py-3 hover:border-accent transition-colors"
            >
              <img
                src={`https://skillicons.dev/icons?i=${tool.icon}`}
                alt={tool.name}
                className="w-10 h-10"
                loading="lazy"
              />
              <span className="text-[10px] sm:text-xs text-yellow-100 text-center leading-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </ItemLayout>

      <ItemLayout className="col-span-full sm:col-span-4 flex-col items-start !space-y-3">
        <div className="flex items-center gap-2 text-accent">
          <Radar className="w-4 h-4" />
          <h4 className="text-sm sm:text-base font-semibold">Current focus</h4>
        </div>
        <ul className="text-xs sm:text-sm text-yellow-100/75 space-y-2 font-light">
          <li>GitOps, Kubernetes, and zero-downtime CI/CD</li>
          <li>AWS, Terraform, and production reliability</li>
        </ul>
      </ItemLayout>

      <ItemLayout className="col-span-full sm:col-span-4 flex-col items-start !space-y-3">
        <div className="flex items-center gap-2 text-accent">
          <Sparkles className="w-4 h-4" />
          <h4 className="text-sm sm:text-base font-semibold">Exploring</h4>
        </div>
        <ul className="text-xs sm:text-sm text-yellow-100/75 space-y-2 font-light">
          <li>Helm, ArgoCD, and platform engineering</li>
          <li>AIOps, RCA automation, and SRE tooling</li>
        </ul>
      </ItemLayout>

      <ItemLayout className="col-span-full sm:col-span-4 flex-col items-start !space-y-3">
        <div className="flex items-center gap-2 text-accent">
          <MessageCircle className="w-4 h-4" />
          <h4 className="text-sm sm:text-base font-semibold">Ask me about</h4>
        </div>
        <ul className="text-xs sm:text-sm text-yellow-100/75 space-y-2 font-light">
          <li>CI/CD, GitOps, Linux, and on-call SRE</li>
          <li>Observability, Nginx, and AWS operations</li>
        </ul>
      </ItemLayout>

      <ItemLayout className="col-span-full md:col-span-8 !p-3 sm:!p-4 overflow-hidden">
        <FallbackImage
          sources={STAT_SOURCES}
          alt={`${USER} GitHub stats`}
          className="w-full h-auto"
          fallback={
            <div className="p-4 space-y-2">
              <p className="text-accent text-xs uppercase tracking-widest">GitHub overview</p>
              <p className="text-yellow-100 text-lg font-semibold">
                {profile?.public_repos ?? "68"} repos · {profile?.followers ?? "10+"} followers · {stars} stars
              </p>
            </div>
          }
        />
      </ItemLayout>

      <ItemLayout className="col-span-full md:col-span-4 !p-3 sm:!p-4 overflow-hidden">
        <FallbackImage
          sources={LANG_SOURCES}
          alt={`${USER} top languages`}
          className="w-full h-auto"
          fallback={
            <div className="p-4 w-full space-y-2">
              <p className="text-accent text-xs uppercase tracking-widest">Top languages</p>
              {(languages.length ? languages : [["HCL"], ["Shell"], ["Python"], ["TypeScript"]]).map(
                ([lang, count]) => (
                  <p key={lang} className="text-sm text-yellow-100">
                    {lang} {count ? <span className="text-yellow-100/50">· {count} repos</span> : null}
                  </p>
                )
              )}
            </div>
          }
        />
      </ItemLayout>

      <ItemLayout className="col-span-full lg:col-span-6 !p-3 sm:!p-4 overflow-hidden !space-y-0">
        <FallbackImage
          sources={STREAK_SOURCES}
          alt={`${USER} GitHub streak`}
          className="w-full h-auto"
          fallback={
            <div className="p-4">
              <p className="text-accent text-xs uppercase tracking-widest mb-2">Streak</p>
              <p className="text-sm text-yellow-100">
                Live profile: github.com/{USER} — shipping DevOps and SRE work continuously.
              </p>
            </div>
          }
        />
      </ItemLayout>

      <ItemLayout className="col-span-full lg:col-span-6 flex-col items-stretch !space-y-3 !p-4 sm:!p-5">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-accent">Production impact</p>
          <h4 className="text-sm sm:text-base font-semibold text-yellow-100">
            Reliability & delivery outcomes
          </h4>
        </div>
        <div className="w-full grid grid-cols-2 gap-2 sm:gap-3 flex-1 content-start">
          {IMPACT_METRICS.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-accent/25 bg-background/40 p-2.5 sm:p-3"
            >
              <p className="text-xl sm:text-2xl font-bold text-accent leading-none">{item.value}</p>
              <p className="text-[11px] sm:text-xs font-medium text-yellow-100 mt-1.5 leading-tight">
                {item.label}
              </p>
              <p className="text-[10px] text-yellow-100/50 mt-1 leading-snug hidden sm:block">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </ItemLayout>

      <ItemLayout className="col-span-full lg:col-span-6 flex-col items-stretch !space-y-3 !p-4 sm:!p-5">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-accent">Platform expertise</p>
          <h4 className="text-sm sm:text-base font-semibold text-yellow-100">
            What I run in production
          </h4>
        </div>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-yellow-100/80 flex-1">
          {PLATFORM_EXPERTISE.map((item) => (
            <li key={item} className="flex items-start gap-1.5 leading-snug">
              <span className="text-accent shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="w-full pt-2 border-t border-accent/15">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-1.5">Top credentials</p>
          <div className="flex flex-wrap gap-1.5">
            {certificationsData.slice(0, 4).map((cert) => (
              <span
                key={cert.title}
                className="rounded-full border border-accent/30 bg-accent/5 px-2 py-0.5 text-[10px] text-yellow-100 leading-tight"
              >
                {cert.title}
              </span>
            ))}
          </div>
        </div>
      </ItemLayout>

      <ItemLayout className="col-span-full flex-col items-stretch w-full !p-3 sm:!p-4 !space-y-0">
        <ActivityGraph repoCount={profile?.public_repos} stars={stars} />
      </ItemLayout>

      <ItemLayout className="col-span-full flex-col items-start !space-y-3 !p-4 sm:!p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Core capabilities</p>
          <h4 className="text-sm sm:text-base font-semibold text-yellow-100">DevOps delivery pillars</h4>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { title: "GitOps", detail: "ArgoCD · Helm · EKS" },
            { title: "CI/CD", detail: "GitHub Actions · Jenkins · GitLab" },
            { title: "IaC", detail: "Terraform · Ansible" },
            { title: "SRE", detail: "SLO · RCA · 99.9% uptime" },
            { title: "Observability", detail: "Prometheus · Grafana · Datadog" },
            { title: "Cloud", detail: "AWS · Linux · Nginx" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-accent/25 bg-background/40 p-4 hover:border-accent transition-colors"
            >
              <p className="text-accent text-xs uppercase tracking-widest">{item.title}</p>
              <p className="text-sm text-yellow-100 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </ItemLayout>

      {PINNED.map((item) => (
        <ItemLayout key={item.repo} className="col-span-full sm:col-span-4 flex-col items-start !space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-accent">{item.stack}</p>
          <Link href={`${GITHUB}/${item.repo}`} target="_blank" className="text-yellow-100 hover:text-accent">
            <h4 className="text-sm sm:text-base font-semibold">{item.label}</h4>
            <p className="text-xs text-yellow-100/60 mt-1">{item.repo}</p>
          </Link>
        </ItemLayout>
      ))}

      <ItemLayout className="col-span-full flex-col items-start !space-y-3 !p-4 sm:!p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Connect</p>
          <h3 className="text-lg md:text-xl font-semibold text-yellow-100">Social</h3>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {socialLinks.map((item) => {
            const Icon = socialIcon(item.icon);
            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl border border-accent/25 bg-background/40 px-3 py-4 text-yellow-100 hover:border-accent hover:text-accent transition-colors text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </ItemLayout>
    </>
  );
};

export default GitHubShowcase;
