import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { compileMDX } from "next-mdx-remote/rsc";

export async function getBlog(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "data", `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf-8");

    if (!fileContent) {
      return null;
    }
    return fileContent;
  } catch (error) {
    console.error(`Error reading MDX file for slug "${slug}":`, error);
    return null;
  }
}

export async function getAllBlogs() {
  const blogs = await fs.readdir(path.join(process.cwd(), "data"));

  const allBlogs = await Promise.all(
    blogs.map(async (blog) => {
      const slug = blog.replace(".mdx", "");
      const frontmatter = await getBlogsFrontMatter(slug);
      return {
        slug,
        ...frontmatter,
      };
    }),
  );
  return allBlogs;
}

export async function getBlogsFrontMatter(slug: string) {
  const mdxContent = await fs.readFile(
    path.join(process.cwd(), "data", `${slug}.mdx`),
    "utf-8",
  );

  if (!mdxContent) {
    return null;
  }

  const { frontmatter } = await compileMDX<{
    title?: string;
    date?: Date;
    description?: string;
    tags?: string[];
    image?: string;
  }>({
    source: mdxContent,
    options: { parseFrontmatter: true },
  });

  return frontmatter;
}
