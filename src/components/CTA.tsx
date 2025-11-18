import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getMobileOptimizedVariant, ctaReveal, sectionTransition } from "@/lib/animations";
import { useRef, useMemo } from "react";
import { useResize } from "@/contexts/ResizeContext";

export const CTA = () => {
  const ref = useRef<HTMLElement>(null);
  const { shouldReduceAnimations } = useResize();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Memoize transform ranges
  const transformRanges = useMemo(() => ({
    backgroundY: shouldReduceAnimations ? [0, 0] : [0, -30],
    orbScale: shouldReduceAnimations ? [1, 1, 1] : [0.8, 1.1, 0.9],
    orbOpacity: shouldReduceAnimations ? [0, 0, 0] : [0.15, 0.25, 0.2]
  }), [shouldReduceAnimations]);

  // Disable parallax on mobile
  const backgroundY = useTransform(scrollYProgress, [0, 1], transformRanges.backgroundY as [number, number]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], transformRanges.orbScale as [number, number, number]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5, 1], transformRanges.orbOpacity as [number, number, number]);

  const optimizedCtaReveal = getMobileOptimizedVariant(ctaReveal, shouldReduceAnimations);
  const optimizedSectionTransition = getMobileOptimizedVariant(sectionTransition, shouldReduceAnimations);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" id="download">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-orange-50/30 to-yellow-50/50"
        style={{ y: backgroundY }}
      />

      {/* Animated orb with parallax - Disabled on mobile */}
      {!shouldReduceAnimations && (
        <motion.div
          className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full will-change-transform"
          style={{
            background: 'radial-gradient(circle, hsl(14 88% 55% / 0.2), transparent 70%)',
            filter: 'blur(60px)',
            scale: orbScale,
            opacity: orbOpacity,
          }}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={optimizedCtaReveal}
          whileHover={shouldReduceAnimations ? undefined : { scale: 1.02, y: -10 }}
          transition={shouldReduceAnimations ? undefined : { type: "spring", stiffness: 150, damping: 20 }}
        >
          {/* Animated gradient background - Static on mobile */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] ${
              shouldReduceAnimations ? '' : 'animate-gradient'
            }`}
            data-gradient-animation={shouldReduceAnimations ? undefined : "true"}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLS4wMyAzMGgxMHYxMGgtMTB6TTIwIDIwaDEwdjEwaC0xMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-50" />

          <div className="relative z-10 py-20 px-8 md:px-16 text-center text-white">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={optimizedSectionTransition}
              custom={0}
            >
              Komisyonlara Veda Edin.
              <motion.span
                className="block mt-2"
                variants={optimizedSectionTransition}
                custom={1}
              >
                Müşterilerinize Merhaba.
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={optimizedSectionTransition}
              custom={2}
            >
              Paket servis platformlarına ödediğiniz komisyonları hesaplayın. Afiyet ile sabit aylık abonelik modeline geçin ve kârlılığınızı artırın.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={optimizedSectionTransition}
              custom={3}
            >
              <motion.div
                whileHover={shouldReduceAnimations ? undefined : { scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-white text-[hsl(14_88%_55%)] hover:bg-white/90 transition-all w-full sm:w-auto shadow-2xl"
                >
                  Ücretsiz Deneyin
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={shouldReduceAnimations ? undefined : { scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-white text-[hsl(14_88%_55%)] hover:bg-white/90 transition-all w-full sm:w-auto shadow-2xl"
                  asChild
                >
                  <a href="mailto:afiyetapp@outlook.com?subject=Afiyet Hakkında Bilgi Almak İstiyorum&body=Merhaba,%0D%0A%0D%0AAfiyet hakkında daha fazla bilgi almak istiyorum.">
                    Bize Ulaşın
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
