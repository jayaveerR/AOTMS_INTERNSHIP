import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Linkedin,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface Mentor {
  id: number;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  skills: string[];
  highlights: string[];
}

const mentors: Mentor[] = [
    { id: 1, name: "Raviteja", role: "Lead Cyber Security Analyst", specialty: "Cyber Security", experience: "8+ Years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face", bio: "Passionate about building secure systems and mentoring the next generation of security professionals. Specialist in network security and threat hunting.", skills: ["Network Security", "Ethical Hacking", "Cloud Security", "SIEM"], highlights: ["Secured 50+ enterprise networks", "Certified Ethical Hacker (CEH)", "Lead Security at FinTech Corp"] },
    { id: 2, name: "Divya Rani", role: "Senior QA Automation Engineer", specialty: "QA Automation", experience: "6+ Years", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop&crop=face", bio: "Focused on delivering high-quality software through advanced automation frameworks. Expert in Selenium, Playwright, and CI/CD integration.", skills: ["Selenium", "Playwright", "Java", "Jenkins"], highlights: ["Reduced testing time by 60%", "Built global scale QA framework", "Automation Lead for E-commerce"] },
    { id: 3, name: "Chaitanya", role: "ServiceNow Architect", specialty: "ServiceNow", experience: "10+ Years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face", bio: "Deep expertise in IT Service Management and enterprise workflow automation using ServiceNow. Help businesses transform their service delivery.", skills: ["ITSM", "ServicePortal", "ITOM", "Scripting"], highlights: ["Architected 20+ ServiceNow instances", "Master Certified Developer", "Workflow Optimization expert"] },
    { id: 4, name: "Lakshmi Priya", role: "Solutions Architect", specialty: "Cloud Computing", experience: "7+ Years", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop&crop=face", bio: "Cloud native specialist with focus on AWS and Azure migrations. Helping students master the complexities of distributed systems.", skills: ["AWS", "Azure", "Kubernetes", "Docker"], highlights: ["Managed 100+ cloud servers", "AWS Solutions Architect Professional", "Published Cloud Security whitepaper"] },
    { id: 5, name: "Kiran Kumar", role: "Principal Data Scientist", specialty: "Data Analytics", experience: "9+ Years", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&crop=face", bio: "Transforming big data into actionable insights. Expert in predictive modeling, statistical analysis, and machine learning pipelines.", skills: ["Python", "SQL", "Tableau", "Pytorch"], highlights: ["Built recommendation engines", "PhD in Applied Mathematics", "Data Lead for Streaming Platforms"] }
];

export const MentorsSection = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  useEffect(() => {
    const handleBodyScroll = (shouldLock: boolean) => {
      document.body.style.overflow = shouldLock ? "hidden" : "unset";
    };
    
    selectedMentor ? handleBodyScroll(true) : handleBodyScroll(false);
    
    return () => handleBodyScroll(false);
  }, [selectedMentor]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMentor(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">Learn from Industry Experts</h2>
          <p className="section-subheading mt-4">
            Our instructors are not just teachers; they are seasoned professionals from leading tech companies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              layoutId={`card-${mentor.id}`}
              onClick={() => setSelectedMentor(mentor)}
              className="group cursor-pointer bg-card rounded-2xl p-4 transition-all duration-300 hover:shadow-xl border border-border/50 h-full flex flex-col hover:-translate-y-2"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                <motion.img
                  layoutId={`image-${mentor.id}`}
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {mentor.name}
                </h3>
                <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                  {mentor.specialty}
                </p>
                <span className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-widest block group-hover:text-muted-foreground transition-colors">
                  View Profile
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button className="btn-secondary group">
              Explore Our Courses <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <AnimatePresence>
          {selectedMentor && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMentor(null)}
                className="absolute inset-0 bg-background/50 backdrop-blur-md"
              />

              <motion.div
                layoutId={`card-${selectedMentor.id}`}
                className="relative bg-card w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden pointer-events-auto border border-border/50"
              >
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                  <motion.img
                    layoutId={`image-${selectedMentor.id}`}
                    src={selectedMentor.image}
                    alt={selectedMentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full md:w-3/5 flex flex-col overflow-y-auto custom-scrollbar">
                    <div className="p-6 sm:p-8 flex-grow">
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                            {selectedMentor.name}
                            </h2>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                                <p className="text-base font-semibold text-primary">{selectedMentor.role}</p>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm"><Briefcase className="w-4 h-4" />{selectedMentor.experience}</div>
                            </div>
                        </motion.div>

                        <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-muted-foreground leading-relaxed text-sm mb-6">
                            {selectedMentor.bio}
                        </motion.p>
                        
                        <div className="space-y-6">
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                                <h4 className="font-semibold text-foreground mb-2">Expertise</h4>
                                <div className="flex flex-wrap gap-2">
                                {selectedMentor.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                                    {skill}
                                    </span>
                                ))}
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                                <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                                <div className="space-y-2">
                                {selectedMentor.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                        <span className="text-sm text-muted-foreground">{highlight}</span>
                                    </div>
                                ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="p-6 sm:p-8 border-t border-border/50 bg-secondary/50 flex flex-col sm:flex-row items-center gap-4">
                        <button className="btn-primary w-full sm:w-auto">Book a Session <ArrowRight className="w-4 h-4 ml-2" /></button>
                        <button className="btn-secondary w-full sm:w-auto"><Linkedin className="w-4 h-4 mr-2" /> View Profile</button>
                    </motion.div>
                </div>
                <button onClick={() => setSelectedMentor(null)} className="absolute top-4 right-4 w-8 h-8 bg-card/50 hover:bg-card/90 rounded-full flex items-center justify-center backdrop-blur-sm z-20"><X className="w-5 h-5 text-foreground" /></button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: hsl(var(--border)); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: hsl(var(--muted-foreground)); }
      `}</style>
    </section>
  );
};
