import { motion } from "framer-motion";
import { FileText, Users, Briefcase, Target, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const placementFeatures = [
  {
    icon: FileText,
    title: "Resume Building & Review",
    content: "Get professional resume templates and one-on-one reviews. Our experts help you highlight your skills, projects, and achievements in a way that catches recruiter attention. Multiple iterations until perfect.",
  },
  {
    icon: Users,
    title: "Mock Interviews",
    content: "Practice with real interview scenarios covering technical, HR, and behavioral rounds. Receive detailed feedback on your performance, body language, and communication. Record sessions for self-review.",
  },
  {
    icon: Briefcase,
    title: "Company Tie-ups",
    content: "Direct placement drives with 50+ partner companies including startups and MNCs. Get exclusive access to opportunities not posted publicly. Priority screening for our students.",
  },
  {
    icon: Target,
    title: "Profile Building",
    content: "Optimize your LinkedIn, GitHub, and portfolio. Learn how to showcase projects effectively. Build a strong online presence that attracts recruiters organically.",
  },
  {
    icon: TrendingUp,
    title: "Salary Negotiation",
    content: "Learn strategies to negotiate better offers. Understand market standards for your role and experience. Get guidance on evaluating multiple offers and making the right career choice.",
  },
  {
    icon: Award,
    title: "Lifetime Support",
    content: "Career guidance doesn't end with placement. Get support for job switches, promotions, and upskilling even years after course completion. We're invested in your long-term success.",
  },
];

const stats = [
  { number: "300+", label: "Students Placed" },
  { number: "50+", label: "Hiring Partners" },
  { number: "8.5 LPA", label: "Average Package" },
  { number: "18 LPA", label: "Highest Package" },
];

export const PlacementsSection = () => {
  return (
    <section id="placements" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-primary">Career </span>
            <span className="text-foreground">Support & </span>
            <span className="text-accent">Placements</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just teach, we get you hired
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl overflow-hidden border-2 border-border shadow-2xl relative">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <Briefcase className="w-20 h-20 mx-auto mb-4 text-muted-foreground/20" />
                  <div className="border-2 border-dashed border-muted-foreground/20 rounded-xl p-6 bg-background/50 backdrop-blur-sm">
                    <p className="text-sm text-muted-foreground/60 leading-relaxed mb-2 font-medium">
                      IMAGE PLACEHOLDER
                    </p>
                    <p className="text-xs text-muted-foreground/50 leading-relaxed">
                      Suggested: Interview environment, students in professional attire during placement drive,
                      career counseling session, or successful placed students with offer letters
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  300+ Placements
                </div>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  50+ Companies
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {placementFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-card border border-border rounded-xl px-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                    >
                      <AccordionTrigger className="hover:no-underline py-5">
                        <div className="flex items-center gap-4 text-left">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-semibold text-foreground">{feature.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 pl-14">
                        {feature.content}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8"
            >
              <Button
                className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 px-8 py-6 text-base font-semibold"
              >
                Talk to Career Expert
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Free one-on-one career counseling session
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-border text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Tech Career?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our next batch and get guaranteed placement support. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold">
              View Placement Report
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-semibold">
              Talk to Alumni
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
