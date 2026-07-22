import { getBlogPosts } from "@/data/blog";
import {
  absoluteUrl,
  formatPublishedDate,
  SITE_PROFILE,
} from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Notes on mobile development, Flutter, and building reliable digital experiences.";

export const metadata: Metadata = {
  title: "Field Notes",
  description,
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    title: `Field Notes | ${SITE_PROFILE.name}`,
    description,
    type: "website",
    url: absoluteUrl("/blog"),
    images: [
      {
        url: absoluteUrl("/og-image.png"),
        alt: `${SITE_PROFILE.name}, ${SITE_PROFILE.role} specializing in ${SITE_PROFILE.specialty}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Field Notes | ${SITE_PROFILE.name}`,
    description,
    images: [absoluteUrl("/og-image.png")],
  },
};

export default async function BlogPage() {
  const posts = (await getBlogPosts()).sort(
    (firstPost, secondPost) =>
      new Date(secondPost.metadata.publishedAt).getTime() -
      new Date(firstPost.metadata.publishedAt).getTime(),
  );

  return (
    <main
      id="main-content"
      className="site-container relative isolate pb-24 pt-32 sm:pb-28 sm:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -top-20 -z-10 size-64 rounded-full bg-signal/10 blur-3xl"
      />

      <header className="border-b border-border/70 pb-10 sm:pb-14">
        <p className="editorial-kicker mb-5">
          Field notes
        </p>
        <h1 className="max-w-xl text-balance font-display text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
          Notes from the build.
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Writing on mobile development, Flutter, and the craft behind reliable
          digital experiences.
        </p>
      </header>

      <section aria-labelledby="writing-heading" className="pt-10 sm:pt-12">
        <div className="mb-2 flex items-end justify-between gap-4">
          <h2
            id="writing-heading"
            className="case-label"
          >
            Latest writing
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            {String(posts.length).padStart(2, "0")}
          </span>
        </div>

        {posts.length > 0 ? (
          <ol className="divide-y divide-border/70 border-b border-t border-border/70">
            {posts.map((post, index) => (
              <li key={post.slug}>
                <article>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid min-h-44 gap-5 py-7 outline-none transition-colors duration-200 hover:bg-muted/25 focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:px-3 sm:py-9"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0">
                      <time
                        dateTime={post.metadata.publishedAt}
                        className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        {formatPublishedDate(post.metadata.publishedAt)}
                      </time>
                      <span className="mt-3 block text-balance font-display text-2xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-signal sm:text-3xl">
                        {post.metadata.title}
                      </span>
                      <span className="mt-3 block max-w-xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        {post.metadata.summary}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="hidden size-10 items-center justify-center rounded-full border border-border text-lg transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-signal/60 group-hover:text-signal motion-reduce:transform-none motion-reduce:transition-none sm:flex"
                    >
                      ↗
                    </span>
                  </Link>
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <p className="border-y border-border/70 py-10 text-sm leading-7 text-muted-foreground">
            No notes have been published yet.
          </p>
        )}
      </section>
    </main>
  );
}
