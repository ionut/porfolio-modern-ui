import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialIcons from '../ui/SocialIcons'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary dark:bg-secondary">
            <aside className="w-full">
                <Link href="/"><Image src="/logo.svg" width={50} height={50} alt="ALT" /></Link>
                <p className="prose-2xl font-bold dark:text-primary">
                    Husoschi Ionut <br /> Front End Web Developer
                </p>
                <p className="prose-lg dark:text-primary">Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <SocialIcons />
                </div>
            </nav>
        </footer>
    )
}

export default Footer