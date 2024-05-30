import Image from 'next/image';
import React from 'react'

const BlogCard = ({ blog }) => {
    const { title, text } = blog.attributes;
    const pictureUrl = blog.attributes.poze.data[0].attributes.url;
    console.log(blog.attributes.poze.data[0].attributes.url)
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><Image src={`${process.env.BASE_URL_STRAPI}${pictureUrl}`} alt="Movie" width={500} height={500} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="line-clamp-1">{text}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div >
    )
}

export default BlogCard