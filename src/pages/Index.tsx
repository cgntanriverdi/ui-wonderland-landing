import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Solution } from "@/components/Solution";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { useResize } from "@/contexts/ResizeContext";

const Index = () => {
  const { isResizing } = useResize();

  return (
    <div className={`min-h-screen bg-background relative overflow-hidden ${isResizing ? 'resize-freeze' : ''}`}>
      <FloatingParticles />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Benefits />
        <Solution />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
