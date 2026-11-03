const siteUrl = "https://techyrushi.in";

export default function sitemap() {
  const pages = ["", "/about", "/projects", "/experience", "/contact"];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
