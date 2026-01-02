import { useRef } from "react";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { coursesData } from "@/data/courses";
import { useCart } from "@/hooks/use-cart";
import { CountUpNumber } from "./CountUpNumber";

export const CoursesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.9; // Scroll by 90% of the container width
      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="courses" className="py-12 sm:py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-0 sm:px-6">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mb-8 md:mb-12 px-4 sm:px-0"
        >
          <div className="max-w-xl">
            <h2 className="section-heading">
              Professional Training Programs
            </h2>
            <p className="section-subheading mt-4">
              Choose the Right Course for Your Career and Master New Skills
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 bg-card rounded-full shadow-md items-center justify-center flex border hover:bg-background transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 bg-card rounded-full shadow-md items-center justify-center flex border hover:bg-background transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-8 px-4 sm:px-0"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {coursesData.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-[85%] sm:w-[320px] md:w-[350px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-3 py-1 bg-background/70 backdrop-blur-md text-xs font-semibold uppercase tracking-wider rounded-md border border-border/50">
                          {course.category}
                        </span>
                      </div>
                    </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("w-4 h-4", i < course.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300")}/>
                      ))}
                    </div>

                    <Link to={`/course/${course.slug}`}>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                      {course.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-border/50 flex flex-col gap-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary tracking-tight">{course.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                      </div>
                      <button
                        onClick={() => addToCart({ id: course.id, title: course.title, price: parseInt(course.price.replace(/[^\d]/g, '')), image: course.image })}
                        className="btn-primary w-full group/btn"
                      >
                        Enroll in Course
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 bg-primary py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
            {[
              { value: 2000, suffix: "+", label: "Successfully Trained" },
              { value: 15485, suffix: "+", label: "Classes Completed" },
              { value: 300, suffix: "+", label: "Placements in US" },
              { value: 10, suffix: "+", label: "Years of Experience" },
            ].map((stat, index) => (
              <div key={stat.label} className={`text-center ${index > 0 ? 'border-l border-primary-foreground/20' : ''} ${index > 1 ? 'md:border-l' : ''}`}>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-primary-foreground/80 text-xs uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
