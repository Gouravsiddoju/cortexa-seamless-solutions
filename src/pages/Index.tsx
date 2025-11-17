import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
// 1. Import our new background
import GlobalBackground from "@/components/GlobalBackground";

const Index = () => {
  // 2. This state logic is correct
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("light", initialTheme === "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <div className="min-h-screen">
      {/* 3. Render the background, passing the theme to it */}
      <GlobalBackground theme={theme} />
      
      {/* 4. Render all content on top with 'relative z-10' */}
      <div className="relative z-10">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Hero /> 
        <Features />
        <Services />
        <Stats />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;