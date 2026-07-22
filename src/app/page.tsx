import { ExperienceTimeline } from "@/components/experience-timeline";
import { HeroVisual } from "@/components/hero-visual";
import { MagneticLink, Reveal } from "@/components/motion-primitives";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatPublishedDate } from "@/lib/site";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  MapPin,
  Smartphone,
  WifiOff,
} from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const featuredProjects = DATA.projects.slice(0, 4);
  const foundationProjects = DATA.projects.slice(4);
  const posts = (await getBlogPosts())
    .sort(
      (first, second) =>
        new Date(second.metadata.publishedAt).getTime() -
        new Date(first.metadata.publishedAt).getTime(),
    )
    .slice(0, 2);

  return (
    <>
      <main id="main-content">
        <section
          id="top"
          className="relative flex min-h-dvh items-center overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-[860px] lg:pt-40"
          aria-labelledby="hero-title"
        >
          <div className="site-container relative grid items-center gap-14 lg:grid-cols-12 lg:gap-y-0 lg:gap-x-12 xl:gap-x-20">
            <div className="relative z-10 lg:col-span-7 lg:row-start-1 lg:py-10">
              <Reveal>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                  <p className="editorial-kicker text-foreground">
                    {DATA.name}
                  </p>
                  <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-[0.6875rem]">
                    {DATA.role} <span aria-hidden="true">/</span>{" "}
                    {DATA.specialty}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.05} distance={24}>
                <h1
                  id="hero-title"
                  className="mt-7 max-w-[11ch] text-balance font-display text-[clamp(3.5rem,5.8vw,6rem)] font-semibold leading-[0.92] tracking-[-0.065em]"
                >
                  I build mobile apps with{" "}
                  <span className="relative inline-block">
                    Flutter.
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-1 h-1 origin-left rounded-full bg-signal sm:h-1.5"
                    />
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  I&apos;m a Mobile Developer based in Tangerang, working across
                  product interfaces, application state, offline data, and API
                  integrations.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <MagneticLink
                    href="#work"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-signal-foreground shadow-[0_16px_40px_hsl(var(--signal)/0.2)] transition-colors hover:bg-foreground hover:text-background"
                  >
                    View selected work
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </MagneticLink>
                  <MagneticLink
                    href="#contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background/[0.45] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40 hover:bg-muted"
                  >
                    Contact me
                  </MagneticLink>
                </div>
              </Reveal>

            </div>

            <Reveal
              delay={0.08}
              distance={30}
              className="relative lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1"
            >
              <HeroVisual />
            </Reveal>

            <Reveal
              delay={0.18}
              className="lg:col-span-7 lg:col-start-1 lg:row-start-2"
            >
              <ul
                className="grid max-w-2xl gap-3 border-t border-border/70 pt-5 text-sm text-muted-foreground sm:grid-cols-3 lg:mt-10"
                aria-label="Professional focus"
              >
                <li className="flex min-h-11 items-center gap-2.5">
                  <Smartphone className="size-4 text-signal" aria-hidden="true" />
                  Flutter-focused
                </li>
                <li className="flex min-h-11 items-center gap-2.5">
                  <WifiOff className="size-4 text-signal" aria-hidden="true" />
                  Offline-capable flows
                </li>
                <li className="flex min-h-11 items-center gap-2.5">
                  <MapPin className="size-4 text-signal" aria-hidden="true" />
                  Tangerang, Indonesia
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section id="work" className="section-space scroll-mt-24">
          <div className="site-container">
            <Reveal>
              <SectionHeading
                index="01"
                eyebrow="Selected work"
                title="Products shaped around real operational needs."
                description="A closer look at mobile and cross-platform systems I have helped build — presented through the responsibilities and technical details already documented in my work."
              />
            </Reveal>

            <div className="mt-8">
              {featuredProjects.map((project, index) => (
                <ProjectCaseStudy
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="craft"
          className="section-space scroll-mt-24 bg-foreground/[0.025]"
        >
          <div className="site-container">
            <Reveal>
              <SectionHeading
                index="02"
                eyebrow="How I build"
                title="Technology is useful when it makes the product more dependable."
                description="Instead of a logo cloud, this is how the stack connects to the work: interface, application state, local data, integrations, and the systems around the mobile product."
              />
            </Reveal>

            <div className="mt-14 grid border-y border-border/70 lg:grid-cols-2">
              {DATA.skillGroups.map((group, index) => (
                <Reveal
                  key={group.title}
                  delay={Math.min(index * 0.05, 0.15)}
                  className="border-b border-border/70 p-6 last:border-b-0 lg:border-r lg:odd:border-l-0 lg:even:border-r-0 lg:[&:nth-last-child(-n+2)]:border-b-0 sm:p-8"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-[0.6875rem] text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                        {group.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                        {group.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                        {group.tools.map((tool) => (
                          <span
                            key={tool}
                            className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-foreground/70"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-10 flex flex-col gap-5 rounded-[1.5rem] border border-border/70 bg-card/50 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <Braces className="size-5 text-signal" aria-hidden="true" />
                  <p className="text-sm font-semibold">A connected delivery loop</p>
                </div>
                <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.13em] text-muted-foreground">
                  {["Interface", "State", "Local data", "API", "Sync"].map(
                    (step, index) => (
                      <li key={step} className="flex items-center gap-2">
                        <span>{step}</span>
                        {index < 4 ? (
                          <ArrowRight
                            className="size-3 text-signal/70"
                            aria-hidden="true"
                          />
                        ) : null}
                      </li>
                    ),
                  )}
                </ol>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="journey" className="section-space scroll-mt-24">
          <div className="site-container">
            <Reveal>
              <SectionHeading
                index="03"
                eyebrow="Developer journey"
                title="Learning the operation, then building for it."
                description="My path into mobile development combines hands-on operational experience, full-stack foundations, and production Flutter work across different industries."
              />
            </Reveal>

            <Reveal>
              <div className="mt-12 grid gap-6 border-y border-border/70 py-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:py-12">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-signal">
                  About the journey
                </p>
                <p className="max-w-3xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                  {DATA.summary}
                </p>
              </div>
            </Reveal>

            <ExperienceTimeline work={DATA.work} education={DATA.education} />
          </div>
        </section>

        <section id="foundations" className="section-space bg-foreground/[0.025]">
          <div className="site-container">
            <Reveal>
              <SectionHeading
                index="04"
                eyebrow="Web foundations"
                title="The full-stack work that shaped my mobile perspective."
                description="Earlier bootcamp projects developed the web and backend foundation I use when collaborating across a complete product stack."
              />
            </Reveal>

            <div className="mt-8">
              {foundationProjects.map((project, index) => (
                <ProjectCaseStudy
                  key={project.title}
                  project={project}
                  index={featuredProjects.length + index}
                  compact
                />
              ))}
            </div>
          </div>
        </section>

        <section id="notes" className="section-space">
          <div className="site-container">
            <Reveal>
              <SectionHeading
                index="05"
                eyebrow="Field notes"
                title="Thoughts from the build."
                description="A small space for documenting software development, experiments, and lessons along the way."
              />
            </Reveal>

            <div className="mt-12 border-y border-border/70">
              {posts.length ? (
                posts.map((post, index) => (
                  <Reveal key={post.slug} delay={index * 0.05}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group grid min-h-36 items-center gap-4 border-b border-border/70 py-6 last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:px-3"
                    >
                      <span className="font-mono text-[0.6875rem] text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <time className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-signal">
                          {formatPublishedDate(post.metadata.publishedAt)}
                        </time>
                        <span className="mt-2 block text-2xl font-semibold tracking-[-0.035em] transition-colors group-hover:text-signal">
                          {post.metadata.title}
                        </span>
                        <span className="mt-2 block text-sm text-muted-foreground">
                          {post.metadata.summary}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="size-5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </Link>
                  </Reveal>
                ))
              ) : (
                <p className="py-8 text-sm text-muted-foreground">
                  No notes have been published yet.
                </p>
              )}
            </div>

            <Link
              href="/blog"
              className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-border underline-offset-8 transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Browse all notes
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section id="contact" className="section-space scroll-mt-24">
          <div className="site-container">
            <Reveal>
              <div className="relative isolate overflow-hidden rounded-[2rem] bg-signal px-6 py-12 text-signal-foreground sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                <div
                  className="absolute inset-0 -z-10 opacity-25"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--signal-foreground) / 0.16) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--signal-foreground) / 0.16) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                    maskImage: "linear-gradient(135deg, black, transparent 76%)",
                  }}
                />
                <p className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.22em] opacity-70">
                  06 · Let&apos;s build
                </p>
                <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                  <div>
                    <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                      Have a mobile product worth making dependable?
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-7 opacity-75 sm:text-lg sm:leading-8">
                      Reach out through email or LinkedIn. I&apos;m always open to
                      a focused conversation about the product, its users, and
                      the engineering behind it.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <MagneticLink
                      href={DATA.contact.social.email.url}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-signal-foreground px-6 py-3 text-sm font-semibold text-signal transition-colors hover:bg-background hover:text-foreground"
                    >
                      Send an email
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </MagneticLink>
                    <MagneticLink
                      href={DATA.contact.social.LinkedIn.url}
                      target="_blank"
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-signal-foreground/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-signal-foreground/10"
                    >
                      Connect on LinkedIn
                    </MagneticLink>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
