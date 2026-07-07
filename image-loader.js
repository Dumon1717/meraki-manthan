// Custom next/image loader used ONLY for the GitHub Pages static export.
// Next.js does not prepend `basePath` to image `src` when `output: 'export'`
// is combined with unoptimized images, so images 404 on a project site served
// from /meraki-manthan/. This loader restores the prefix for every image.
//
// It is wired up in next.config.ts only when GITHUB_PAGES === "true", so local
// dev and other hosts (e.g. Vercel at the domain root) are unaffected.
const BASE_PATH = "/meraki-manthan";

export default function githubPagesImageLoader({ src }) {
  // Leave absolute/remote URLs untouched.
  if (/^https?:\/\//.test(src)) return src;
  // Avoid double-prefixing if a src already includes the base path.
  if (src.startsWith(`${BASE_PATH}/`)) return src;
  return `${BASE_PATH}${src.startsWith("/") ? "" : "/"}${src}`;
}
