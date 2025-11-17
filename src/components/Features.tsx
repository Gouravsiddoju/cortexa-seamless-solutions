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
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Next-Gen AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Harness the power of advanced neural computing to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-effect p-8 hover:scale-105 transition-transform duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg h-48">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
