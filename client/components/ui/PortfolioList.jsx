import React from 'react'
import { Pin3d } from './Pin3d';
import Image from 'next/image';

const PortfolioList = ({ portfoliosList }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfoliosList.map((item, index) => {
                const { title, description, technologies, url, imageUrl: projectImage } = item;
                return (
                    <Pin3d key={index}
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
                                <Image src={`${projectImage}`} width={288} height={192} alt={`${title}`} className="object-contain max-h-[110px]" />
                            </div>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {technologies.map((imageUrl, index) => {
                                        const { image: technologiesImage } = imageUrl
                                        return (
                                            <div
                                                key={index}
                                                className="border border-white/[.2] rounded-full bg-primary lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                style={{
                                                    transform: `translateX(-${10 * index + 2}px)`,
                                                }}
                                            >
                                                <Image src={`${technologiesImage}`} width={22} height={22} alt="tech icon" />
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                                <a href={`${url}`} target='_blank' className="flex justify-end items-center gap-2">
                                    <p className="text-lg  text-primary">Check Live Site</p>

                                    <Image src="/images/arrow.svg" width={15} height={15} alt="Arrow" className="object-contain" />

                                </a>
                            </div>
                        </div>
                    </Pin3d>
                )
            })}
        </div>
    )
}

export default PortfolioList