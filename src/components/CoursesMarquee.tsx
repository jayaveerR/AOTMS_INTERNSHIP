import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Palette,
  Terminal,
  Globe,
  BarChart3,
  Smartphone
} from "lucide-react";

const courses = [
  { name: "Full Stack", icon: Code },
  { name: "Python", icon: Terminal },
  { name: "Data Science", icon: BarChart3 },
  { name: "Java", icon: Cpu },
  { name: "Cloud Computing", icon: Cloud },
  { name: "DevOps", icon: Database },
  { name: "Machine Learning", icon: Cpu },
  { name: "Cyber Security", icon: Shield },
  { name: "UI/UX Design", icon: Palette },
  { name: "Web Development", icon: Globe },
  { name: "Mobile Apps", icon: Smartphone },
];

export const CoursesMarquee = () => {
  return (
    <section className="py-8 bg-muted/20 overflow-hidden border-y border-border/30">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/20 to-transparent z-10 pointer-events-none" />
        
        <div className="flex">
          <div className="flex animate-marquee items-center gap-16">
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div
                  key={`first-${index}`}
                  className="flex items-center gap-3 whitespace-nowrap"
                >
                  <IconComponent className="w-7 h-7 text-primary/50" strokeWidth={1.5} />
                  <span className="text-xl font-display font-semibold text-muted-foreground/70 tracking-wide">
                    {course.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex animate-marquee items-center gap-16 ml-16">
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div
                  key={`second-${index}`}
                  className="flex items-center gap-3 whitespace-nowrap"
                >
                  <IconComponent className="w-7 h-7 text-primary/50" strokeWidth={1.5} />
                  <span className="text-xl font-display font-semibold text-muted-foreground/70 tracking-wide">
                    {course.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
