"use client"
import React, { useEffect, useState } from 'react'

const CountAnimation = ({
    initialValue,
    targetValue,
    text,
}) => {
    const [count, setCount] = useState(initialValue);
    const duration = 4000;

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(
            duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    return (
        <div className="flex gap-2 items-center">
            <h3 className="text-6xl font-bold">{count}+</h3>
            <h5 className="text-md max-w-16">{text}</h5>
        </div>
    );
};

export default CountAnimation