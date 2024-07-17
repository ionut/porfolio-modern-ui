import UserSection from "@/components/homepage/UserSection";
import WorksSection from "@/components/homepage/WorksSection";
import PortfolioSection from "@/components/homepage/PortfolioSection";
import BlogSection from "@/components/homepage/BlogSection";
import ContactSection from "@/components/homepage/ContactSection";

export default function Home() {
  return (
    <>
      <UserSection />
      <PortfolioSection />
      <WorksSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
