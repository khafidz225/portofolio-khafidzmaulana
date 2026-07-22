import { getBlogPosts } from "@/data/blog";
import {
  absoluteUrl,
  formatPublishedDate,
  SITE_PROFILE,
} from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

const getPosts = cache(getBlogPosts);

const getPostOrNull = cache(async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) ?? null;
});

function getPostImage(image?: string) {
  return image ? absoluteUrl(image) : absoluteUrl("/og-image.png");
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const post = await getPostOrNull(params.slug);

  if (!post) {
    return {
      title: "Post not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const postUrl = absoluteUrl(`/blog/${post.slug}`);
  const ogImage = getPostImage(image);

  return {
    title,
    description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: postUrl,
      images: [
        {
          url: ogImage,
          alt: image
            ? title
            : `${SITE_PROFILE.name}, ${SITE_PROFILE.role} specializing in ${SITE_PROFILE.specialty}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: BlogPageProps) {
  const post = await getPostOrNull(params.slug);

  if (!post) {
    notFound();
  }

  const postUrl = absoluteUrl(`/blog/${post.slug}`);
  const postImage = getPostImage(post.metadata.image);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.publishedAt,
    description: post.metadata.summary,
    image: postImage,
    url: postUrl,
    mainEntityOfPage: postUrl,
    author: {
      "@type": "Person",
      name: SITE_PROFILE.name,
      url: absoluteUrl("/"),
    },
  };

  return (
    <main
      id="main-content"
      className="site-container relative isolate pb-24 pt-32 sm:pb-28 sm:pt-36"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <header className="border-b border-border/70 pb-10 sm:pb-14">
          <Link
            href="/blog"
            className="group mb-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-border/80 px-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground outline-none transition-colors hover:border-signal/50 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
          >
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            >
              ←
            </span>
            All field notes
          </Link>

          <p className="editorial-kicker">
            Mobile development journal
          </p>
          <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
            {post.metadata.title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {post.metadata.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
            <time dateTime={post.metadata.publishedAt}>
              {formatPublishedDate(post.metadata.publishedAt)}
            </time>
            <span aria-hidden="true" className="text-border">
              /
            </span>
            <span>{SITE_PROFILE.name}</span>
          </div>
        </header>

        <div
          className="prose-portfolio mt-10 text-pretty prose-headings:scroll-mt-24 prose-headings:font-semibold prose-p:text-base prose-p:leading-8 prose-a:font-medium prose-blockquote:border-signal prose-blockquote:text-muted-foreground prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-border prose-pre:bg-muted/30 sm:mt-14"
          dangerouslySetInnerHTML={{ __html: post.source }}
        />
      </article>
    </main>
  );
}
