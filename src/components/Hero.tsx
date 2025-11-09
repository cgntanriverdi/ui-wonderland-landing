import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.png";
import { motion } from "framer-motion";
import { easing } from "@/lib/animations";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 animate-gradient"
           style={{ backgroundSize: '200% 200%' }} />

      {/* Continuous floating gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full animate-morph"
        style={{
          background: 'radial-gradient(circle, hsl(14 88% 55% / 0.2), transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full animate-morph"
        style={{
          background: 'radial-gradient(circle, hsl(25 95% 53% / 0.2), transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full animate-morph"
        style={{
          background: 'radial-gradient(circle, hsl(35 90% 60% / 0.15), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [-200, 200, -200],
          y: [-100, 100, -100],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
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
            <motion.div
              className="inline-block"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-semibold tracking-wider uppercase text-accent">
                Enterprise Loyalty Platform
              </span>
            </motion.div>

            <h1 className="hero-text text-balance">
              Increase Revenue by
              <motion.span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] animate-gradient"
                style={{ backgroundSize: '200% 200%' }}
              >
                35% with Smart Loyalty
              </motion.span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance">
              Turn first-time visitors into loyal customers. The all-in-one loyalty platform trusted by 1,000+ restaurants to boost retention and drive repeat business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] hover:shadow-2xl transition-all w-full sm:w-auto animate-gradient"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Start Free Trial
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 hover:bg-accent hover:text-accent-foreground transition-all w-full sm:w-auto"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-[hsl(25_95%_53%)]">
                  35%
                </div>
                <div className="text-sm text-muted-foreground">Average Revenue Lift</div>
              </motion.div>
              <div className="h-12 w-px bg-border" />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-[hsl(25_95%_53%)]">
                  2.5x
                </div>
                <div className="text-sm text-muted-foreground">Customer Lifetime Value</div>
              </motion.div>
              <div className="h-12 w-px bg-border" />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-[hsl(25_95%_53%)]">
                  24h
                </div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: easing.apple }}
          >
            {/* Animated glow behind phone */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] blur-3xl opacity-30 animate-gradient"
              style={{ backgroundSize: '200% 200%' }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src={heroPhone}
              alt="Afiyet App"
              className="relative w-full h-auto"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
