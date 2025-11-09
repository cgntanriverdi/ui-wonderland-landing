import heroPhone from "@/assets/hero-phone.png";
import { motion } from "framer-motion";
import { easing } from "@/lib/animations";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50" />

      {/* Static gradient orbs */}
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(14 88% 55% / 0.2), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(25 95% 53% / 0.2), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(35 90% 60% / 0.15), transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easing.apple }}
          >
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-wider uppercase text-accent">
                Kurumsal Sadakat Platformu
              </span>
            </div>

            <h1 className="hero-text text-balance">
              Gelirinizi
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)]">
                %35 Artırın Akıllı Sadakat ile
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance">
              İlk kez gelen ziyaretçileri sadık müşterilere dönüştürün. Müşteri sadakatini artırmak ve tekrar iş yapmayı sağlamak için her şey bir arada platform.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: easing.apple }}
          >
            {/* Static glow behind phone */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] blur-3xl opacity-30"
            />
            <img
              src={heroPhone}
              alt="Afiyet App"
              className="relative w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
