import Link from "next/link";
import { BUSINESS } from "../../lib/site";

// Header, footer and call to action shared by service and guide pages.
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="siteHeader">
        <Link href="/" className="logo">AR</Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/#contact">Contact Us</Link>
        </nav>
      </header>
      <main className="legalPage contentPage">{children}</main>
      <section className="cta">
        <h2>Want to talk it through?</h2>
        <p>Book a free consultation with our London team.</p>
        <Link href="/#contact" className="button">Get free consultation</Link>
      </section>
      <footer className="footer">
        <p>
          {BUSINESS.name} · {BUSINESS.street}, {BUSINESS.locality} {BUSINESS.postalCode} ·{" "}
          <a href={`tel:${BUSINESS.telephone}`}>{BUSINESS.telephoneDisplay}</a> ·{" "}
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
        </p>
        <p>
          <Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/terms">Terms</Link>
        </p>
      </footer>
    </>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      {items.map((it, i) => (
        <span key={it.name}>
          {i > 0 && " / "}
          {it.path ? <Link href={it.path}>{it.name}</Link> : it.name}
        </span>
      ))}
    </nav>
  );
}

export function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <section className="faqs">
      <h2>Common questions</h2>
      {faqs.map((f) => (
        <div key={f.q} className="faq">
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
    </section>
  );
}
