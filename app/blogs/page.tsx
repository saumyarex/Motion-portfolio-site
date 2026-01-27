import type { Metadata } from "next";
import Container from "@/components/Container";
import { getAllBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Blogs by Saumya Rex",
  description:
    "Blogs by Saumya Rex, a software engineer with a passion for building scalable and efficient systems.",
};

export default async function BlogsPage() {
  const allBlogs = await getAllBlogs();
  console.log("All blogs :", allBlogs);

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div className="flex items-start justify-start">
      <Container className="mt-10 min-h-screen p-4 md:p-20 md:pb-10">
        <h1 className="text-primary. text-2xl font-bold tracking-tight md:text-4xl">
          All Blogs
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as a engineer at Google.
        </p>
        <div className="flex flex-col gap-10 py-10">
          {allBlogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm">
                  {" "}
                  {new Date(blog.date).toLocaleDateString("en-us")}{" "}
                </p>
              </div>

              <p className="text-secondary max-w-lg pt-4 text-sm">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
