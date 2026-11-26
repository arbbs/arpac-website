"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "../../lib/site";

const TYPES = ["Sole trader or freelancer", "Landlord", "Employed with side income", "Limited company", "Not sure yet"];
const NEEDS = [
  "Self Assessment tax return",
  "Making Tax Digital",
  "Bookkeeping",
  "Payroll",
  "VAT returns",
  "Company accounts and corporation tax",
  "Setting up a limited company",
];

type State = { kind: "idle" } | { kind: "sending" } | { kind: "done" } | { kind: "error"; text: string };

export function CheckForm() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const opened = useRef(Date.now());

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    // Bots fill hidden fields and submit instantly; people don't.
    if (f.get("website") || Date.now() - opened.current < 2500) {
      setState({ kind: "done" });
      return;
    }
    setState({ kind: "sending" });
    const params = new URLSearchParams(window.location.search);
    const source = params.get("from") || params.get("utm_source") || (document.referrer ? new URL(document.referrer).hostname : "direct");
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/submit_website_enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: SUPABASE_PUBLISHABLE_KEY, Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}` },
        body: JSON.stringify({
          p_name: f.get("name"),
          p_email: f.get("email"),
          p_phone: f.get("phone"),
          p_business_type: f.get("type"),
          p_needs: f.getAll("needs"),
          p_message: f.get("message"),
          p_consent: f.get("consent") === "yes",
          p_source: source,
        }),
      });
      if (res.ok) {
        setState({ kind: "done" });
        return;
      }
      const body = await res.json().catch(() => ({}));
      setState({ kind: "error", text: body?.message || "Something went wrong. Please call us on 020 3743 7144 or email info@ar-bookkeeping.com." });
    } catch {
      setState({ kind: "error", text: "We could not send that. Please check your connection, or call us on 020 3743 7144." });
    }
  }

  if (state.kind === "done") {
    return (
      <div className="formDone" role="status">
        <h2>Thank you</h2>
        <p>We have your details and will be in touch within one working day to talk it through. There is no charge for this first conversation.</p>
        <p>
          In the meantime, our <Link href="/guides">guides</Link> explain the main rules in plain English.
        </p>
      </div>
    );
  }

  const sending = state.kind === "sending";
  return (
    <form className="checkForm" onSubmit={submit} noValidate={false}>
      <fieldset>
        <legend>1. Which best describes you?</legend>
        <div className="choices">
          {TYPES.map((t) => (
            <label key={t} className="choice">
              <input type="radio" name="type" value={t} required /> {t}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>2. What would you like help with?</legend>
        <p className="hint">Tick any that apply.</p>
        <div className="choices">
          {NEEDS.map((n) => (
            <label key={n} className="choice">
              <input type="checkbox" name="needs" value={n} /> {n}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>3. How can we reach you?</legend>
        <label className="field">
          <span>Name</span>
          <input name="name" required minLength={2} maxLength={120} autoComplete="name" />
        </label>
        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" maxLength={25} autoComplete="tel" inputMode="tel" />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" />
        </label>
        <label className="field">
          <span>Anything else? (optional)</span>
          <textarea name="message" rows={3} maxLength={2000} />
        </label>
        <label className="hp" aria-hidden="true">
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </fieldset>

      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I agree that AR Payroll &amp; Consultancy Ltd can contact me about this enquiry by phone or email. See our{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </span>
      </label>

      {state.kind === "error" && (
        <p className="formError" role="alert">
          {state.text}
        </p>
      )}

      <button className="button" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send my details"}
      </button>
      <p className="hint">General information, not advice. We use your details only to reply to this enquiry.</p>
    </form>
  );
}
