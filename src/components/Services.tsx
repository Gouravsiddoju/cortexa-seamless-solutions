import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Workflow, MessageSquare, Database, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Custom AI Development",
    items: ["Machine Learning Models", "Deep Learning Solutions", "Computer Vision Systems", "Natural Language Processing"],
  },
  {
    icon: Workflow,
    title: "Agentic AI Systems",
    items: ["Autonomous Decision Making", "Multi-Agent Orchestration", "Self-Learning Workflows", "Adaptive Automation"],
  },
  {
    icon: MessageSquare,
    title: "Generative AI Solutions",
    items: ["LLM Integration", "Content Generation", "Code Assistants", "Creative AI Tools"],
  },
  {
    icon: Database,
    title: "AI Infrastructure",
    items: ["Model Deployment", "Scalable Architecture", "Performance Optimization", "Cloud Integration"],
  },
  {
    icon: Code,
    title: "AI-Powered Applications",
    items: ["Chatbots & Virtual Assistants", "Recommendation Engines", "Predictive Analytics", "Intelligent Automation"],
  },
  {
    icon: Shield,
    title: "Enterprise AI",
    items: ["AI Governance", "Ethical AI Implementation", "Security & Compliance", "Custom Training & Support"],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
    >
      <Card className="glass-effect p-6 h-full hover:border-primary/50 transition-all duration-300 group">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-4"
        >
          <service.icon className="h-10 w-10 text-primary" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <ul className="space-y-2">
          {service.items.map((item, i) => (
            <motion.li
              key={i}
              className="text-sm text-muted-foreground flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: (index % 3) * 0.1 + i * 0.05 }}
            >
              <span className="text-primary mt-1">→</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
      
      <div className="container mx-auto relative z-10">
        {/* THIS IS THE FIX: Wrapped title in a glass-effect box */}
        <motion.div
          ref={titleRef}
          className="glass-effect rounded-2xl p-8 sm:p-12 text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text px-4">
            Comprehensive AI Services
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            End-to-end AI solutions tailored to your business requirements
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;