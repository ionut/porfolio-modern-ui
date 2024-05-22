
import React from 'react'

import { MovingButton } from '../ui/MovingBorders'
import { workExperience } from '@/data'
import Image from 'next/image'

export const WorksSection = () => {

    return (
        <section className="relative py-10">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
            <div className="container">
                <h1 className="section-header text-center">My work experience</h1>
                <h4 className="prose-xl text-center mb-2">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</h4>

                <div className="grid grid-cols-2 gap-5">
                    {workExperience.map((card) => (
                        <MovingButton
                            key={card.id}

                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1.75rem"
                            style={{
                                borderRadius: `calc(1.75rem* 0.96)`,
                            }}
                            className="bg-[rgba(34,136,136,.1)] dark:bg-[rgba(17,61,61,.2)] text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">

                                <Image
                                    width={64}
                                    height={64}
                                    src={card.thumbnail}
                                    alt={card.thumbnail}
                                    className="lg:w-32 md:w-20 w-16"
                                />
                                <div className="lg:ms-5">
                                    <h1 className="text-start prose-xl md:prose-2xl font-bold">
                                        {card.title}
                                    </h1>
                                    <p className="text-start prose-lg text-white-100 mt-3 font-semibold">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        </MovingButton>
                    ))}
                </div>
            </div>
        </section>
    )
}

