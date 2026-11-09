import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const siteUrl = "https://techyrushi.in";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Rushikesh Chavan",
    default: "Rushikesh Chavan | DevOps Engineer & SRE in Pune, India",
  },
  description:
    "Rushikesh Chavan is a Pune-based DevOps Engineer and Site Reliability Engineer with experience in AWS, Kubernetes, Terraform, CI/CD, and production infrastructure.",
  applicationName: "Rushikesh Chavan Portfolio",
  authors: [{ name: "Rushikesh Chavan", url: siteUrl }],
  creator: "Rushikesh Chavan",
  publisher: "Rushikesh Chavan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Rushikesh Chavan | DevOps Engineer & SRE in Pune, India",
    description:
      "Portfolio of Rushikesh Chavan, a Pune-based DevOps Engineer and SRE working with AWS, Kubernetes, Terraform, CI/CD, and cloud infrastructure.",
    siteName: "Rushikesh Chavan Portfolio",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Rushikesh Chavan | DevOps Engineer & SRE",
    description:
      "Pune-based DevOps Engineer and SRE specializing in AWS, Kubernetes, Terraform, CI/CD, and reliable production systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune, Maharashtra, India",
  },
};

export default function RootLayout({ children }) {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rushikesh Chavan",
    url: siteUrl,
    image: `${siteUrl}/icon.svg`,
    jobTitle: "DevOps Engineer and Site Reliability Engineer",
    description:
      "Pune-based DevOps Engineer and SRE with experience in AWS, Kubernetes, Terraform, CI/CD, cloud infrastructure, and backend systems.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Techyrushi",
      "https://www.linkedin.com/in/chavanrushikesh/",
      "https://www.instagram.com/_.iamrushikesh._",
      "https://www.leetcode.com/TechyRushi",
    ],
    knowsAbout: [
      "DevOps",
      "Site Reliability Engineering",
      "Amazon Web Services",
      "Kubernetes",
      "Terraform",
      "Continuous Integration and Continuous Delivery",
      "GitOps",
      "Cloud Infrastructure",
      "Prometheus",
      "Grafana",
    ],
  };

  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />

        {/* Tawk.to Script */}
        {/* <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/66c07641146b7af4a43b7a89/1i5fsrs7q';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script> */}
      </body>
    </html>
  );
}