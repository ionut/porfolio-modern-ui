

"use client"
import React, { useEffect, useState } from 'react'
import { portfolios } from '@/data/placeholderData'
import PortfolioList from '../ui/PortfolioList'


const PortfolioSection = () => {
    const [portfoliosList, setPortfoliosList] = useState([])

    const fetchPortfolios = () => {
        return new Promise((resolve, reject) => {
            if (portfolios.length > 0) {
                resolve(portfolios);
            } else {
                reject(new Error("Portfolio not found"))
            }
        })
    }

    useEffect(() => {
        const search = async () => {
            try {
                const data = await fetchPortfolios()
                setPortfoliosList(data)
            } catch {
                throw new Error("Could not fetch weather data.")
            }
        }
        search();
    }, [])


    return (
        <section className="relative py-10">
            <div className="container">
                <h1 className="section-header text-center">Collection of recent projects</h1>
                <h4 className="prose-xl text-center mb-6">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</h4>
                <PortfolioList portfoliosList={portfoliosList} />
            </div>
        </section >
    )
}

export default PortfolioSection