import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Shell } from "../components/Shell";
import { JsonLd, breadcrumbJsonLd } from "../../lib/jsonld";
import { listGuides } from "../../lib/guides";
import { OG_BASE } from "../../lib/site";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "UK tax guides for sole traders and small businesses",
  description: "Plain-English guides to Self Assessment, Making Tax Digital, VAT and payroll, checked against GOV.UK.",
  alternates: { canonical: "/guides" },
  openGraph: { ...OG_BASE, title: "UK tax guides for sole traders and small businesses", url: "/guides" },
};

export default async function GuidesPage() {
  const guides = await listGuides();
  return (
    <Shell>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Guides" }]} />
      <h1>Guides</h1>
      <p className="lead">Plain-English guides to the UK tax rules our clients ask about most. Each one links to the GOV.UK pages it is based on.</p>
      {guides.length === 0 ? (
        <p>New guides are on their way.</p>
      ) : (
        <div className="cardList">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="cardLink">
              <strong>{g.title}</strong>
              <span>{g.description}</span>
            </Link>
          ))}
        </div>
      )}
      <p className="muted">General information, not advice.</p>
    </Shell>
  );
}
