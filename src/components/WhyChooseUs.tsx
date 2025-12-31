import { motion } from "framer-motion";
import { Award, Users, Briefcase, TrendingUp, Shield, Zap, Target, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry Expert Trainers",
    description: "Learn from professionals with 10+ years of real-world experience",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Personal attention with maximum 20 students per batch",
  },
  {
    icon: Briefcase,
    title: "100% Placement Support",
    description: "Dedicated career guidance until you land your dream job",
  },
  {
    icon: TrendingUp,
    title: "Live Project Training",
    description: "Build real applications used by actual companies",
  },
  {
    icon: Shield,
    title: "Lifetime Access",
    description: "Course materials and community access forever",
  },
  {
    icon: Zap,
    title: "Flexible Learning",
    description: "Weekend and weekday batches with online options",
  },
  {
    icon: Target,
    title: "Updated Curriculum",
    description: "Content refreshed quarterly to match industry standards",
  },
  {
    icon: HeartHandshake,
    title: "Post-Training Support",
    description: "Technical doubts cleared even after course completion",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Why </span>
            <span className="text-primary">Choose </span>
            <span className="text-foreground">Us</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Your success is our mission. Here's what makes us different
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
                >
                  <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </motion.div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Join <span className="font-bold text-accent">2000+</span> students who transformed their careers with us
          </p>
        </motion.div>
      </div>
    </section>
  );
};
