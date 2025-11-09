import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 to-background" id="download">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLS4wMyAzMGgxMHYxMGgtMTB6TTIwIDIwaDEwdjEwaC0xMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-50" />
          
          <div className="relative z-10 py-20 px-8 md:px-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Ödüllerle Dolu Lezzetli
              <span className="block mt-2">Bir Yolculuğa Başla</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto animate-fade-in">
              Binlerce restoranda puan kazan, ödüller ve ücretsiz yemekler için puanlarını kullan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-white text-[hsl(14_88%_55%)] hover:bg-white/90 transition-all hover:scale-105"
              >
                App Store'dan İndir
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10 transition-all hover:scale-105"
              >
                Google Play'den İndir
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
