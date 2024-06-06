import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { format } from 'date-fns';

const BlogCard = ({ blog }) => {
    const { title, text, slug } = blog.attributes;

    const pictureUrl = blog.attributes.poze.data[0].attributes.url;
    const createdBy = blog.attributes.createdBy.data.attributes.firstname;
    const createdAt = blog.attributes.createdBy.data.attributes.createdAt;
    const formatedUpdatedDate = format(new Date(createdAt), "MM/dd/yyyy");
    // we suppose a user read 200 words on minute
    const wordsNumber = text.split(" ").length;
    const minutesRead = Math.ceil(wordsNumber / 200)

    return (
        <>
            <Link href={`/blogs/${slug}`} className="grid grid-rows-subgrid row-3 bg-[rgba(34,136,136,.1)] dark:bg-[rgba(17,61,61,.2)] text-black dark:text-white border-neutral-200 dark:border-slate-800">
                <figure>
                    <Image src={`${process.env.BASE_URL_STRAPI}${pictureUrl}`} alt="Movie" width={500} height={500} />
                </figure>

                <h2 className="prose-2xl font-bold px-4">{title}</h2>
                <div className="flex justify-between p-4">
                    <div className="flex gap-2 ">
                        <Image src='/me.jpg' alt="user" width={75} height={75} className='rounded-full' />
                        <div className="flex flex-col justify-between">
                            <h4 className="prose-xl font-bold">{createdBy}</h4>
                            <h4 className="prose-lg">{formatedUpdatedDate}</h4>
                        </div>
                    </div>
                    <p className="self-end">{Number(minutesRead) > 1 ? `${minutesRead} minutes read` : `${minutesRead} minute read`} </p>
                </div>
            </Link>
        </>
    )
}

export default BlogCard