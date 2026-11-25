import type { Metadata } from "next";
import "./globals.css";
import { JsonLd, businessJsonLd } from "../lib/jsonld";
import { OG_BASE, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AR Payroll & Consultancy Ltd | Bookkeeping, Payroll and Tax in London",
    template: "%s | AR Payroll & Consultancy Ltd",
  },
  description:
    "London accountancy practice for sole traders, freelancers and small limited companies: bookkeeping, payroll, VAT, Self Assessment and Making Tax Digital support.",
  openGraph: OG_BASE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <JsonLd data={businessJsonLd} />
        {children}
      </body>
    </html>
  );
}
