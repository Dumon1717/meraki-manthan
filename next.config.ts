import type { NextConfig } from "next";

// When building for GitHub Pages (a project site served from /<repo>),
// we need static export, unoptimized images, and a base path.
// Local dev + other hosts (e.g. Vercel) keep root paths.
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "meraki-manthan";

const nextConfig: NextConfig = {
  ...(isPages
    ? {
        output: "export",
        basePath: `/${repo}`,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
