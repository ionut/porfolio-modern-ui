import React from "react";
import BlogCard from "@/components/ui/blogs/BlogCard";
import { fetchData } from "@/data/fetchData";

const page = async () => {
  const blogs = await fetchData("/api/blogs?sort[0]=createdAt:desc&populate=*");
  if (!blogs) return;
  const { data } = blogs;
  return (
    <section>
      <div className="container py-20">
        <h1 className="section-header text-center mb-20">My articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
