import Link from "next/link";
import type { ReactNode } from "react";

// A small, safe markdown renderer for guide pages.
// Supports: ## and ### headings, paragraphs, "- " bullet lists, "1. " numbered lists,
// **bold**, and [text](https://...) links. Everything else is shown as plain text.
// It builds React elements only, so no HTML from the content is ever injected.

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*([^*]+)\*\*)|(\[([^\]]+)\]\(((?:https:\/\/|\/)[^\s)]+)\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let n = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[2]) out.push(<strong key={`${keyBase}-b${n++}`}>{m[2]}</strong>);
    else if (m[4] && m[5]) {
      const href = m[5];
      out.push(
        href.startsWith("/") ? (
          <Link key={`${keyBase}-l${n++}`} href={href}>{m[4]}</Link>
        ) : (
          <a key={`${keyBase}-l${n++}`} href={href} rel="noopener" target="_blank">{m[4]}</a>
        ),
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ source }: { source: string }) {
  const blocks = source.replace(/\r\n/g, "\n").split(/\n{2,}/);
  return (
    <>
      {blocks.map((block, i) => {
        const b = block.trim();
        if (!b) return null;
        const key = `md${i}`;
        if (b.startsWith("### ")) return <h3 key={key}>{inline(b.slice(4), key)}</h3>;
        if (b.startsWith("## ")) return <h2 key={key}>{inline(b.slice(3), key)}</h2>;
        const lines = b.split("\n");
        if (lines.every((l) => /^- /.test(l.trim()))) {
          return <ul key={key}>{lines.map((l, j) => <li key={`${key}-${j}`}>{inline(l.trim().slice(2), `${key}-${j}`)}</li>)}</ul>;
        }
        if (lines.every((l) => /^\d+\. /.test(l.trim()))) {
          return <ol key={key}>{lines.map((l, j) => <li key={`${key}-${j}`}>{inline(l.trim().replace(/^\d+\. /, ""), `${key}-${j}`)}</li>)}</ol>;
        }
        return <p key={key}>{inline(lines.join(" "), key)}</p>;
      })}
    </>
  );
}

// Plain text version, for llms.txt and descriptions.
export function stripMarkdown(source: string): string {
  return source
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)")
    .replace(/^#+\s*/gm, "");
}
