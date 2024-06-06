import React from 'react'
import { LuGithub, LuInstagram, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu";
const SocialIcons = () => {
    return (
        <>
            <a href="" className="social-icons">
                <LuTwitter className='text-lg' />
            </a>
            <a href="" className="social-icons">
                <LuLinkedin className='text-lg' />
            </a>
            <a href="" className="social-icons">
                <LuGithub className='text-lg' />
            </a>
            <a href="" className="social-icons">
                <LuInstagram className='text-lg' />
            </a>
        </>
    )
}

export default SocialIcons