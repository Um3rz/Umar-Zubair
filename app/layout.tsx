import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Umar Zubair — AI Product Engineer",
  description: "Product Engineer / Technical PM, specified: seven shipped things, the numbers behind each.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Blocking on purpose: the theme vars are scoped to html.dark (light is
            the bare-:root default), so the class has to land before first paint
            or a dark-preference visitor gets a light flash and a swap. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body>
        {/* A JSX {/* *­/} comment compiles away entirely — it never reaches the
            DOM. The direction contract has to survive the production build as
            an actual HTML comment node, hence dangerouslySetInnerHTML on an
            inert, zero-footprint first child rather than a JSX comment here. */}
        <div
          style={{ display: "none" }}
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: Seven shipped things, specified like components you could order. Refuses the
portfolio card-grid, where every project is an equal-weight rectangle you must click to
evaluate; here the table tells you before you click.
OWN-WORLD: Cool bone stock, near-black ink, one saturated signal green owning whole
regions with type reversed out of it, hot orange reserved for limits. Archivo Expanded
for part designations, Azeret Mono for every figure. Zero radius, zero shadow, ruled
everything: 3px section leaders, 2px table frames, 1px internal splits.
STORY: A recruiter skims one table and knows what he built, what it moved, and what he
did on it. A hiring manager opens a row and reads the reasoning, block diagram, and
revision history. Both leave with the CV.
FIRST VIEWPORT: Full-bleed signal-ink header rail with document number and CV. Below it
a two-column front page: ordering table (three role variants) and general description at
left, Key Specifications well at right. Selection table begins above the fold, first two
rows visible. Primary action is DATASHEET PDF, in the rail, persistent.
FORM: Component datasheet. Candidate 5 of 7 grounded. Seed key 3464cc01.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
review, the verdict, and DESIGN.md
-->`,
          }}
        />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
