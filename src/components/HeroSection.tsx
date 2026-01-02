import { ArrowRight, PlayCircle, Users, Award, Clock } from "lucide-react";
import { CountUpNumber } from "./CountUpNumber";
import heroStudent from "@/assets/hero-student.png";

const trustStats = [
  { icon: Users, value: 2000, suffix: "+", label: "Students Trained" },
  { icon: Award, value: 300, suffix: "+", label: "Placements" },
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
];

export const HeroSection = () => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="hero-badge">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
                <span>Trusted IT Training Institute</span>
              </span>
            </div>

            <h1 className="section-heading !text-4xl md:!text-5xl">
              Become <span className="text-primary">Job-Ready</span> in <span className="text-accent">90 Days</span>
              <span className="block text-lg sm:text-xl md:text-2xl text-muted-foreground mt-2">
                with Expert-Led IT Training in <span className="text-primary">Vijayawada</span>
              </span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              AI, Cloud, DevOps & Full Stack Courses with Real-World Projects
              and Placement Support from Industry Experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary group flex items-center justify-center gap-2 text-base px-6 py-3">
                Start Learning Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group flex items-center justify-center gap-2 text-base px-6 py-3">
                <PlayCircle className="w-5 h-5 text-accent" />
                Free Demo Class
              </button>
            </div>

            <p className="text-sm text-muted-foreground italic">
              Start Your Education Journey, <span className="text-accent font-medium">For a Better Future</span>
            </p>
            
            <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-4 border-t border-border">
              {trustStats.map((stat) => (
                <div key={stat.label} className="trust-stat">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-accent" />
                    <span className="trust-stat-number text-xl md:text-2xl">
                      <CountUpNumber end={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <span className="trust-stat-label text-xs sm:text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Student Image */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Decorative Elements (Hidden on mobile) */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl hidden lg:block" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl hidden lg:block" />

            <div className="relative z-10">
              <img
                src={heroStudent}
                alt="Student learning on laptop"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl"
              />

              <div className="absolute left-0 right-0 -bottom-4 sm:left-auto sm:-right-4 sm:bottom-20 w-11/12 mx-auto sm:w-auto">
                 <div className="float-card flex items-center gap-3 p-3">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].slice(0, 3).map((i) => (
                        <div
                            key={i}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-card flex items-center justify-center text-xs font-bold text-primary-foreground"
                        >
                            {String.fromCharCode(64 + i)}
                        </div>
                        ))}
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent border-2 border-card flex items-center justify-center text-xs font-bold text-foreground">
                        2K+
                        </div>
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl font-bold text-foreground">
                        <CountUpNumber end={2000} suffix="+" />
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Enrolled Students</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

