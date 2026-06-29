import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AR Payroll & Consultancy Ltd | AR Bookkeeping",
  description:
    "Accounting, bookkeeping, payroll, VAT and AR Bookkeeping software support for HMRC VAT MTD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

