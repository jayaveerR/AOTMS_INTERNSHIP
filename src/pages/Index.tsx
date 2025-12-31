import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CoursesMarquee } from "@/components/CoursesMarquee";
import { AboutSection } from "@/components/AboutSection";
import { LearningProcess } from "@/components/LearningProcess";
import { CoursesSection } from "@/components/CoursesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { MentorsSection } from "@/components/MentorsSection";
import { PlacementsSection } from "@/components/PlacementsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CoursesMarquee />
      <AboutSection />
      <LearningProcess />
      <CoursesSection />
      <WhyChooseUs />
      <MentorsSection />
      <PlacementsSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
