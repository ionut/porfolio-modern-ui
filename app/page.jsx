import UserSection from "@/components/homepage/UserSection";
import { WorksSection } from "@/components/homepage/WorksSection";
import PortfolioSection from "@/components/homepage/PortfolioSection";
import BlogSection from "@/components/homepage/BlogSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import ContactSection from "@/components/homepage/ContactSection";
export default function Home() {


  return (
    <>
      {/* add props ref to a div if you want to implement scroll progress */}

      <UserSection />
      <PortfolioSection />
      <WorksSection />
      <BlogSection />
      <TestimonialSection />
      <ContactSection />

    </>
  );
}
