import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <Features />
      <Services />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
