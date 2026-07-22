import { Reveal } from "@/components/motion-primitives";
import { DATA } from "@/data/resume";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Work = (typeof DATA.work)[number];
type Education = (typeof DATA.education)[number];

interface ExperienceTimelineProps {
  work: readonly Work[];
  education: readonly Education[];
}

export function ExperienceTimeline({
  work,
  education,
}: ExperienceTimelineProps) {
  return (
    <div className="relative mt-12 lg:mt-16">
      <div
        className="absolute bottom-0 left-[1.4375rem] top-0 w-px bg-border sm:left-[1.6875rem]"
        aria-hidden="true"
      >
        <div className="h-1/2 w-px bg-gradient-to-b from-signal via-signal/[0.45] to-transparent" />
      </div>

      <ol className="space-y-3" aria-label="Work experience timeline">
        {work.map((item, index) => (
          <li key={`${item.company}-${item.start}`} className="relative pl-16 sm:pl-20">
            <span
              className="absolute left-[1.4375rem] top-8 size-2.5 -translate-x-1/2 rounded-full border-2 border-background bg-signal shadow-[0_0_0_5px_hsl(var(--background)),0_0_24px_hsl(var(--signal)/0.35)] sm:left-[1.6875rem]"
              aria-hidden="true"
            />
            <Reveal delay={Math.min(index * 0.04, 0.2)}>
              <details className="journey-item group rounded-2xl border border-transparent px-4 transition-colors open:border-border/70 open:bg-card/[0.55] sm:px-6">
                <summary className="grid min-h-[6.5rem] cursor-pointer list-none items-center gap-4 py-5 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:grid-cols-[3rem_minmax(0,1fr)_auto] [&::-webkit-details-marker]:hidden">
                  <span className="relative hidden size-12 overflow-hidden rounded-xl border border-border bg-foreground p-1.5 sm:grid sm:place-items-center">
                    {item.logoUrl ? (
                      <Image
                        src={item.logoUrl}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-contain p-1.5"
                      />
                    ) : (
                      <BriefcaseBusiness
                        className="size-5 text-background"
                        aria-hidden="true"
                      />
                    )}
                  </span>

                  <span className="min-w-0">
                    <span className="block text-lg font-semibold tracking-[-0.025em]">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {item.company}
                    </span>
                    <span className="mt-2 flex flex-wrap gap-1.5 sm:hidden">
                      {item.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full bg-muted px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted-foreground"
                        >
                          {badge}
                        </span>
                      ))}
                    </span>
                  </span>

                  <span className="flex items-center justify-between gap-4 sm:justify-end">
                    <span className="text-left font-mono text-[0.6875rem] leading-5 text-muted-foreground sm:text-right">
                      {item.start}
                      <br />
                      {item.end ?? "Present"}
                    </span>
                    <ChevronDown
                      className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </span>
                </summary>

                <div className="grid gap-5 border-t border-border/70 pb-6 pt-5 sm:ml-16 sm:grid-cols-[minmax(0,1fr)_auto]">
                  <div>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                    {item.location ? (
                      <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-foreground/[0.65]">
                        {item.location}
                      </p>
                    ) : null}
                  </div>
                  {item.href !== "#" ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-foreground underline decoration-border underline-offset-8 transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Company
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
              </details>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-10 pl-16 sm:pl-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <GraduationCap className="size-5 text-signal" aria-hidden="true" />
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
              Education
            </h3>
          </div>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <li
                key={item.school}
                className="rounded-2xl border border-border/70 bg-card/[0.45] p-5"
              >
                <p className="font-semibold">{item.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {item.start} — {item.end}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
