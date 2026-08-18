/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "AIOps-Enabled DevOps Platform for E-Commerce Microservices",
    description:
      "Orchestrated a 7-service e-commerce platform on AWS EKS with Terraform, GitHub Actions, and ArgoCD GitOps. Added Prometheus/Grafana observability and a Bedrock-based SRE assistant (Kira) for incident diagnosis across logs, metrics, and cluster health.",
    stack: "React, Node.js, PostgreSQL, Redis, Docker, Kubernetes (EKS), Terraform, GitHub Actions, ArgoCD, Prometheus, Grafana, AWS Bedrock",
    date: "2026-06-01",
    demoLink: "https://github.com/Techyrushi",
    imageUrl: "https://skillicons.dev/icons?i=kubernetes",
  },
  {
    id: 2,
    name: "Wanderlust — Cloud-Native MERN Platform (DevSecOps + GitOps)",
    description:
      "Deployed a production-style 3-tier MERN platform on AWS EKS with Jenkins CI/CD, ArgoCD GitOps, and Helm. Built DevSecOps gates with Trivy, OWASP Dependency-Check, and SonarQube, cutting critical issues reaching deploy by ~60%.",
    stack: "React, Node.js, Express, MongoDB, Redis, Docker, Kubernetes, Jenkins, SonarQube, Trivy, ArgoCD, AWS EKS, Helm, Prometheus, Grafana",
    date: "2025-11-01",
    demoLink: "https://github.com/Techyrushi",
    imageUrl: "https://skillicons.dev/icons?i=aws",
  },
  {
    id: 3,
    name: "MYYVO Multivendor E-Commerce Platform",
    description:
      "Built MYYVO on Node.js and NestJS with Redis caching (30% faster APIs) plus Razorpay, PhonePe, SBI, and logistics integrations for real-time transactions and order tracking.",
    stack: "Node.js, NestJS, MongoDB, REST APIs, AWS S3, GitHub Actions, Redis, Razorpay, PhonePe",
    date: "2025-02-10",
    demoLink: "https://myyvo.com/",
    imageUrl: "https://skillicons.dev/icons?i=nodejs",
  },
  {
    id: 4,
    name: "Maharashtra Foreign Scholarship Portal",
    description:
      "Architected and deployed a government-grade portal for the Government of Maharashtra so students can apply for foreign scholarships across 7 state departments. Built on on-premise infrastructure with RBAC, Aadhaar authentication, SBI payments, workflow automation, SSL/TLS, and 99.9% uptime.",
    stack: "Laravel, PHP, MySQL, RBAC, SSL/TLS, Aadhaar Auth, SBI Payment Gateway, On-premise",
    date: "2024-07-18",
    demoLink: "https://fs.maharashtra.gov.in/",
    departments: [
      "Tribal Development Department",
      "Social Justice & Special Assistance Department",
      "Higher and Technical Education Department",
      "Other Backward Bahujan Welfare Department",
      "Minority Development Department",
      "Forest Department",
      "Planning Department (SARTHI)",
    ],
    imageUrl: "https://www.google.com/s2/favicons?sz=128&domain=fs.maharashtra.gov.in",
  },
];

export const ExperienceData = [
  {
    id: 1,
    name: "BigCloudy Internet Services Pvt. Ltd.",
    role: "DevOps Engineer | SRE",
    description:
      "Owning cloud infrastructure, CI/CD, Kubernetes, and site reliability for hosting, SaaS, gaming, and live-streaming platforms — including Zero1Gaming and CasinoStreamer.",
    tags: ["DevOps", "SRE", "Kubernetes", "GitLab CI/CD", "Observability"],
    highlights: [
      "Designed GitLab CI/CD pipelines with Docker and Kubernetes, reducing deployment time by 60%.",
      "Managed Linux VPS infrastructure with Hestia CP, Nginx, SSL/TLS, PM2, DNS, and backups at 99.9% uptime.",
      "Implemented Datadog and Zabbix monitoring and alerting, cutting incident detection time by 50%.",
      "Kept multi-region hosting and streaming platforms highly available with on-call, RCA, and reliability practices.",
    ],
    dateRange: "Jun 2026 – Present",
    demoLink: "https://bigcloudy.com/",
    imageUrl: "https://www.google.com/s2/favicons?sz=128&domain=bigcloudy.com",
  },
  {
    id: 2,
    name: "SSD IT Solutions",
    role: "DevOps Engineer | SRE",
    description:
      "DevOps and SRE delivery for enterprise and government platforms — CI/CD, AWS infrastructure as code, GitOps, and production reliability.",
    tags: ["DevOps", "SRE", "AWS", "Terraform", "GitOps"],
    highlights: [
      "Designed Jenkins and GitHub Actions pipelines with Docker and Kubernetes for zero-downtime releases.",
      "Managed AWS infrastructure (EC2, S3, RDS, IAM, VPC, ECS, EKS) using Terraform and Ansible.",
      "Implemented Prometheus, Grafana, and ELK observability to improve incident response and uptime.",
      "Automated Linux production servers, Nginx, SSL/TLS, PM2, backups, and GitOps / IaC workflows.",
    ],
    dateRange: "Jun 2023 – May 2026",
    demoLink: "https://ssditsolutions.com/",
    imageUrl: "https://www.google.com/s2/favicons?sz=128&domain=ssditsolutions.com",
  },
];

export const certificationsData = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    category: "Cloud",
    icon: "https://skillicons.dev/icons?i=aws",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    category: "Cloud",
    icon: "https://skillicons.dev/icons?i=aws",
  },
  {
    title: "DevOps / SRE Certification",
    issuer: "HeyDevOps",
    category: "SRE",
    icon: "https://skillicons.dev/icons?i=kubernetes",
  },
  {
    title: "Docker & Kubernetes: Complete Guide",
    issuer: "Udemy",
    category: "Containers",
    icon: "https://skillicons.dev/icons?i=docker",
  },
  {
    title: "Terraform for DevOps — Hands-on IaC",
    issuer: "Self-directed",
    category: "IaC",
    icon: "https://skillicons.dev/icons?i=terraform",
  },
  {
    title: "Generative AI & Claude AI Certification",
    issuer: "Self-directed",
    category: "AIOps",
    icon: "https://skillicons.dev/icons?i=python",
  },
];

export const socialLinks = [
  {
    label: "Website",
    href: "https://techyrushi.vercel.app/",
    icon: "globe",
  },
  {
    label: "GitHub",
    href: "https://github.com/Techyrushi",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chavanrushikesh/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_.iamrushikesh._?igsh=MTh6MDB2czN4bHJycQ==",
    icon: "instagram",
  },
  {
    label: "LeetCode",
    href: "https://www.leetcode.com/TechyRushi",
    icon: "leetcode",
  },
  {
    label: "Email",
    href: "mailto:rushikeshchavan815@gmail.com",
    icon: "mail",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false, shortLabel: "Home" },
  { label: "About", link: "/about", icon: "about", newTab: false, shortLabel: "About" },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false, shortLabel: "Projects" },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false, shortLabel: "Contact" },
  {
    label: "Work Experience",
    link: "/experience",
    icon: "experience",
    newTab: false,
    shortLabel: "Experience",
  },
  {
    label: "Github",
    link: "https://github.com/Techyrushi",
    icon: "github",
    newTab: true,
    shortLabel: "GitHub",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/chavanrushikesh/",
    icon: "linkedin",
    newTab: true,
    shortLabel: "LinkedIn",
  },
  {
    label: "Resume",
    link: "https://drive.google.com/file/d/1WuCctDbgT0rP3Gp_V1psB6GcPpkOuuRP/view?usp=drive_link",
    icon: "resume",
    newTab: true,
    shortLabel: "Resume",
  },
];
