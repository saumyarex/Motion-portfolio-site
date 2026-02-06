import type { Metadata } from "next";
import Container from "@/components/Container";
import "../../globals.css";
import { compileMDX } from "next-mdx-remote/rsc";

import { getBlog, getBlogsFrontMatter } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogsFrontMatter(slug);
  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const singleBlogPath = await getBlog(slug);

  if (!singleBlogPath) {
    redirect("/blogs");
  }

  const { content } = await compileMDX<{
    title: string;
    date: Date;
    description: string;
    tags: string[];
    image: string;
  }>({
    source: singleBlogPath,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="flex items-start justify-start">
      <Container className="prose mt-10 min-h-screen p-4 md:p-20 md:pb-10">
        {content}
        {/* <MDXRemote source={singleBlogPath} /> */}
      </Container>
    </div>
  );
}
