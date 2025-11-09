import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-effect shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)]" />
          <span className="text-2xl font-bold">Afiyet 2.0</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
            Nasıl Çalışır
          </a>
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Özellikler
          </a>
          <a href="#download" className="text-foreground/80 hover:text-foreground transition-colors">
            İndir
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Giriş Yap
          </Button>
          <Button className="bg-gradient-to-r from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] hover:opacity-90 transition-opacity">
            Başla
          </Button>
        </div>
      </div>
    </nav>
  );
};
