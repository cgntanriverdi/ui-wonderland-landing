import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Solution } from "@/components/Solution";
import { Gamification } from "@/components/Gamification";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Benefits />
      <Solution />
      <Gamification />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
