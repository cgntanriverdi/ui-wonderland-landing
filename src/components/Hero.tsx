import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInScale, easing } from "@/lib/animations";
import { useParallax } from "@/hooks/use-scroll-animation";

export const Hero = () => {
  const offsetY = useParallax(0.3);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(14_88%_55%_/_0.1),transparent_50%)]"
        style={{ y: offsetY }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(25_95%_53%_/_0.1),transparent_50%)]"
        style={{ y: offsetY * -1 }}
      />

      <motion.div
        className="container mx-auto px-6 py-32 relative z-10"
        style={{ scale, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="inline-block" variants={fadeInUp}>
              <span className="text-sm font-semibold tracking-wider uppercase text-accent">
                Dijital Sadakat Devrimi
              </span>
            </motion.div>

            <motion.h1 className="hero-text text-balance" variants={fadeInUp}>
              Tüm Restoranlarınızı
              <motion.span
                className="block gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: easing.apple }}
              >
                Tek Uygulamada
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance"
              variants={fadeInUp}
            >
              Favori restoranlarınızdan puan kazanın, ödüller biriktirin ve
              her öğününüzü değerli hale getirin. Tek platform, sınırsız fırsat.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easing.easeOut }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] hover:opacity-90 transition-all w-full sm:w-auto"
                >
                  Ücretsiz Başla
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easing.easeOut }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 hover:bg-accent hover:text-accent-foreground transition-all w-full sm:w-auto"
                >
                  Demo İzle
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center gap-8 pt-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp}>
                <motion.div
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: easing.apple }}
                >
                  1000+
                </motion.div>
                <div className="text-sm text-muted-foreground">Partner Restoran</div>
              </motion.div>
              <div className="h-12 w-px bg-border" />
              <motion.div variants={fadeInUp}>
                <motion.div
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: easing.apple }}
                >
                  50K+
                </motion.div>
                <div className="text-sm text-muted-foreground">Aktif Kullanıcı</div>
              </motion.div>
              <div className="h-12 w-px bg-border" />
              <motion.div variants={fadeInUp}>
                <motion.div
                  className="text-3xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: easing.apple }}
                >
                  ₺2M+
                </motion.div>
                <div className="text-sm text-muted-foreground">Tasarruf Sağlandı</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeInScale}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] blur-3xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src={heroPhone}
              alt="Afiyet App"
              className="relative w-full h-auto"
              style={{ y: offsetY * -0.5 }}
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
