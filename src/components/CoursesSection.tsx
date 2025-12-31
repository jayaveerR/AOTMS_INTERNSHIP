import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All Courses", "Full Stack", "Data Science", "Cloud & DevOps", "AI & ML", "Mobile Development"];

const coursesData = [
  {
    id: 1,
    title: "Full Stack Development with MERN",
    category: "Full Stack",
    description: "Master MongoDB, Express, React & Node.js with real-world projects and deployment",
    duration: "6 Months",
    level: "Beginner to Advanced",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    category: "Data Science",
    description: "Learn Python, ML algorithms, data visualization and predictive modeling",
    duration: "5 Months",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "AWS Cloud & DevOps Engineering",
    category: "Cloud & DevOps",
    description: "Master cloud architecture, CI/CD pipelines, Docker, Kubernetes & AWS services",
    duration: "4 Months",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Python Full Stack Development",
    category: "Full Stack",
    description: "Build scalable web applications with Django, Flask and modern Python frameworks",
    duration: "5 Months",
    level: "Beginner to Advanced",
  },
  {
    id: 5,
    title: "Artificial Intelligence & Deep Learning",
    category: "AI & ML",
    description: "Neural networks, NLP, computer vision with TensorFlow and PyTorch",
    duration: "6 Months",
    level: "Advanced",
  },
  {
    id: 6,
    title: "React Native Mobile Development",
    category: "Mobile Development",
    description: "Build cross-platform iOS & Android apps with React Native and Expo",
    duration: "4 Months",
    level: "Intermediate",
  },
  {
    id: 7,
    title: "Azure Cloud Solutions Architecture",
    category: "Cloud & DevOps",
    description: "Design and implement enterprise cloud solutions on Microsoft Azure",
    duration: "4 Months",
    level: "Advanced",
  },
  {
    id: 8,
    title: "Data Analytics with Power BI",
    category: "Data Science",
    description: "Transform data into insights with advanced analytics and visualization",
    duration: "3 Months",
    level: "Beginner",
  },
  {
    id: 9,
    title: "Java Full Stack Development",
    category: "Full Stack",
    description: "Enterprise application development with Spring Boot, Hibernate & Angular",
    duration: "6 Months",
    level: "Intermediate",
  },
];

export const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const filteredCourses = selectedCategory === "All Courses"
    ? coursesData
    : coursesData.filter(course => course.category === selectedCategory);

  return (
    <section id="courses" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-primary">Courses</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the Right Course for Your Career
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {course.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5 pt-4 border-t border-border">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  View Details
                </Button>
                <Button
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all duration-300"
                >
                  Join Now
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">No courses found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
