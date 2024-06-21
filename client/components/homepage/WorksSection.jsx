
import React, { Suspense } from 'react'
import { MovingButton } from '../ui/MovingBorders'
import { workExperience } from '@/data/placeholderData'
import Image from 'next/image'
import GitHubActivityTable from '../ui/GitHubActivityTable'

export const WorksSection = async () => {
    return (
        <section className="relative py-10">
            <div className="container">
                <h1 className="section-header text-center">My work experience</h1>
                <h4 className="prose-xl text-center mb-2">I worked in several positions, evolving every day and being aware of new technologies.</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
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
                <Suspense fallback={<p>Loading feed...</p>}>
                    <GitHubActivityTable />
                </Suspense>
            </div>
        </section>
    )
}

