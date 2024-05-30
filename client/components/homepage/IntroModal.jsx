"use client"
import React from 'react'
import { createPortal } from 'react-dom'

const IntroModal = () => {
    return (
        <div className="absolute inset-0 bg-white z-30 h-[100vh] overflow-y-hidden">
            {
                createPortal(
                    <p> This child is placed in the document body.</p >,
                    document.body
                )}
        </div>
    )
}

export default IntroModal