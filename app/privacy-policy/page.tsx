import type { Metadata } from "next";
import Link from "next/link";
import { OG_BASE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AR Payroll & Consultancy Ltd collects, uses and protects personal information.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { ...OG_BASE, title: "Privacy Policy", description: "How AR Payroll & Consultancy Ltd collects, uses and protects personal information.", url: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legalPage">
      <Link href="/" className="legalBack">
        ← Back to home
      </Link>

      <h1>Privacy Policy</h1>

      <p>
        This Privacy Policy explains how AR Payroll & Consultancy Ltd, operating AR Bookkeeping, collects, uses, stores and
        protects personal data and business data when providing accountancy,
        bookkeeping, payroll, VAT and HMRC Making Tax Digital related services.
      </p>

      <p>
        This policy also covers the AR Bookkeeping software used by AR Payroll & Consultancy Ltd to manage client records, VAT preparation, payroll information,
        bookkeeping workflows and HMRC authorisation processes.
      </p>

      <h2>1. Who we are</h2>
      <p>
        AR Payroll & Consultancy Ltd is a UK-based accountancy, bookkeeping and payroll service
        provider.
      </p>
      <p>
        AR Payroll & Consultancy Ltd<br />
        272 Brixton Hill<br />
        London<br />
        SW2 1HP
        <br />
        Email: info@ar-bookkeeping.com
        <br />
        Telephone: 02037437144
      </p>

      <h2>2. Information we collect</h2>
      <p>We may collect and process the following information:</p>
      <ul>
        <li>Client names, business names and contact details.</li>
        <li>Company registration details, VAT numbers and tax references.</li>
        <li>Bookkeeping records, sales records, purchase records and bank information.</li>
        <li>Payroll records, employee details and employer PAYE information.</li>
        <li>VAT return information and Making Tax Digital records.</li>
        <li>HMRC authorisation information and OAuth access tokens where required.</li>
        <li>Correspondence, support messages and service records.</li>
        <li>Technical information needed to operate, secure and audit our software.</li>
      </ul>

      <h2>3. Why we use your information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Provide bookkeeping, payroll, VAT and accountancy services.</li>
        <li>Prepare VAT records and support VAT return workflows.</li>
        <li>Connect to HMRC services where authorised by the client.</li>
        <li>Maintain accurate client and business records.</li>
        <li>Meet legal, tax, accounting and regulatory obligations.</li>
        <li>Protect our systems, prevent misuse and maintain audit records.</li>
        <li>Communicate with clients about services and support.</li>
      </ul>

      <h2>4. HMRC and Making Tax Digital</h2>
      <p>
        Where a client authorises us to connect to HMRC services, AR Bookkeeping
        may use HMRC OAuth authorisation to access VAT information and support
        Making Tax Digital workflows. We do not ask clients to provide Government
        Gateway passwords.
      </p>

      <p>
        HMRC access tokens and refresh tokens are stored server-side and are used
        only for authorised HMRC API access. Live VAT submission controls remain
        restricted and subject to internal checks before use.
      </p>

      <h2>5. Lawful basis for processing</h2>
      <p>
        We process personal data where necessary for contract performance, legal
        obligations, legitimate business interests, consent where required, and
        compliance with tax and accounting duties.
      </p>

      <h2>6. Who can access information</h2>
      <p>
        Access to client information is restricted to authorised personnel and
        systems used to provide our services. We do not sell personal data.
      </p>

      <h2>7. Third-party services</h2>
      <p>
        We may use trusted technology providers to host, secure and operate our
        website, software and business systems. These may include hosting,
        database, email and software infrastructure providers.
      </p>

      <h2>8. Data storage and security</h2>
      <p>
        We take reasonable technical and organisational steps to protect data
        against unauthorised access, loss, misuse or disclosure. This includes
        access controls, server-side storage of sensitive credentials and audit
        records where appropriate.
      </p>

      <h2>9. Data retention</h2>
      <p>
        We keep records for as long as necessary to provide services, comply with
        legal and tax obligations, resolve disputes and maintain accounting
        records. Retention periods may vary depending on the type of record and
        legal requirements.
      </p>

      <h2>10. Data breach process</h2>
      <p>
        If a data breach occurs, we will investigate, contain the issue, record
        what happened, rotate affected credentials where necessary and notify
        relevant authorities or affected individuals where legally required.
      </p>

      <h2>11. Your rights</h2>
      <p>
        Under UK data protection law, individuals may have rights to access,
        correct, erase, restrict or object to processing of their personal data,
        subject to legal and regulatory limits.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about this Privacy Policy can be sent to
        info@ar-bookkeeping.com.
      </p>

      <p>Last updated: 29 June 2026</p>
    </main>
  );
}


