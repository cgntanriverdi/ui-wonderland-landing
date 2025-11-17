import { Card } from "@/components/ui/card";
import { Check, Shield, Sparkles, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getMobileOptimizedVariant, benefitsContainer, benefitCard, sectionTransition } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export const Benefits = () => {
  const ref = useRef<HTMLElement>(null);
  const { isVisible } = useScrollAnimation(0.2);
  const { shouldReduceAnimations } = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Disable parallax on mobile
  const orbY = useTransform(scrollYProgress, [0, 1], shouldReduceAnimations ? [0, 0] : [-50, 50]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceAnimations ? [1, 1, 1] : [0.8, 1, 0.8]);

  // Get mobile-optimized variants
  const optimizedBenefitsContainer = getMobileOptimizedVariant(benefitsContainer, shouldReduceAnimations);
  const optimizedBenefitCard = getMobileOptimizedVariant(benefitCard, shouldReduceAnimations);
  const optimizedSectionTransition = getMobileOptimizedVariant(sectionTransition, shouldReduceAnimations);

  const benefits = [
    {
      icon: Zap,
      title: "Komisyonsuz İş Modeli",
      description: "Paket servis platformlarına ödediğiniz yüksek komisyonları sonlandırın. Sabit aylık abonelik modeliyle, sipariş sayısından bağımsız olarak öngörülebilir maliyetlerle çalışın.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Sparkles,
      title: "Dine-In Odaklı Müşteri Akışı",
      description: "Özel kampanya ve fırsatlarla müşterileri doğrudan restoranınıza yönlendirin. Dine-in hizmetiyle daha yüksek ortalama hesap ve artan kârlılık elde edin.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Check,
      title: "Sadakat Programı ile Tekrar Eden Müşteriler",
      description: "QR kod tabanlı puan sistemiyle müşterilerinizin tekrar ziyaret etmesini sağlayın. Her ziyarette kazanılan puanlar, müşteri bağlılığını artırır.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Müşteri Verilerinin Tam Kontrolü",
      description: "Müşteri bilgileri, sipariş geçmişi ve tercihler artık sizde. Platform bağımlılığından kurtulun, müşteri ilişkilerinizi doğrudan yönetin.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" id="benefits">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-red-50/30 to-yellow-50/50"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -30]),
        }}
      />

      {/* Parallax gradient orb with scale animation - Simplified for mobile */}
      {!shouldReduceAnimations && (
        <motion.div
          className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full will-change-transform"
          style={{
            background: 'radial-gradient(circle, hsl(14 88% 55% / 0.15), transparent 70%)',
            filter: 'blur(60px)',
            y: orbY,
            scale: orbScale,
          }}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with reveal animation */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={optimizedSectionTransition}
        >
          <h2 className="section-title mb-6">
            Restoranınızın Kontrolü
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)]">
              Artık Sizde
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Komisyonsuz iş modeliyle kârlılığınızı artırın, müşteri ilişkilerinizi güçlendirin.
          </p>
        </motion.div>

        {/* Cards with staggered 3D reveal */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={optimizedBenefitsContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={optimizedBenefitCard}
              whileHover={shouldReduceAnimations ? undefined : {
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              style={shouldReduceAnimations ? undefined : {
                perspective: 1000,
                transformStyle: "preserve-3d",
              }}
            >
              <Card className="p-8 text-center glass-effect h-full relative overflow-hidden">
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color.replace('from-', 'hsl(var(--')}, ${benefit.color.replace('to-', 'hsl(var(--')})`,
                  }}
                />

                {/* Icon with rotation on hover - Simplified for mobile */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} mx-auto mb-6 flex items-center justify-center relative z-10`}
                  whileHover={shouldReduceAnimations ? { scale: 1.05 } : { scale: 1.2, rotate: 360 }}
                  transition={shouldReduceAnimations ? { duration: 0.2 } : { type: "spring", stiffness: 200, damping: 15 }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 relative z-10">{benefit.title}</h3>
                <p className="text-muted-foreground relative z-10">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
