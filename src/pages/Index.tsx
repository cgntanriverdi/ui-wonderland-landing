import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Solution } from "@/components/Solution";
import { Gamification } from "@/components/Gamification";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Benefits />
        <Solution />
        <Gamification />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
