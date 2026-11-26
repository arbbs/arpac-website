import { listGuides } from "../../lib/guides";
import { SERVICES } from "../../lib/services";
import { BUSINESS, SITE_URL } from "../../lib/site";

// llms.txt: a plain-text map of the site for AI assistants (https://llmstxt.org).
export const revalidate = 600;

export async function GET() {
  const guides = await listGuides();
  const lines = [
    `# ${BUSINESS.name}`,
    "",
    `> London accountancy practice (${BUSINESS.street}, ${BUSINESS.locality} ${BUSINESS.postalCode}) providing bookkeeping, payroll, VAT returns, Self Assessment, Making Tax Digital support, corporation tax and company formation for sole traders, freelancers, people with side income and limited companies with 1 to 10 staff. Contact: ${BUSINESS.email}, ${BUSINESS.telephoneDisplay}.`,
    "",
    "## Services",
    ...SERVICES.map((s) => `- [${s.title}](${SITE_URL}/services/${s.slug}): ${s.description}`),
    "",
    "## Guides",
    ...(guides.length ? guides.map((g) => `- [${g.title}](${SITE_URL}/guides/${g.slug}): ${g.description}`) : ["- New guides are on their way."]),
    "",
    "## Get in touch",
    `- [Free 1-minute check](${SITE_URL}/check): a short form; the practice calls back to explain what you need to file and when.`,
    "",
    "## Notes",
    "- Guides are general information, not advice. Each cites the GOV.UK pages it is based on.",
  ];
  return new Response(lines.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
