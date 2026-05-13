"use client";

import { BLOG_POSTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type BlogPost = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  thumb: string;
  excerpt: string;
};

const EXTRA: BlogPost[] = BLOG_POSTS.slice(0, 3).map((p, i) => ({
  slug: `${p.slug}-deep-dive-${i}`,
  title: `${p.title}: Deep Dive`,
  category: p.category,
  readTime: p.readTime,
  thumb: p.thumb,
  excerpt: p.excerpt,
}));

export function BlogResourcesSection() {
  const [posts, setPosts] = useState<BlogPost[]>(() =>
    BLOG_POSTS.map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      readTime: p.readTime,
      thumb: p.thumb,
      excerpt: p.excerpt,
    })),
  );
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="blog" className="scroll-mt-28 bg-white px-4 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bs-ocean">
            Resources & Insights
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-bs-navy sm:text-4xl">
            Visa intelligence, funding tactics, and admissions craft—in digestible reads.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.article
              layout
              key={post.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ delay: (idx % 3) * 0.08, duration: 0.55 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.thumb}
                  alt={`Decorative thumbnail for ${post.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-bs-ocean">
                  <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                    {post.category}
                  </span>
                  <span className="text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-bs-navy">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-bs-ocean underline-offset-4 hover:underline"
                >
                  Read article
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          {!loaded ? (
            <motion.button
              type="button"
              layout
              onClick={() => {
                setPosts((p) => [...p, ...EXTRA]);
                setLoaded(true);
              }}
              className="rounded-full bg-bs-navy px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-bs-navy/25 transition hover:bg-[#0d2a7a]"
            >
              Load More
            </motion.button>
          ) : (
            <p className="text-sm font-medium text-slate-500">You&apos;re caught up on insights.</p>
          )}
        </div>
      </div>
    </section>
  );
}
