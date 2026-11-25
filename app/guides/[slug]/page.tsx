import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faqs, Shell } from "../../components/Shell";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "../../../lib/jsonld";
import { getGuide, listGuides } from "../../../lib/guides";
import { Markdown } from "../../../lib/markdown";
import { BUSINESS, SITE_URL } from "../../../lib/site";

export const revalidate = 600;

export async function generateStaticParams() {
  const guides = await listGuides();
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = await getGuide(slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { type: "article", title: g.title, description: g.description, url: `/guides/${g.slug}`, publishedTime: g.published_at, modifiedTime: g.updated_at },
  };
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/London" });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = await getGuide(slug);
  if (!g) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    datePublished: g.published_at,
    dateModified: g.updated_at,
    author: { "@type": "Organization", name: BUSINESS.name, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#business` },
    mainEntityOfPage: `${SITE_URL}/guides/${g.slug}`,
    citation: g.sources.map((s) => s.url),
  };

  return (
    <Shell>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: g.title, path: `/guides/${g.slug}` }])} />
      {g.faqs.length > 0 && <JsonLd data={faqJsonLd(g.faqs)} />}
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: g.title }]} />
      <article>
        <h1>{g.title}</h1>
        <p className="muted">
          {g.reviewed_on ? `Checked against GOV.UK on ${fmt(g.reviewed_on)}.` : `Published ${fmt(g.published_at)}.`} General information, not advice.
        </p>
        <p className="lead">{g.summary}</p>
        <Markdown source={g.body_md} />
        <Faqs faqs={g.faqs} />
        {g.sources.length > 0 && (
          <section>
            <h2>Sources</h2>
            <ul>
              {g.sources.map((s) => (
                <li key={s.url}><a href={s.url} rel="noopener" target="_blank">{s.label}</a></li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </Shell>
  );
}
