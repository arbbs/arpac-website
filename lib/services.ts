// Service pages. Wording stays general: no thresholds or dates here, so nothing goes out of date.
// Rules and figures live in guides, which cite GOV.UK and show the date they were checked.

export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  whatWeDo: string[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "self-assessment",
    title: "Personal Tax and Self Assessment",
    metaTitle: "Self Assessment tax returns in London",
    description: "Self Assessment tax return support for sole traders, landlords and people with side income, from a London accountancy practice.",
    intro: "We help sole traders, landlords and people with income outside their job get their records together and prepare their Self Assessment tax return.",
    whatWeDo: [
      "Check what income you need to report",
      "Help you register for Self Assessment if you need to",
      "Organise your income and expense records",
      "Prepare your tax return from the information you give us",
    ],
    whoFor: ["Sole traders and freelancers", "People employed with side income", "Landlords"],
    faqs: [
      { q: "Do I need to file a Self Assessment tax return?", a: "It depends on your income. Our guides explain the main rules from GOV.UK, and our free check helps you see where you stand. We confirm it with you in a free consultation." },
      { q: "What will you need from me?", a: "Records of your income and expenses for the tax year. We tell you what is missing and help you organise it." },
    ],
  },
  {
    slug: "making-tax-digital",
    title: "Making Tax Digital for Income Tax",
    metaTitle: "Making Tax Digital for Income Tax support in London",
    description: "Help with Making Tax Digital for Income Tax: digital records and quarterly updates for sole traders and landlords.",
    intro: "Making Tax Digital for Income Tax means keeping digital records and sending HMRC quarterly updates. We help sole traders and landlords keep records that are ready for each update.",
    whatWeDo: [
      "Check whether and when Making Tax Digital applies to you",
      "Set up digital record keeping",
      "Keep your records up to date through the year",
      "Prepare the figures for each quarterly update",
    ],
    whoFor: ["Sole traders", "Landlords", "People with both self-employment and property income"],
    faqs: [
      { q: "When does Making Tax Digital for Income Tax apply to me?", a: "It depends on your qualifying income from self-employment and property. Our Making Tax Digital guide sets out the dates and thresholds from GOV.UK." },
      { q: "Do I have to send HMRC every receipt?", a: "No. Quarterly updates are summaries of income and expenses, sent through compatible software. You keep the records yourself." },
    ],
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    metaTitle: "Bookkeeping services in London",
    description: "Bookkeeping for sole traders and small limited companies in London: records kept up to date, trial balances and monthly figures.",
    intro: "We keep your bookkeeping records up to date, so your figures are ready when you need them for VAT, tax returns or year-end accounts.",
    whatWeDo: [
      "Record sales, purchases and bank transactions",
      "Reconcile your bank accounts",
      "Prepare trial balances",
      "Provide monthly management figures",
    ],
    whoFor: ["Sole traders", "Limited companies with 1 to 10 staff", "Construction and trades businesses"],
    faqs: [
      { q: "Can you take over books that have fallen behind?", a: "Yes. We start by finding out what is missing and bring the records up to date." },
    ],
  },
  {
    slug: "payroll",
    title: "Payroll",
    metaTitle: "Payroll services for small businesses in London",
    description: "Payroll for small businesses: payslips, starters and leavers, and the submissions employers make to HMRC.",
    intro: "We prepare payroll for small businesses, including payslips, starters and leavers, and the submissions employers make to HMRC.",
    whatWeDo: [
      "Run your payroll each pay period",
      "Prepare payslips",
      "Handle starters and leavers",
      "Make the payroll submissions to HMRC",
    ],
    whoFor: ["Limited companies with 1 to 10 staff", "Employers taking on their first employee"],
    faqs: [
      { q: "Can you help when I take on my first employee?", a: "Yes. We help you set up payroll and explain what you need to do as an employer." },
    ],
  },
  {
    slug: "cis",
    title: "CIS Returns",
    metaTitle: "CIS returns for contractors in London",
    description: "Monthly Construction Industry Scheme (CIS) returns for contractors: checking subcontractors with HMRC, working out deductions and submitting each return.",
    intro: "We prepare and submit monthly CIS returns for contractors in the construction industry, so the right deductions are made and HMRC receives each return on time.",
    whatWeDo: [
      "Check new subcontractors with HMRC",
      "Work out the CIS deductions from subcontractor payments",
      "Prepare and submit your monthly CIS return to HMRC",
      "Send payment and deduction statements to your subcontractors",
    ],
    whoFor: ["Builders and construction contractors", "Trades businesses that pay subcontractors", "Subcontractors who have CIS taken from their pay"],
    faqs: [
      { q: "Can you take over CIS returns that have fallen behind?", a: "Yes. We start by finding out which months are missing and bring them up to date." },
      { q: "Do you help subcontractors as well?", a: "Yes. We make sure the CIS taken from your pay is included in your tax return or company accounts." },
    ],
  },
  {
    slug: "vat-returns",
    title: "VAT Returns",
    metaTitle: "VAT return preparation in London",
    description: "VAT record keeping and VAT return preparation for VAT-registered businesses, with digital records for Making Tax Digital.",
    intro: "We prepare VAT records and support VAT return preparation for VAT-registered businesses, keeping the digital records Making Tax Digital for VAT requires.",
    whatWeDo: [
      "Keep your VAT records digital and up to date",
      "Prepare your VAT return figures",
      "Support VAT return submission through compatible software",
      "Help you check whether you need to register for VAT",
    ],
    whoFor: ["VAT-registered businesses", "Businesses whose turnover is getting close to the VAT threshold"],
    faqs: [
      { q: "Do I need to register for VAT?", a: "It depends on your taxable turnover. Our VAT guide explains the threshold and tests from GOV.UK." },
    ],
  },
  {
    slug: "corporation-tax",
    title: "Corporation Tax and Accounts",
    metaTitle: "Corporation tax and company accounts in London",
    description: "Year-end accounts information, bookkeeping and corporation tax preparation for small limited companies.",
    intro: "We support small limited companies with bookkeeping, year-end accounts information and corporation tax preparation.",
    whatWeDo: [
      "Prepare year-end accounts information",
      "Prepare corporation tax figures",
      "Keep the bookkeeping that feeds your accounts",
    ],
    whoFor: ["Limited companies with 1 to 10 staff", "Directors who want one practice for books, payroll and tax"],
    faqs: [
      { q: "Can you handle payroll and VAT as well?", a: "Yes. We keep bookkeeping, payroll and VAT in one place." },
    ],
  },
  {
    slug: "company-formation",
    title: "Company Formation",
    metaTitle: "Company formation help in London",
    description: "Help understanding what changes when you move from sole trader to limited company, and setting up a UK company.",
    intro: "We help clients understand what changes when they set up a UK limited company, and what they need to do to run it.",
    whatWeDo: [
      "Talk you through sole trader and limited company differences",
      "Help with setting up the company",
      "Set up bookkeeping and payroll from the start",
    ],
    whoFor: ["Sole traders thinking about incorporating", "New business owners"],
    faqs: [
      { q: "Should I be a sole trader or a limited company?", a: "Each has different tax and paperwork. We talk it through with you in a free consultation." },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}
