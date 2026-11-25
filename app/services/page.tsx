import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Shell } from "../components/Shell";
import { JsonLd, breadcrumbJsonLd } from "../../lib/jsonld";
import { SERVICES } from "../../lib/services";

export const metadata: Metadata = {
  title: "Accountancy services in London",
  description: "Bookkeeping, payroll, VAT returns, Self Assessment, Making Tax Digital, corporation tax and company formation for small businesses in London.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <Shell>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services" }]} />
      <h1>Our services</h1>
      <p className="lead">We support sole traders, freelancers, people with side income and small limited companies across London and the UK.</p>
      <div className="cardList">
        {SERVICES.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="cardLink">
            <strong>{s.title}</strong>
            <span>{s.intro}</span>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
