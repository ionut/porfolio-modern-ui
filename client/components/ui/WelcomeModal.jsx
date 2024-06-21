"use client"
import React, { useState } from 'react'
import { FormInput } from './form/FormInput'
import { useDispatch } from 'react-redux';
import { updateName } from '@/app/features/redux/userSlice';


const WelcomeModal = () => {
    const [userName, setUserName] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (userName === "") {
            setError(true)
        } else {
            setIsOpen(false);
            dispatch(updateName(userName))
        }
    }

    const props = {
        ...(isOpen && { open: true })
    }
    return (
        <dialog id="my_modal_1" className="modal backdrop-blur-xl" {...props}>
            <div className="modal-box bg-black">
                <h3 className="text-primary font-bold text-lg">Welcome!</h3>
                <p className="text-primary py-4">Please start by telling me your name!</p>
                <div className="space-y-4">
                    <form onSubmit={handleSubmit} method="dialog" className="grid gap-2">
                        <FormInput type="text" name="name" placeholder="Your name" className="h-14" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        {/* if there is a button in form, it will close the modal */}
                        <button className=" animate-shimmer  border-[1px] rounded-[50px] px-6 prose md:prose-md lg:prose-lg text-primary border-primary hover:bg-secondary hover:text-primary   disabled:cursor-not-allowed disabled:opacity-50"
                            type="submit"
                        >
                            Submit</button>
                    </form>
                    {error && <p className="text-orange-600">Please add your name!</p>}
                </div>
            </div>
        </dialog>
    )
}

export default WelcomeModal