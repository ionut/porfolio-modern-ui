"use client"
import React from 'react'
import { motion } from 'framer-motion'

const PhoneMockup = ({ children }) => {

    return (
        <motion.div
            whileHover={{ rotate: -4.29, scale: 1.06 }}
            initial={{ rotate: 4.29 }}
            className="mockup-phone border-primary hidden md:block before:before-gradient before:top-0 before:left-0"
        >
            <div className="camera"></div>
            <div className="display">
                <div className="artboard artboard-demo phone-1 bg-primary justify-start">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

export default PhoneMockup