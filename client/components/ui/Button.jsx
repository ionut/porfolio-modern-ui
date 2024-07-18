"use client"
import React from 'react'
import { motion } from "framer-motion"

const Button = ({ children, extraStyle, ...props }) => {

    return (
        <>
            <motion.button
                className={`text-secondary animate-shimmer border-secondary border-[1px] rounded-[50px] px-6 h-14 prose md:prose-md lg:prose-lg dark:text-primary dark:border-primary hover:bg-secondary hover:text-primary hover:dark:bg-primary hover:dark:text-secondary ${extraStyle ? extraStyle : ""}`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                {...props}
            >{children}</motion.button>
        </>
    )
}

export default Button




