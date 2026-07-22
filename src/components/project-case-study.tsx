import { Reveal } from "@/components/motion-primitives";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = (typeof DATA.projects)[number];

interface ProjectCaseStudyProps {
  project: Project;
  index: number;
  compact?: boolean;
}

type ProjectVisualProps = Pick<ProjectCaseStudyProps, "project" | "index">;

function ProjectVisual({ project, index }: ProjectVisualProps) {
  const sensitive = project.sensitiveVisual;

  return (
    <div
      className="project-visual group relative isolate aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border/70 bg-card sm:aspect-[8/5]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,hsl(var(--signal)/0.16),transparent_38%),linear-gradient(135deg,hsl(var(--muted)/0.76),hsl(var(--background)/0.48))]"
      />

      {project.image && !sensitive ? (
        <div className="absolute inset-3 overflow-hidden rounded-[1.1rem] border border-white/10 bg-neutral-950 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition-colors duration-300 group-hover:border-white/20 sm:inset-5 sm:rounded-[1.35rem] lg:inset-6">
          <Image
            src={project.image}
            alt={`${project.title} interface preview`}
            fill
            sizes="(max-width: 1023px) calc(100vw - 2.5rem), 43rem"
            quality={85}
            priority={index === 0}
            className="object-contain transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]"
          />
        </div>
      ) : null}

      {sensitive ? (
        <div
          className="absolute inset-0 grid place-items-center overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--signal)/0.16),transparent_42%),radial-gradient(circle_at_75%_70%,hsl(var(--foreground)/0.08),transparent_34%)]" />
          <div className="relative flex items-end gap-3 opacity-80 sm:gap-5">
            <div className="h-40 w-20 -rotate-6 rounded-[1.35rem] border border-foreground/[0.15] bg-background/75 p-2 shadow-2xl sm:h-56 sm:w-28">
              <div className="h-2 w-7 rounded-full bg-foreground/10" />
              <div className="mt-5 h-10 rounded-lg bg-signal/[0.18]" />
              <div className="mt-2 h-2 w-3/4 rounded-full bg-foreground/10" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-foreground/10" />
            </div>
            <div className="relative z-10 h-52 w-24 rounded-[1.55rem] border border-signal/[0.35] bg-background p-2.5 shadow-[0_30px_80px_hsl(var(--background)/0.75)] sm:h-72 sm:w-36 sm:p-3">
              <div className="mx-auto h-2 w-8 rounded-full bg-foreground/10" />
              <div className="mt-7 h-2 w-1/3 rounded-full bg-signal/70" />
              <div className="mt-3 h-12 rounded-xl border border-border bg-muted/60 sm:h-16" />
              <div className="mt-2 h-12 rounded-xl border border-border bg-muted/[0.35] sm:h-16" />
              <div className="mt-3 h-2 w-2/3 rounded-full bg-foreground/10" />
            </div>
            <div className="h-40 w-20 rotate-6 rounded-[1.35rem] border border-foreground/[0.15] bg-background/75 p-2 shadow-2xl sm:h-56 sm:w-28">
              <div className="h-2 w-7 rounded-full bg-foreground/10" />
              <div className="mt-5 h-2 w-1/2 rounded-full bg-signal/60" />
              <div className="mt-3 h-16 rounded-lg bg-muted/60" />
            </div>
          </div>
        </div>
      ) : null}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background/65 to-transparent"
      />

      {sensitive ? (
        <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-background/[0.76] p-5 shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:bottom-7 sm:right-7 sm:w-[19rem]">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-signal">
            Privacy-safe preview
          </p>
          <p className="mt-3 text-sm leading-6 text-foreground/80">
            The original interface is intentionally abstracted because the
            available screenshot contains operational or account data.
          </p>
        </div>
      ) : null}

      <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/10 bg-background/[0.68] px-3 py-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-md sm:left-7 sm:top-7">
        <span className="size-1.5 rounded-full bg-signal shadow-[0_0_18px_hsl(var(--signal)/0.9)]" />
        {project.category}
      </div>
      <span className="absolute bottom-5 left-5 font-mono text-6xl font-semibold tracking-[-0.08em] text-foreground/10 sm:bottom-7 sm:left-7 sm:text-8xl">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export function ProjectCaseStudy({
  project,
  index,
  compact = false,
}: ProjectCaseStudyProps) {
  return (
    <article
      className={cn(
        "grid gap-8 border-b border-border/70 py-14 lg:grid-cols-12 lg:gap-12 lg:py-24",
        compact && "lg:py-16",
      )}
    >
      <Reveal
        className={cn(
          "lg:col-span-7",
          index % 2 === 1 && !compact && "lg:order-2",
        )}
      >
        <ProjectVisual project={project} index={index} />
      </Reveal>

      <Reveal
        delay={0.08}
        className={cn(
          "flex flex-col justify-center lg:col-span-5",
          index % 2 === 1 && !compact && "lg:order-1",
        )}
      >
        <div className="flex flex-col items-start gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:gap-3">
          <span>{project.dates}</span>
          <span className="hidden h-px w-8 bg-border sm:block" aria-hidden="true" />
          <span>{project.role}</span>
        </div>

        <h3 className="mt-6 text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border/80 bg-muted/[0.45] px-3 py-1.5 font-mono text-[0.6875rem] text-foreground/[0.78]"
            >
              {technology}
            </span>
          ))}
        </div>

        <details className="case-details group/details mt-8 border-y border-border/70">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
            <span>View project context</span>
            <Plus
              className="size-4 shrink-0 transition-transform duration-200 group-open/details:rotate-45 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </summary>
          <div className="grid gap-6 pb-6 sm:grid-cols-2">
            {"challenge" in project && project.challenge ? (
              <div>
                <p className="case-label">Challenge</p>
                <p className="case-copy">{project.challenge}</p>
              </div>
            ) : null}
            {project.outcome ? (
              <div>
                <p className="case-label">Product outcome</p>
                <p className="case-copy">{project.outcome}</p>
              </div>
            ) : null}
          </div>
        </details>

        {project.links.length > 0 ? (
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Link
                key={`${project.title}-${link.type}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-signal hover:text-signal-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                {link.icon}
                {link.type}
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-7 text-sm text-muted-foreground">
            {"internal" in project && project.internal
              ? "Internal product — no public URL."
              : "No verified public product link is listed yet."}
          </p>
        )}
      </Reveal>
    </article>
  );
}
