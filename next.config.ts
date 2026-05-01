import type { NextConfig } from "next";

// User-site repo (wambui-pixel.github.io) → no basePath needed.
// Project-site repos would need basePath: '/<repo-name>'.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
