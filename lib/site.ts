// Business details used for metadata, structured data and pages.
export const SITE_URL = "https://www.ar-bookkeeping.com";

// Shared Open Graph fields. Next.js replaces (does not merge) a parent's openGraph,
// so every page that sets openGraph spreads this in.
export const OG_BASE = { type: "website" as const, locale: "en_GB", siteName: "AR Payroll & Consultancy Ltd" };

export const BUSINESS = {
  name: "AR Payroll & Consultancy Ltd",
  alternateName: "AR Book Keeping Service",
  email: "info@ar-bookkeeping.com",
  telephone: "+442037437144",
  telephoneDisplay: "020 3743 7144",
  street: "272 Brixton Hill",
  locality: "London",
  postalCode: "SW2 1HP",
  country: "GB",
};

// Public, read-only connection used to show published guides.
// The publishable key can only read guides whose status is 'published' (row-level security).
export const SUPABASE_URL = "https://ovmitmfmrinhudxqnptg.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_l-XwX7oqfB1zQmnyKWY2XQ_JWd_c5zl";
