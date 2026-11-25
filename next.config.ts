import type { NextConfig } from "next";

const STATIC_PAGES =
  "index|services|industries|software|about|models|cameras|articles";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/", destination: "/en/index", permanent: false },
      { source: "/en", destination: "/en/index", permanent: false },
      { source: "/es", destination: "/es/index", permanent: false },
      {
        source: "/:locale(en|es)/article",
        has: [{ type: "query", key: "slug" }],
        destination: "/:locale/article/:slug",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: `/:locale(en|es)/:page(${STATIC_PAGES})`,
          destination: "/:locale/:page.html",
        },
        {
          source: "/:locale(en|es)/services/:slug",
          destination: "/:locale/services/:slug.html",
        },
      ],
      afterFiles: [
        // SPA fallback for panels (avoid rewriting index.html onto itself)
        {
          source: "/user-panel/:path*",
          destination: "/user-panel/index.html",
        },
        {
          source: "/admin-panel/:path*",
          destination: "/admin-panel/index.html",
        },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
