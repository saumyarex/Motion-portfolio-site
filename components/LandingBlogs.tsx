import { getAllBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import React from "react";

async function LandingBlogs() {
  const allBlogs = await getAllBlogs();

  const truncate = (str: string, lenght: number) => {
    return str.length > lenght ? str.substring(0, lenght) + "..." : str;
  };
  return (
    <div>
      <p className="text-secondary mb-12 max-w-lg pt-4 text-sm md:text-sm">
        I Love writing technical blogs.
      </p>
      <div className="flex flex-col gap-4">
        {allBlogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
            <div className="flex items-center justify-between">
              <h2 className="text-primary text-base font-bold tracking-tight">
                {blog.title}
              </h2>
              <p className="text-secondary text-sm">
                {" "}
                {new Date(blog.date!).toLocaleDateString("en-us")}{" "}
              </p>
            </div>

            <p className="text-secondary max-w-lg pt-2 text-sm">
              {truncate(blog.description || "", 150)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LandingBlogs;
