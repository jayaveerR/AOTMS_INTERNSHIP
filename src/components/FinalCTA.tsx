import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Phone, Mail } from "lucide-react";

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

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />

              <div className="text-center mb-8 md:mb-10">
                <h2 className="section-heading">
                  Ready to <span className="text-primary">Transform</span> Your Career?
                </h2>
                <p className="section-subheading mt-4">
                  Fill the form below and our career experts will reach out to guide your tech journey.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 bg-secondary/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-14 bg-secondary/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-14 bg-secondary/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  required
                />
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full h-14 px-4 bg-secondary/50 border border-border/50 rounded-md focus:border-primary focus:outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground appearance-none"
                  required
                >
                  <option value="" disabled>Select Your Interested Course</option>
                  <option value="full-stack">Full Stack Development</option>
                  <option value="cyber-security">Cyber Security</option>
                  <option value="service-now">ServiceNow Architecture</option>
                  <option value="qa-automation">QA Automation</option>
                  <option value="data-science">Data Science & ML</option>
                  <option value="cloud-computing">Cloud Computing</option>
                </select>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Get Free Counseling
                </button>
              </form>

              <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-border/50 pt-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">+91 80199 42233</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-foreground">Info@aotms.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
