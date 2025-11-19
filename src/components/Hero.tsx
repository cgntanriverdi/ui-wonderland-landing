import { motion, useScroll, useTransform } from "framer-motion";
import { getMobileOptimizedVariant, heroReveal, heroTextReveal } from "@/lib/animations";
import { useRef, useMemo } from "react";
import { useResize } from "@/contexts/ResizeContext";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { shouldReduceAnimations } = useResize();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Memoize transform ranges to prevent recalculation on resize
  const transformRanges = useMemo(() => ({
    orbOpacity: shouldReduceAnimations ? [1, 1] : [1, 0],
    textY: shouldReduceAnimations ? [0, 0] : [0, -100],
    textScale: shouldReduceAnimations ? [1, 1] : [1, 0.9],
    textOpacity: shouldReduceAnimations ? [1, 1, 1] : [1, 1, 0]
  }), [shouldReduceAnimations]);

  // Disable parallax on mobile for better performance
  const orbOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    transformRanges.orbOpacity as [number, number]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    transformRanges.textY as [number, number]
  );
  const textScale = useTransform(
    scrollYProgress,
    [0, 0.5],
    transformRanges.textScale as [number, number]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    transformRanges.textOpacity as [number, number, number]
  );

  // Get mobile-optimized animation variants
  const optimizedHeroReveal = getMobileOptimizedVariant(heroReveal, shouldReduceAnimations);
  const optimizedHeroTextReveal = getMobileOptimizedVariant(heroTextReveal, shouldReduceAnimations);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background with scroll parallax */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 ${
          shouldReduceAnimations ? '' : 'animate-gradient'
        }`}
        style={{
          opacity: orbOpacity,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Animated gradient orbs with scroll-driven opacity - Reduced for mobile */}
      {!shouldReduceAnimations && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full animate-gradient-pulse will-change-transform"
            style={{
              background: 'radial-gradient(circle, hsl(14 88% 55% / 0.2), transparent 70%)',
              filter: 'blur(80px)',
              opacity: orbOpacity,
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full animate-gradient-pulse-delayed will-change-transform"
            style={{
              background: 'radial-gradient(circle, hsl(25 95% 53% / 0.2), transparent 70%)',
              filter: 'blur(80px)',
              opacity: orbOpacity,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full animate-gradient-pulse-slow will-change-transform"
            style={{
              background: 'radial-gradient(circle, hsl(35 90% 60% / 0.15), transparent 70%)',
              filter: 'blur(100px)',
              opacity: orbOpacity,
            }}
          />
        </>
      )}

      {/* Simplified orb for mobile */}
      {shouldReduceAnimations && (
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top, hsl(14 88% 55% / 0.1), transparent 50%)',
          }}
        />
      )}

      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          className="text-center space-y-8 max-w-4xl mx-auto"
          style={{
            y: shouldReduceAnimations ? 0 : textY,
            scale: shouldReduceAnimations ? 1 : textScale,
            opacity: shouldReduceAnimations ? 1 : textOpacity,
            transform: shouldReduceAnimations ? 'none' : undefined,
            willChange: shouldReduceAnimations ? 'auto' : 'transform',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
          {/* Hero title with delayed reveal */}
          <motion.h1
            className="hero-text text-[hsl(14_88%_55%)]"
            initial={shouldReduceAnimations ? { opacity: 0, y: 30, scale: 0.95 } : "hidden"}
            animate={shouldReduceAnimations ? { opacity: 1, y: 0, scale: 1 } : "visible"}
            variants={shouldReduceAnimations ? undefined : optimizedHeroReveal}
            transition={shouldReduceAnimations ? { duration: 0.6, ease: easing.apple } : undefined}
            style={{
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility',
              transform: shouldReduceAnimations ? 'translateZ(0)' : undefined,
              backfaceVisibility: 'hidden',
            }}
          >
            Afiyet
          </motion.h1>

          {/* Main headline with blur reveal effect */}
          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8"
            initial={shouldReduceAnimations ? { opacity: 0, y: 20 } : "hidden"}
            animate={shouldReduceAnimations ? { opacity: 1, y: 0 } : "visible"}
            variants={shouldReduceAnimations ? undefined : optimizedHeroTextReveal}
            transition={{
              delay: shouldReduceAnimations ? 0.1 : 0.3,
              duration: shouldReduceAnimations ? 0.5 : 1,
              ease: easing.apple
            }}
            style={{
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility',
              transform: shouldReduceAnimations ? 'translateZ(0)' : undefined,
              backfaceVisibility: 'hidden',
              perspective: 1000,
            }}
          >
            Müşteriler Artık Sizin.
          </motion.p>

          {/* Description with staggered reveal */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance"
            initial={shouldReduceAnimations ? { opacity: 0, y: 20 } : "hidden"}
            animate={shouldReduceAnimations ? { opacity: 1, y: 0 } : "visible"}
            variants={shouldReduceAnimations ? undefined : optimizedHeroTextReveal}
            transition={{
              delay: shouldReduceAnimations ? 0.2 : 0.6,
              duration: shouldReduceAnimations ? 0.5 : 1,
              ease: easing.apple
            }}
            style={{
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility',
              transform: shouldReduceAnimations ? 'translateZ(0)' : undefined,
              backfaceVisibility: 'hidden',
              perspective: 1000,
            }}
          >
            Online sipariş platformlarına ödediğiniz yüksek komisyonları sonlandırın. QR kod ve kampanya sistemiyle müşterilerinizi doğrudan restoranınıza yönlendirin.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
