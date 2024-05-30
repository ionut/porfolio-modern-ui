"use client"
import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion";
const ScrollProgress = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    return (
        <svg
            id="progress"
            width="60"
            height="60"
            viewBox="0 0 100 100"
            className="fixed bottom-5 right-5 z-50 -rotate-90"
        >
            <circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="stroke-white opacity-30"
            />
            <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="stroke-white"
                style={{ pathLength: scrollYProgress }}
            />
        </svg>
    )
}

export default ScrollProgress