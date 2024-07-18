"use client"
import React, { useState } from 'react'

const DetailsSection = () => {
    const [downloadStatus, setDownloadStatus] = useState("");
    const downloadResume = async () => {
        try {
            const response = await fetch("/api", {
                responseType: "blob" // Important for binary data
            });
            console.log(response.headers)
            // Extract filename from content-disposition header
            const contentDisposition = response.headers["content-disposition"];
            const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
            const fileName = fileNameMatch ? fileNameMatch[1] : "downloadedFile";

            // Create a temporary anchor element to trigger the download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            // Setting filename received in response
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setDownloadStatus("Downloaded");
        } catch (error) {
            console.error("Error downloading file:", error);
            setDownloadStatus("Error downloading");
        }
    };
    return (
        <section className="container py-10">
            <h1 className="section-header text-center">Soon</h1>
            <h4 className="prose-xl text-center mb-2">In progress</h4>
            <div className="grid md:grid-cols-2 gap-5 items-center">
                <button style={{ fontSize: "25px" }}
                    onClick={downloadResume}>
                    Download Resume
                </button>
                <p>{downloadStatus}</p>
            </div>
        </section>
    )
}

export default DetailsSection