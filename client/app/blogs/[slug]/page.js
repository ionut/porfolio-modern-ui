import React from "react";
import Image from "next/image";
import { fetchData } from "@/data/fetchData";
import { format } from "date-fns";
import RelatedBlog from "@/components/ui/blogs/RelatedBlog";
import { CustomMDX } from "../../../libs/mdx-remote";

const page = async ({ params }) => {
  const blog = await fetchData(
    `/api/blogs?filters[slug][$eq]=${params.slug}&populate=*`
  );

  const {
    title,
    text,
    createdAt,
    poze,
    createdBy,
    category,
    blog: relatedBlog,
  } = blog.data[0].attributes;
  const { url: pictureUrl, name: pictureName } = poze.data[0].attributes;
  const formatedUpdatedDate = format(new Date(createdAt), "MM/dd/yyyy");
  const { firstname, lastname } = createdBy.data.attributes;

  return (
    <section>
      <div className="container py-20">
        <h1 className="text-6xl text-center mb-6">{title}</h1>
        <div className="w-1/4 mx-auto mb-12">
          <h3 className="relative text-2xl text-center before:border-[1px] before:border-secondary before:dark:border-primary before:w-full before:absolute before:top-1/2 before:left-0 before:z-0">
            <span className="bg-primary dark:bg-secondary relative z-10 px-5">
              {formatedUpdatedDate}
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 w-full space-y-4">
            <Image
              src={`${process.env.BASE_URL_STRAPI}${pictureUrl}`}
              alt={pictureName}
              width={800}
              height={600}
              className="w-full"
            />
            <div>
              <CustomMDX source={text} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Image src="/tag.svg" alt="tag icon" width={50} height={50} />
                {category.map((item) => (
                  <p
                    key={item.name}
                    className="bg-black text-primary dark:bg-primary dark:text-black px-4 prose-md"
                  >
                    #{item.name}
                  </p>
                ))}
              </div>
              <p className="prose-md italic">{`Author: ${firstname} ${lastname}`}</p>
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col">
            <div>
              <h3 className="prose-2xl text-center">Related Blogs</h3>

              <RelatedBlog relatedBlog={relatedBlog} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
