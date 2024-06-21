"use client"
import React from 'react'
import Button from './Button'
import { FormInput } from './form/FormInput'


const WelcomeModal = ({ props, handleSubmit, error, userName }) => {

    return (
        <>  {!userName && <dialog id="my_modal_1" className="modal backdrop-blur-xl" {...props}>
            <div className="modal-box">
                <h3 className="text-primary font-bold text-lg">Welcome!</h3>
                <p className="text-primary py-4">Please tell us your name!</p>
                <div className="space-y-4">
                    <form onSubmit={handleSubmit} method="dialog" className="grid gap-2">
                        <FormInput type="text" name="name" placeholder="Your name" className="h-14" />
                        {/* if there is a button in form, it will close the modal */}
                        <button className=" animate-shimmer  border-[1px] rounded-[50px] px-6 prose md:prose-md lg:prose-lg text-primary border-primary hover:bg-secondary hover:text-primary   disabled:cursor-not-allowed disabled:opacity-50"
                            type="submit"
                        >
                            Submit</button>
                    </form>
                    {error && <p className="text-orange-600">Please add your name!</p>}
                </div>
            </div>
        </dialog>}

        </>
    )
}

export default WelcomeModal