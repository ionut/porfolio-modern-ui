import React from 'react'
import BlogCard from './BlogCard';
import { fetchData } from '@/data/fetchData';

const RelatedBlog = async ({ relatedBlog }) => {
    if (relatedBlog.data === null) return <p className="prose-lg">No related blogs</p>;

    const relatedBlogDetails = await fetchData(
        `/api/blogs/${relatedBlog.data.id}?populate=*`
    );
    return (
        <BlogCard
            key={relatedBlogDetails.data.id}
            id={relatedBlogDetails.data.id}
            blog={relatedBlogDetails.data}
        />
    )
}

export default RelatedBlog