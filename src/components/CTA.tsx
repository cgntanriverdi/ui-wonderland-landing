import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, zoomIn, easing } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const CTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 to-background" id="download" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          variants={zoomIn}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLS4wMyAzMGgxMHYxMGgtMTB6TTIwIDIwaDEwdjEwaC0xMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-50" />

          <div className="relative z-10 py-20 px-8 md:px-16 text-center text-white">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: easing.apple }}
            >
              Ödüllerle Dolu Lezzetli
              <motion.span
                className="block mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2, ease: easing.apple }}
              >
                Bir Yolculuğa Başla
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easing.apple }}
            >
              Binlerce restoranda puan kazan, ödüller ve ücretsiz yemekler için puanlarını kullan
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5, ease: easing.apple }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-white text-[hsl(14_88%_55%)] hover:bg-white/90 transition-all w-full sm:w-auto"
                >
                  App Store'dan İndir
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10 transition-all w-full sm:w-auto"
                >
                  Google Play'den İndir
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
