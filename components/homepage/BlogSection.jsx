import React from 'react'

const BlogSection = () => {
    return (
        <section className="relative py-10">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
            <div className="container">
                <h1 className="section-header text-center">My recent articles</h1>
                <h4 className="prose-xl text-center mb-2">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</h4>

                <div className="grid grid-cols-2 md:grid-cols-3">
                    {/* <Test /> */}
                </div>
            </div>
        </section>
    )
}

export default BlogSection