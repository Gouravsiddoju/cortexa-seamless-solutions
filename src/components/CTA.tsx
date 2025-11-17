import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="glass-effect rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 gradient-neural opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of companies leveraging Cortexa's AI technology to drive innovation and growth
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
