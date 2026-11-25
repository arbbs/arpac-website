import type { Metadata } from "next";
import Link from "next/link";
import { OG_BASE } from "../lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...OG_BASE, url: "/" },
};

const services = [
  ["Personal Tax", "self-assessment", "We help prepare personal tax information and support clients with records needed for Self Assessment."],
  ["Corporation Tax", "corporation-tax", "We support limited companies with accounts information, bookkeeping records and corporation tax preparation."],
  ["Payroll", "payroll", "We prepare payroll, payslips and employer records, including submissions required by HMRC."],
  ["Company Formation", "company-formation", "We help clients understand the setup requirements for forming and operating a UK limited company."],
  ["VAT Returns", "vat-returns", "We prepare VAT records and support VAT return preparation for businesses registered for VAT."],
  ["Bookkeeping", "bookkeeping", "We maintain bookkeeping records, prepare trial balances and support monthly management information."],
];

export default function HomePage() {
  return (
    <main>
      <header className="siteHeader">
        <Link href="/" className="logo">AR</Link>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#why">Why Choose Us</a>
          <Link href="/services">Our Services</Link>
          <Link href="/guides">Guides</Link>
          <a href="#contact">Contact Us</a>
          <a href="#contact">Book Online</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="heroImage" />
        <div className="heroCard">
          <h1>AR Payroll & Consultancy Ltd</h1>
          <div className="line" />
          <p>
            AR Payroll & Consultancy Ltd, formerly known as AR Book Keeping
            Service, provides bookkeeping, payroll, VAT and accountancy support
            for individuals and businesses.
          </p>
          <p>
            We also operate AR Bookkeeping, our internal software used to help
            manage client records, VAT preparation and HMRC Making Tax Digital
            workflows.
          </p>
        </div>
      </section>

      <section id="why" className="whySection">
        <h2>Why Choose Us</h2>
        <p>
          We focus on clear records, practical support and reliable compliance
          workflows for small businesses.
        </p>

        <div className="whyGrid">
          <div>
            <strong>Practical support</strong>
            <span>Bookkeeping, payroll, VAT and accounts support in one place.</span>
          </div>
          <div>
            <strong>HMRC-focused systems</strong>
            <span>Software workflows designed around VAT MTD and record keeping.</span>
          </div>
          <div>
            <strong>Client-first approach</strong>
            <span>Clear communication and secure handling of business data.</span>
          </div>
        </div>
      </section>

      <section id="services" className="servicesSection">
        <div className="sectionIntro">
          <h2>Our Services</h2>
          <p>Accounting, bookkeeping, payroll and VAT support for UK businesses.</p>
        </div>

        <div className="serviceGrid">
          {services.map(([title, slug, text]) => (
            <article className="serviceCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link href={`/services/${slug}`}>+ Learn More</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial">
        <h2>Testimonials</h2>
        <blockquote>
          “AR Payroll & Consultancy Ltd has been doing my books for the past 5
          years. They are very efficient, professional and reliable.”
        </blockquote>
        <p>
          <strong>Henry Bell</strong>
          <br />
          CEO of Chardos Building Renovations Ltd
        </p>
      </section>

      <section className="cta">
        <h2>Ready to find out more?</h2>
        <p>
          Contact us to discuss bookkeeping, payroll, VAT returns or AR
          Bookkeeping software support.
        </p>
        <a href="#contact" className="button">Get free consultation</a>
      </section>

      <section id="contact" className="contactSection">
        <h2>Contact Us</h2>

        <div className="contactGrid">
          <div>
            <h3>AR Payroll & Consultancy Ltd</h3>
            <p>272 Brixton Hill</p>
            <p>London</p>
            <p>SW2 1HP</p>
          </div>

          <div>
            <h3>Contact details</h3>
            <p>Tel: <a href="tel:02037437144">02037437144</a></p>
            <p>Email: <a href="mailto:info@ar-bookkeeping.com">info@ar-bookkeeping.com</a></p>
          </div>

          <div>
            <h3>Legal</h3>
            <p><Link href="/privacy-policy">Privacy Policy</Link></p>
            <p><Link href="/terms">Terms and Conditions</Link></p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} AR Payroll & Consultancy Ltd. All rights reserved.</p>
        <p>
          <Link href="/privacy-policy">Privacy Policy</Link> ·{" "}
          <Link href="/terms">Terms</Link>
        </p>
      </footer>
    </main>
  );
}


