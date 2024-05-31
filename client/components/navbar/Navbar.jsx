"use client"
import React, { useState } from 'react'
import { DarkModeSwitch } from '../ui/DarkModeSwitch'
import Image from 'next/image'
import Link from 'next/link'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const { scrollY } = useScroll()
    const [blurOnScroll, setBlurOnScroll] = useState(0)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setBlurOnScroll(latest)
    })
    const pathname = usePathname();
    return (
        <div className={`navbar sticky top-0 border-b-[1px] border-primary z-50 ${blurOnScroll !== 0 ? 'backdrop-blur-[2px] bg-white/10' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="" className="prose md:prose-md link-animation">Servicii</Link></li>
                        <li><Link href="" className="prose md:prose-md link-animation">Portofoliu</Link></li>
                        <li><Link href="" className="prose md:prose-md link-animation">Competente</Link></li>
                        <li><Link href="" className="prose md:prose-md link-animation">Testimonial</Link></li>
                        <li><Link href="" className="prose md:prose-md link-animation">Contact</Link></li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl"><Image src="/logo.svg" width={50} height={50} alt="ALT" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-6 p-4 relative menu-horizontal px-1">
                    <li><Link href="" className="lg:prose-xl link-animation">Services</Link></li>
                    <li><Link href="" className="lg:prose-xl link-animation">Portfolio</Link></li>
                    <li><Link href="" className="lg:prose-xl link-animation">Skills</Link></li>
                    <li><Link href="" className="lg:prose-xl link-animation">Testimonials</Link></li>
                    <li><Link href="/blogs" className={`lg:prose-xl link-animation ${pathname === '/blogs' ? 'link-animation-active' : ''}`}>Blogs</Link></li>
                    <li><Link href="" className="lg:prose-xl link-animation">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <DarkModeSwitch />
            </div>
        </div>
    )
}

export default Navbar