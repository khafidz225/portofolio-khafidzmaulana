import { DATA } from "@/data/resume";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  const socialLinks = Object.values(DATA.contact.social);

  return (
    <footer className="site-container pb-10 pt-8 sm:pb-12">
      <div className="flex flex-col gap-8 border-t border-border/70 pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[-0.03em]">{DATA.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {DATA.role} · {DATA.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={social.url.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {social.name}
            </Link>
          ))}
          <Link
            href="#top"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <p className="mt-8 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground/70">
        © {new Date().getFullYear()} {DATA.name}. Built with Next.js and care.
      </p>
    </footer>
  );
}
