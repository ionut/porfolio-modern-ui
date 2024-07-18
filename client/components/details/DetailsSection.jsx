"use client"
import React, { useState } from 'react'
import Button from '../ui/Button';

const DetailsSection = () => {
    const [status, setStatus] = useState(false)
    // Function will execute on click of button
    const onButtonClick = () => {
        setStatus(false)
        // using Java Script method to get PDF file
        fetch("/husoschi_ionut_resume.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "/husoschi_ionut_resume.pdf";
                alink.click();
                setStatus(true)
            });
        }).catch(error => console.error(error));
    };
    return (
        <section className="container py-10">
            <h1 className="section-header text-center">Details about me</h1>
            <h4 className="prose-xl text-center mb-2">In progress</h4>
            <div className="grid md:grid-cols-3 gap-5 items-center">
                <div>
                    <Button
                        extraStyle={"w-full"}
                        onClick={onButtonClick}>
                        Fast download Resume
                    </Button>
                    {status && <p className="prose-xl text-center mb-2">Congratulations, please check your downloads folder!</p>}
                </div>
            </div>
        </section>
    )
}

export default DetailsSection