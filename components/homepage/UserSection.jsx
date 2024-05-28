
import Image from 'next/image'
import React from 'react'
import PhoneMockup from '../ui/PhoneMockup'
import Link from 'next/link'
import { Sun } from '../ui/DarkModeSwitch'
import { LuGithub, LuInstagram, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu";
import Button from '../ui/Button'
import CountAnimation from '../ui/CountAnimation'
import SkillSection from './SkillSection'

const UserSection = () => {
    return (
        <section className="h-[calc(100dvh_-_65px)] dark:bg-grid-small-primary/[0.2] bg-grid-small-black/[0.2] before:before-gradient before:top-0 before:right-0 md:h-[calc(100dvh_-_85px)]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="container grid grid-cols-1 grid-flow-row md:grid-cols-2 items-center h-full mb-5">
                <PhoneMockup>
                    <div className="navbar sticky top-0 backdrop-blur-[2px] bg-primary/10 border-b-[1px] border-primary z-10 pt-6">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn bg-transparent border-0 cursor-default">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                            </div>
                            <Image src="/next.svg" width={100} height={100} alt="ALT" />
                        </div>
                        <div className="navbar-end">
                            <Sun />
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="avatar">
                            <div className="rounded">
                                <Image src="/peacock640.jpg" alt="me" width={400} height={475} className="" />
                            </div>
                        </div>
                        <h4 className="prose md:prose-md">responsivness</h4>
                    </div>
                </PhoneMockup>
                <div className="flex flex-col gap-2">
                    <div>
                        <h2 className='prose-2xl'>Hello, user</h2>
                        <h1 className="section-header">Full-stack<br /> Web Developer</h1>
                        <h3 className='prose-xl'>I break down complex user experience problems to create integritiy focussed solutions that connect billions of people</h3>
                    </div>
                    <div className="flex gap-6 items-center">
                        <Button model={"flex items-center gap-2 "}><span>Contact Me</span> <LuMail className=' text-lg' /></Button>
                        <Link href="" className="social-icons">
                            <LuTwitter className=' text-lg' />
                        </Link>
                        <Link href="" className="social-icons">
                            <LuLinkedin className=' text-lg' />
                        </Link>
                        <Link href="" className="social-icons">
                            <LuGithub className=' text-lg' />
                        </Link>
                        <Link href="" className="social-icons">
                            <LuInstagram className=' text-lg' />
                        </Link>
                    </div>
                    <div className="flex flex-wrap items-center gap-20">
                        <CountAnimation initialValue={0} targetValue={5} text={"Years of Experience"} />
                        <CountAnimation initialValue={0} targetValue={30} text={"Projects Completed"} />
                        <CountAnimation initialValue={0} targetValue={30} text={"Happy Clients"} />
                    </div>
                </div>
                <div className="col-span-2">
                    <h1 className="text-5xl text-center mb-5">Skills</h1>
                    <SkillSection />
                </div>

            </div>
        </section>
    )
}

export default UserSection