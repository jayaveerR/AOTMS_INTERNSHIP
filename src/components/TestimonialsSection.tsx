import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Verma",
    course: "Full Stack Development",
    company: "Placed at TCS",
    feedback: "Best decision of my career! The trainers are incredibly patient and the curriculum is industry-focused. Got placed within 2 months of course completion.",
    rating: 5,
    imagePlaceholder: "Young male graduate in formal shirt, smiling",
  },
  {
    id: 2,
    name: "Divya Iyer",
    course: "Data Science",
    company: "Placed at Accenture",
    feedback: "The hands-on projects and real datasets made all the difference. Interview preparation was thorough and I felt confident during my placement drive.",
    rating: 5,
    imagePlaceholder: "Female professional with glasses, confident look",
  },
  {
    id: 3,
    name: "Karthik Reddy",
    course: "AWS Cloud & DevOps",
    company: "Placed at Wipro",
    feedback: "From zero knowledge to cloud certified professional in 4 months. The mentors are industry experts who share real-world scenarios. Highly recommended!",
    rating: 5,
    imagePlaceholder: "Male IT professional in casual attire",
  },
  {
    id: 4,
    name: "Pooja Nair",
    course: "Python Full Stack",
    company: "Placed at Infosys",
    feedback: "Small batch size meant personal attention. Every doubt was cleared immediately. The career support team helped me crack 3 interviews in the same week!",
    rating: 5,
    imagePlaceholder: "Young female developer, cheerful expression",
  },
  {
    id: 5,
    name: "Aditya Sharma",
    course: "MERN Stack",
    company: "Placed at Cognizant",
    feedback: "Live project experience gave me the confidence to face technical interviews. The portfolio I built here became my biggest strength during interviews.",
    rating: 5,
    imagePlaceholder: "Male graduate in blue shirt, professional headshot",
  },
  {
    id: 6,
    name: "Sneha Kulkarni",
    course: "AI & Machine Learning",
    company: "Placed at HCL",
    feedback: "The AI course content is updated and relevant. Working on real ML models and deploying them taught me more than any online course ever could.",
    rating: 5,
    imagePlaceholder: "Female tech professional with modern look",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Student </span>
            <span className="text-primary">Success </span>
            <span className="text-accent">Stories</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real students, real results, real transformations
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="relative h-[500px] md:h-[400px] flex items-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-card border-2 border-border rounded-3xl p-8 md:p-12 shadow-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden border-4 border-background shadow-xl">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <User className="w-12 h-12 text-muted-foreground/20 mx-auto mb-1" />
                            <p className="text-[8px] text-muted-foreground/40 px-2 leading-tight">
                              {testimonials[currentIndex].imagePlaceholder}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <Quote className="w-10 h-10 text-primary/20 mb-4 mx-auto md:mx-0" />

                      <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 italic">
                        "{testimonials[currentIndex].feedback}"
                      </p>

                      <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-sm text-primary font-semibold mb-1">
                          {testimonials[currentIndex].course}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Join <span className="font-bold text-primary">2000+</span> successful students
          </p>
        </motion.div>
      </div>
    </section>
  );
};
