import { getBlogPosts } from "@/data/blog";
import { absoluteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => {
    const publishedAt = new Date(
      post.metadata.publishedAt.includes("T")
        ? post.metadata.publishedAt
        : `${post.metadata.publishedAt}T00:00:00Z`,
    );

    return {
      url: absoluteUrl(`/blog/${post.slug}`),
      ...(Number.isNaN(publishedAt.getTime())
        ? {}
        : { lastModified: publishedAt }),
    };
  });

  return [
    {
      url: absoluteUrl("/"),
    },
    {
      url: absoluteUrl("/blog"),
    },
    ...postEntries,
  ];
}
