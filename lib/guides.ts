import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./site";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  body_md: string;
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  audience: string | null;
  published_at: string;
  reviewed_on: string | null;
  updated_at: string;
};

const FIELDS = "slug,title,description,summary,body_md,faqs,sources,audience,published_at,reviewed_on,updated_at";
const REVALIDATE_SECONDS = 600; // newly approved guides appear within 10 minutes

async function query(params: string): Promise<Guide[]> {
  try {
    const base = process.env.GUIDES_API_URL ?? SUPABASE_URL; // override only for local previews
    const res = await fetch(`${base}/rest/v1/site_guides?status=eq.published&select=${FIELDS}&${params}`, {
      headers: { apikey: SUPABASE_PUBLISHABLE_KEY, Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}` },
      next: { revalidate: REVALIDATE_SECONDS, tags: ["guides"] },
    });
    if (!res.ok) return [];
    return (await res.json()) as Guide[];
  } catch {
    // The site must still build and serve if the guides store is unreachable.
    return [];
  }
}

export async function listGuides(): Promise<Guide[]> {
  return query("order=published_at.desc&limit=200");
}

export async function getGuide(slug: string): Promise<Guide | null> {
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) return null;
  const rows = await query(`slug=eq.${encodeURIComponent(slug)}&limit=1`);
  return rows[0] ?? null;
}
