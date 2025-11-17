import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// No other imports needed

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 text-center">
        
        {/* 1. ADD THIS WRAPPER */}
        <div className="glass-effect p-8 sm:p-12 md:p-16 rounded-2xl max-w-4xl mx-auto">
          
          {/* 2. Your original content goes inside */}
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
          
        </div> {/* 3. End of the new wrapper */}

      </div>
    </section>
  );
};

export default Hero;