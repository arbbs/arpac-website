import type { Metadata } from "next";
import { Breadcrumbs, Shell } from "../components/Shell";
import { JsonLd, breadcrumbJsonLd } from "../../lib/jsonld";
import { OG_BASE } from "../../lib/site";
import { CheckForm } from "./CheckForm";

const title = "Free 1-minute check: what do you need to file?";
const description = "Tell us a little about your income and we will call you back to explain what you need to file and when. Free, with no obligation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/check" },
  openGraph: { ...OG_BASE, title, description, url: "/check" },
};

export default function CheckPage() {
  return (
    <Shell hideCta>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Free check", path: "/check" }])} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Free check" }]} />
      <h1>Free 1-minute check</h1>
      <p className="lead">
        Answer three quick questions and we will call you back to explain what you need to file, and when. It is free and there is no
        obligation.
      </p>
      <CheckForm />
    </Shell>
  );
}
