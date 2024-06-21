import React from 'react'
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
const SocialIcons = () => {
    return (
        <>
            <a href="https://www.linkedin.com/in/ionu%C8%9B-c%C4%83t%C4%83lin-hu%C8%99oschi-1295a11b2/" className="social-icons" target="_blank">
                <LuLinkedin className='text-lg' />
            </a>
            <a href="https://github.com/ionut" className="social-icons" target="_blank">
                <LuGithub className='text-lg' />
            </a>
        </>
    )
}

export default SocialIcons