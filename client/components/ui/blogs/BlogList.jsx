import React from 'react'
import BlogCard from './BlogCard';
import { fetchData } from '@/data/fetchData';

const BlogList = async () => {
    const blogs = await fetchData("/api/blogs?sort[0]=createdAt:desc&populate=*");
    if (!blogs) return;
    const { data } = blogs;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((blog) => {
                return <BlogCard key={blog.id} blog={blog} />;
            })}
        </div>
    )
}

export default BlogList