const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "10M+", label: "Predictions/Day" },
  { value: "50ms", label: "Response Time" },
  { value: "500+", label: "Enterprise Clients" },
];

const Stats = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
