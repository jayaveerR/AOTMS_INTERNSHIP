import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Phone, Mail, MapPin, Rocket } from "lucide-react";

export const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const benefits = [
    "Free Demo Class",
    "Course Brochure",
    "Career Counseling",
    "Flexible Payment Options",
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-card border-2 border-border rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3">
                <span className="text-foreground">Ready to </span>
                <span className="text-primary">Transform </span>
                <span className="text-foreground">Your Career?</span>
              </h2>

              <p className="text-muted-foreground mb-6">
                Fill the form and our expert will reach out to guide you on the best course for your goals
              </p>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 border-2 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 border-2 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 border-2 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full h-12 px-3 border-2 border-input rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-background"
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="full-stack">Full Stack Development</option>
                    <option value="data-science">Data Science & ML</option>
                    <option value="cloud-devops">Cloud & DevOps</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="python">Python Development</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 text-base font-semibold"
                >
                  Get Free Career Counseling
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="hidden lg:block relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl overflow-hidden border-2 border-border shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center">
                    <Rocket className="w-20 h-20 mx-auto mb-4 text-muted-foreground/20" />
                    <div className="border-2 border-dashed border-muted-foreground/20 rounded-xl p-8 bg-background/50 backdrop-blur-sm">
                      <p className="text-sm text-muted-foreground/60 font-medium mb-2">
                        OPTIONAL IMAGE PLACEHOLDER
                      </p>
                      <p className="text-xs text-muted-foreground/50 leading-relaxed">
                        Suggested: Students celebrating success, modern classroom setup,
                        coding on laptops, or motivational tech career growth visual.
                        Keep subtle to not overpower the CTA form.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-background/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Call Us</p>
                        <p className="text-sm font-semibold text-foreground">+91 8019942233</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-background/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email Us</p>
                        <p className="text-sm font-semibold text-foreground">Info@aotms.com</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl pointer-events-none"
              />
            </div>

            <div className="lg:hidden text-center space-y-6 mb-8">
              <div className="flex items-center justify-center gap-3 bg-card border border-border rounded-xl p-4">
                <Phone className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Call Us</p>
                  <a href="tel:+918019942233" className="text-sm font-semibold text-foreground hover:text-primary">
                    +91 8019942233
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 bg-card border border-border rounded-xl p-4">
                <Mail className="w-6 h-6 text-accent" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Email Us</p>
                  <a href="mailto:Info@aotms.com" className="text-sm font-semibold text-foreground hover:text-accent">
                    Info@aotms.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
