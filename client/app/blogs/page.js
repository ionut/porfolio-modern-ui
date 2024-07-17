import BlogList from "@/components/ui/blogs/BlogList";
import React, { Suspense } from "react";

const page = () => {
  return (
    <section>
      <div className="container py-20">
        <h1 className="section-header text-center mb-20">My articles</h1>
        <Suspense fallback={<h1>...loading</h1>}>
          <BlogList />
        </Suspense>
      </div>
    </section>
  );
};

export default page;
