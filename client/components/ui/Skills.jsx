"use client";
import React from "react";
import { AnimatedTooltip } from "./AnimatedTooltip";
import { skills } from "@/data/placeholderData";

const Skills = () => {
    return (

        <div className="flex flex-1 items-center justify-center mb-10 w-full flex-wrap -ml-2 md:ml-0">
            <AnimatedTooltip items={skills} />
        </div>
    )
}

export default Skills