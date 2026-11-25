import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

// Search engines and AI assistants are welcome to read and cite the public pages.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
