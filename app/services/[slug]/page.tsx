import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faqs, Shell } from "../../components/Shell";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "../../../lib/jsonld";
import { SERVICES, getService } from "../../../lib/services";
import { OG_BASE, SITE_URL } from "../../../lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { ...OG_BASE, title: s.metaTitle, description: s.description, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    serviceType: s.title,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: "London" },
    url: `${SITE_URL}/services/${s.slug}`,
  };

  return (
    <Shell>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }])} />
      {s.faqs.length > 0 && <JsonLd data={faqJsonLd(s.faqs)} />}
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: s.title }]} />
      <h1>{s.title}</h1>
      <p className="lead">{s.intro}</p>
      <h2>What we do</h2>
      <ul>{s.whatWeDo.map((w) => <li key={w}>{w}</li>)}</ul>
      <h2>Who it is for</h2>
      <ul>{s.whoFor.map((w) => <li key={w}>{w}</li>)}</ul>
      <Faqs faqs={s.faqs} />
      <p className="muted">
        See also our <Link href="/guides">guides</Link> to UK tax rules, checked against GOV.UK.
      </p>
    </Shell>
  );
}
