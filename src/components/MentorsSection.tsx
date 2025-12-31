import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin, Award, ChevronLeft, ChevronRight } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Full Stack Lead",
    experience: "12 Years at Google & Amazon",
    expertise: "MERN Stack, System Design",
    imagePlaceholder: "Mentor 1 - Senior Full Stack Developer with grey hair and glasses",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "AI/ML Architect",
    experience: "10 Years at Microsoft",
    expertise: "Deep Learning, NLP, Computer Vision",
    imagePlaceholder: "Mentor 2 - Female AI expert in professional attire",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Cloud Solutions Expert",
    experience: "15 Years at AWS & IBM",
    expertise: "AWS, Azure, DevOps, Kubernetes",
    imagePlaceholder: "Mentor 3 - Middle-aged cloud architect with beard",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Data Science Lead",
    experience: "11 Years at Netflix",
    expertise: "Python, Data Analytics, ML",
    imagePlaceholder: "Mentor 4 - Young female data scientist",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "DevOps Architect",
    experience: "13 Years at Cisco",
    expertise: "CI/CD, Docker, Jenkins",
    imagePlaceholder: "Mentor 5 - DevOps expert in casual tech attire",
  },
  {
    id: 6,
    name: "Ananya Das",
    role: "Mobile Dev Expert",
    experience: "9 Years at Flipkart",
    expertise: "React Native, Flutter, iOS",
    imagePlaceholder: "Mentor 6 - Female mobile developer with modern look",
  },
];

export const MentorsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Learn from </span>
            <span className="text-primary">Industry </span>
            <span className="text-accent">Experts</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mentors bring real-world experience from top tech companies
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              onHoverStart={() => setHoveredId(mentor.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-muted-foreground/30 text-sm border-2 border-dashed border-muted-foreground/20 rounded-lg p-6">
                        <Award className="w-16 h-16 mx-auto mb-2 opacity-30" />
                        <p className="text-xs leading-relaxed">{mentor.imagePlaceholder}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === mentor.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-primary/90 flex items-center justify-center"
                >
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-lg"
                  >
                    <Linkedin className="w-6 h-6 text-primary" />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {mentor.name}
                </h3>
                <p className="text-sm font-semibold text-primary mb-2">{mentor.role}</p>
                <p className="text-xs text-muted-foreground mb-3">{mentor.experience}</p>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-foreground/80">{mentor.expertise}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg w-[280px] flex-shrink-0"
              >
                <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <Award className="w-12 h-12 mx-auto mb-2 text-muted-foreground/20" />
                      <p className="text-xs text-muted-foreground/40 leading-relaxed">
                        {mentor.imagePlaceholder}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1">{mentor.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-2">{mentor.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{mentor.experience}</p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-foreground/80">{mentor.expertise}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-6">
          <button className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
