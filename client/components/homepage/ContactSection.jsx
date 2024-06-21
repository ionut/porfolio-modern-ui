import React from 'react'
import { ContactForm } from '../ui/form/ContactForm'
import { LuLocate, LuMail, LuPhone } from 'react-icons/lu'

const ContactSection = () => {
    return (
        <section className="container py-10">
            <h1 className="section-header text-center">Let's get in touch</h1>
            <h4 className="prose-xl text-center mb-2">I code beautifully simple things and I love what I do.</h4>
            <div className="grid md:grid-cols-2 gap-5 items-center">
                <ContactForm />
                <div className="flex flex-col gap-6">
                    <div className="flex gap-4 items-center">
                        <a href="tel:+40747241177" className="social-icons">
                            <LuPhone className='text-lg' />
                        </a>
                        <div className="flex flex-col">
                            <p className="prose-xl">Phone</p>
                            <a href="tel:+40747241177" className="prose-xl font-semibold">+40 747241177</a>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <a href="mailto:ionuthusoschi@gmail.com" className="social-icons">
                            <LuMail className='text-lg' />
                        </a>
                        <div className="flex flex-col">
                            <p className="prose-xl">Email</p>
                            <a href="mailto:ionuthusoschi@gmail.com" className="prose-xl font-semibold">ionuthusoschi@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="social-icons">
                            <LuLocate className='text-lg' />
                        </div>
                        <div className="flex flex-col">
                            <p className="prose-xl">Address</p>
                            <p className="prose-xl font-semibold">Iasi, Romania</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection