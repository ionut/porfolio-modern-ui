"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import PhoneMockup from '../ui/PhoneMockup'
import { Sun } from '../ui/DarkModeSwitch'
import CountAnimation from '../ui/CountAnimation'
import SocialIcons from '../ui/SocialIcons'
import Skills from '../ui/Skills'
import { createPortal } from 'react-dom'
import WelcomeModal from '../ui/WelcomeModal'
import { useSelector } from 'react-redux'


const UserSection = () => {
    const [isMounted, setIsMounted] = useState(false);
    const user = useSelector(state => state.user.username);

    useEffect(() => {
        setIsMounted(true)
    }, []);



    return (
        <>

            <section className="h-[calc(100dvh_-_65px)] md:h-[calc(100dvh_-_85px)]">
                <div className="container grid grid-cols-1 grid-flow-row md:grid-cols-2 items-center h-full mb-5">
                    <PhoneMockup>
                        <div className="navbar sticky top-0 backdrop-blur-[2px] bg-primary/10 border-b-[1px] border-primary z-10 pt-6">
                            <div className="navbar-start">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn bg-transparent border-0 cursor-default">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-end">
                                <Sun />
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="avatar">
                                <div className="rounded">
                                    <Image src="/webdev.svg" alt="me" width={400} height={475} className="" />
                                </div>
                            </div>
                            <h4 className="prose md:prose-md">Web development encompasses a wide range of services, which include delivering websites or web apps, eCommerce solutions, website architectures, QA testing, maintenance, consulting, and even CMS integrations.</h4>
                        </div>
                    </PhoneMockup>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className='prose-2xl'>Hello, <span className="capitalize">{user} </span> I am here to help you</h2>
                            <h1 className="section-header">Experienced<br /> Web Developer</h1>
                            <h3 className='prose-xl'>If you need your business to prosper, one of the most important things is to be online. Whether we are talking about a simple landing page, blog or online store. </h3>
                        </div>
                        <div className="flex gap-2 md:gap-6 items-center">
                            <SocialIcons />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-2 md:gap-20">
                            <CountAnimation initialValue={0} targetValue={5} text={"Years of Experience"} />
                            <CountAnimation initialValue={0} targetValue={20} text={"Projects Completed"} />
                            <CountAnimation initialValue={0} targetValue={20} text={"Happy Clients"} />
                        </div>
                    </div>
                    <div className="col-span-2 w-[80%] mx-auto md:w-full">
                        <h1 className="text-5xl text-center mb-5">Skills</h1>
                        <Skills />
                    </div>

                </div>
            </section>
            {isMounted && user === "" ? createPortal(<WelcomeModal />, document.body) : null}

        </>
    )
}

export default UserSection