
import React from 'react'
import { Pin3d } from '../ui/Pin3d'
import Image from 'next/image'
import { fetchData } from '@/data/fetchData'

const PortfolioSection = async () => {
    const portfolio = await fetchData("/api/projects?populate=*");

    return (
        <section className="relative py-10">
            <div className="container">
                <h1 className="section-header text-center">Collection of recent projects</h1>
                <h4 className="prose-xl text-center mb-6">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {portfolio?.data.map((item) => {
                        const { title, description, technologies, url } = item.attributes;
                        const { url: imageUrl } = item.attributes.image.data.attributes

                        return (
                            <Pin3d key={item.id}
                                title={`${title}`}
                                href={`${url}`}
                            >
                                <div className="flex flex-col p-4 tracking-tight w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-lg text-primary">
                                        {title}
                                    </h3>
                                    <div className="text-lg !m-0 !p-0 font-normal">
                                        <span className="text-black dark:text-slate-400">
                                            {description}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4">
                                        <Image src={`${process.env.BASE_URL_STRAPI}${imageUrl}`} width={288} height={192} alt={`${title}`} className="object-contain" />
                                    </div>
                                    <div className="flex items-center justify-between mt-7 mb-3">
                                        <div className="flex items-center">
                                            {technologies.data.map((icon, index) => {
                                                const { url: iconUrl } = icon.attributes
                                                return (
                                                    <div
                                                        key={icon.id}
                                                        className="border border-white/[.2] rounded-full bg-primary lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                        style={{
                                                            transform: `translateX(-${10 * index + 2}px)`,
                                                        }}
                                                    >
                                                        <Image src={`${process.env.BASE_URL_STRAPI}${iconUrl}`} width={22} height={22} alt="tech icon" />
                                                    </div>
                                                )
                                            }
                                            )}
                                        </div>
                                        <a href={`${url}`} target='_blank' className="flex justify-end items-center gap-2">
                                            <p className="text-lg  text-primary">Check Live Site</p>

                                            <Image src="/arrow.svg" width={15} height={15} alt="Arrow" />

                                        </a>
                                    </div>
                                </div>
                            </Pin3d>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}

export default PortfolioSection