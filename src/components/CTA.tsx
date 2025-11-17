import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div 
          className="glass-effect rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 gradient-neural opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join hundreds of companies leveraging Cortexa's AI technology to drive innovation and growth
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group text-sm sm:text-base">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
