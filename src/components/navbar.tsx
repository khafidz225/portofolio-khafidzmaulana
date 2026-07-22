"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface NavigationItem {
  readonly href: string;
  readonly label: string;
}

interface SocialItem {
  readonly name: string;
  readonly url: string;
}

interface NavbarProps {
  name: string;
  items: readonly NavigationItem[];
  socials: readonly SocialItem[];
}

function SocialIcon({ name }: { name: string }) {
  const normalized = name.toLowerCase();
  if (normalized.includes("github")) return <Github className="size-4" />;
  if (normalized.includes("linkedin")) return <Linkedin className="size-4" />;
  return <Mail className="size-4" />;
}

export default function Navbar({ name, items, socials }: NavbarProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const firstMobileLink = useRef<HTMLAnchorElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navShell = useRef<HTMLElement>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname);
      return;
    }

    const sectionIds = items
      .map((item) => item.href.split("#")[1])
      .filter(Boolean);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-22% 0px -62%", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items, pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButtonNode = menuButton.current;
    const pageTargets = Array.from(
      document.querySelectorAll<HTMLElement>("main, footer"),
    );
    const inertTargets = navShell.current
      ? [...pageTargets, navShell.current]
      : pageTargets;
    document.body.style.overflow = "hidden";
    inertTargets.forEach((target) => {
      target.inert = true;
    });
    firstMobileLink.current?.focus();

    const handleDialogKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const panel = document.getElementById("mobile-navigation");
      const focusable = Array.from(
        panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleDialogKeys);

    return () => {
      document.body.style.overflow = previousOverflow;
      inertTargets.forEach((target) => {
        target.inert = false;
      });
      window.removeEventListener("keydown", handleDialogKeys);
      menuButtonNode?.focus();
    };
  }, [mobileOpen]);

  useEffect(() => setMobileOpen(false), [pathname]);

  const isActive = (item: NavigationItem) => {
    if (item.href.startsWith("/#")) {
      return pathname === "/" && activeSection === `#${item.href.split("#")[1]}`;
    }
    return pathname.startsWith(item.href);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        ref={navShell}
        className="nav-shell pointer-events-auto mx-auto flex h-14 w-full min-w-0 max-w-[76rem] items-center justify-between rounded-full border border-border/70 bg-background/[0.76] px-2.5 shadow-[0_12px_50px_hsl(var(--background)/0.28)] backdrop-blur-xl sm:h-16 sm:px-3"
        aria-label="Primary navigation"
        aria-hidden={mobileOpen ? true : undefined}
      >
        <Link
          href="/"
          className="group flex min-h-11 items-center gap-3 rounded-full px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`${name}, home`}
        >
          <span className="grid size-9 place-items-center rounded-full bg-foreground font-mono text-[0.6875rem] font-bold tracking-[-0.04em] text-background transition-colors group-hover:bg-signal group-hover:text-signal-foreground">
            KM
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] sm:block">
            {name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  if (item.href.includes("#")) {
                    setActiveSection(`#${item.href.split("#")[1]}`);
                  }
                }}
                className={cn(
                  "relative isolate flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active && "text-foreground",
                )}
                aria-current={active ? "location" : undefined}
              >
                {active ? (
                  <motion.span
                    layoutId="active-navigation"
                    className="absolute inset-0 -z-10 rounded-full bg-muted"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 34 }
                    }
                  />
                ) : null}
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-0.5 md:flex">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={social.url.startsWith("http") ? "noreferrer" : undefined}
              className="grid size-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={social.name}
            >
              <SocialIcon name={social.name} />
            </Link>
          ))}
          <ModeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ModeToggle />
          <button
            ref={menuButton}
            type="button"
            className="grid size-11 place-items-center rounded-full text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-navigation"
            className="pointer-events-auto fixed inset-0 z-10 flex flex-col overflow-y-auto overscroll-contain bg-background px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-24 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
          >
            <button
              type="button"
              className="absolute right-3 top-3 grid size-11 place-items-center rounded-full border border-border bg-background text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-5 sm:top-5"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <div className="flex flex-1 flex-col justify-start py-8">
              <p className="mb-7 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-signal">
                Navigate
              </p>
              {items.map((item, index) => (
                <Link
                  key={item.href}
                  ref={index === 0 ? firstMobileLink : undefined}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-border py-4 text-4xl font-semibold tracking-[-0.045em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 border-t border-border pt-5">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <SocialIcon name={social.name} />
                  {social.name}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
