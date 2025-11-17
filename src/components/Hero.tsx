import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-neural.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-glow"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-electric-cyan to-deep-indigo px-4">
            Cortexa
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Pioneering the future of AI-powered neural computing and intelligent automation
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group text-sm sm:text-base">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-sm sm:text-base">
              Learn More
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
