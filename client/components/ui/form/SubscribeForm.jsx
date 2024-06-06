"use client"
import React, { useState } from 'react'
import axios from 'axios';


const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle")
    const [responseMsg, setResponseMsg] = useState("");
    const [statusCode, setStatusCode] = useState();

    async function handleSubscribe(e) {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await axios.post("/api", { email });
            setStatus("success");
            setStatusCode(response.status);
            setEmail("");
            setResponseMsg(response.data.message);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (e.target.email.value === "") {
                    setStatus("error");
                    setResponseMsg("No email")
                } else {
                    setStatus("error");
                    setStatusCode(err.response?.status);
                    setResponseMsg(err.response?.data);
                }
            }
        }
    }
    return (
        <form
            className="pt-6 mb-4 flex w-full md:w-[500px] flex-col"
            onSubmit={handleSubscribe}
        >
            <div className="flex w-full gap-2 flex-col md:flex-row">
                <input id="email" type="email" className={`flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-md  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 ${statusCode == 400 ? "border-red-900" : "border-purple-600"} `} placeholder="What is your email address?"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"} />
                <button className="text-secondary animate-shimmer border-secondary border-[1px] rounded-[50px] px-6 prose md:prose-md lg:prose-lg dark:text-primary dark:border-primary hover:bg-secondary hover:text-primary hover:dark:bg-primary hover:dark:text-secondary disabled:cursor-not-allowed disabled:opacity-50"
                    type="submit"
                    disabled={status === "loading"}
                >
                    Subscribe</button>
            </div>
            <div className="server-message pt-4 text-green-600">
                {status === "success" ? (
                    <p className="text-green-600">{responseMsg}</p>
                ) : null}
                {status === "error" ? (
                    <p className="text-orange-600">{responseMsg}</p>
                ) : null}
            </div>
        </form>
    )
}

export default SubscribeForm