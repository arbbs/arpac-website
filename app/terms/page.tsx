import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="legalPage">
      <Link href="/" className="legalBack">
        ← Back to home
      </Link>

      <h1>Terms and Conditions</h1>

      <p>
        These Terms and Conditions apply to services provided by AR Payroll & Consultancy Ltd, operating AR Bookkeeping.
      </p>

      <h2>1. Services</h2>
      <p>
        We provide bookkeeping, payroll, VAT, accountancy support and related
        software-supported services. The exact services provided to each client
        depend on the agreed engagement.
      </p>

      <h2>2. Client responsibilities</h2>
      <p>
        Clients are responsible for providing accurate, complete and timely
        information. We rely on the information provided by clients when
        preparing records, reports and submissions.
      </p>

      <h2>3. HMRC authorisation</h2>
      <p>
        Where HMRC services are required, clients may need to authorise access
        through HMRC systems. We do not ask clients to provide Government Gateway
        passwords. Authorised access is used only for agreed services.
      </p>

      <h2>4. Software use</h2>
      <p>
        AR Bookkeeping is used to help manage client records, bookkeeping
        workflows, VAT preparation and HMRC Making Tax Digital processes. Access
        to software features may be restricted for compliance, security or
        operational reasons.
      </p>

      <h2>5. No guarantee of tax outcome</h2>
      <p>
        We aim to provide careful and professional support, but tax liabilities,
        penalties, interest or HMRC decisions may depend on client records,
        deadlines, HMRC rules and other circumstances.
      </p>

      <h2>6. Fees and payment</h2>
      <p>
        Fees are agreed separately with each client. Payment terms will be set
        out in invoices, engagement letters or written communications.
      </p>

      <h2>7. Confidentiality</h2>
      <p>
        We handle client information confidentially and use it only for providing
        services, meeting legal obligations and operating our business systems.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        We are not responsible for losses caused by inaccurate or late
        information provided by clients, failure to follow advice, third-party
        system outages or matters outside our reasonable control.
      </p>

      <h2>9. Changes to these terms</h2>
      <p>
        We may update these Terms and Conditions from time to time. The latest
        version will be published on this website.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms and Conditions can be sent to
        info@ar-bookkeeping.com.
      </p>

      <p>Last updated: 29 June 2026</p>
    </main>
  );
}


