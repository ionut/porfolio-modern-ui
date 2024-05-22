"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/AnimatedTooltip";
import { skills } from "@/data";

const SkillSection = () => {
    return (

        <div className="flex flex-row items-center justify-center mb-10 w-full flex-wrap">
            <AnimatedTooltip items={skills} />
        </div>
    )
}

export default SkillSection