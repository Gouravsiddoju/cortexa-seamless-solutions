import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "10M+", label: "Predictions/Day" },
  { value: "50ms", label: "Response Time" },
  { value: "500+", label: "Enterprise Clients" },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    // 1. Remove background class 'bg-card/30'
    <section ref={ref} className="py-12 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* 2. Add the glass-effect wrapper */}
        <motion.div 
          className="glass-effect rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                // 3. Removed individual animation
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;