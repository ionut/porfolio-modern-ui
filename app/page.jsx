"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import UserSection from "@/components/homepage/UserSection";
import { WorksSection } from "@/components/homepage/WorksSection";
import PortfolioSection from "@/components/homepage/PortfolioSection";
import SkillSection from "@/components/homepage/SkillSection";
import BlogSection from "@/components/homepage/BlogSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import ContactSection from "@/components/homepage/ContactSection";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <>
      <svg
        id="progress"
        width="60"
        height="60"
        viewBox="0 0 100 100"
        className="fixed bottom-5 right-5 z-50 -rotate-90"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-white opacity-30"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-white"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <div ref={ref}>
        <UserSection />
        <PortfolioSection />
        <WorksSection />
        <BlogSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </>
  );
}
