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
        // A custom loader (not `unoptimized`) so that image `src` values get the
        // `/${repo}` base-path prefix — otherwise images 404 on GitHub Pages.
        images: { loader: "custom", loaderFile: "./image-loader.js" },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
