import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import aiBrain from "@/assets/ai-brain.jpg";
import dataFlow from "@/assets/data-flow.jpg";
import neuralCompute from "@/assets/neural-compute.jpg";

const features = [
  {
    icon: Brain,
    title: "Neural Intelligence",
    description: "Advanced AI models that learn and adapt to complex patterns with unprecedented accuracy",
    image: aiBrain,
  },
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "Real-time data processing powered by cutting-edge neural networks and optimized algorithms",
    image: dataFlow,
  },
  {
    icon: Network,
    title: "Distributed Computing",
    description: "Scalable infrastructure that grows with your needs, from prototype to production",
    image: neuralCompute,
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* THIS IS THE FIX: Wrapped title in a glass-effect box */}
        <motion.div
          className="glass-effect rounded-2xl p-8 sm:p-12 text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Next-Gen AI Solutions
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Harness the power of advanced neural computing to transform your business
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* This card will now use the 85% opaque glass-effect */}
              <Card className="glass-effect p-6 sm:p-8 hover:scale-105 transition-transform duration-300 group h-full">
                <div className="relative mb-6 overflow-hidden rounded-lg h-40 sm:h-48">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;