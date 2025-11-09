import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden" id="download">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-orange-50/30 to-yellow-50/50 animate-gradient"
           style={{ backgroundSize: '200% 200%' }} />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(14 88% 55% / 0.2), transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] animate-gradient"
            style={{ backgroundSize: "200% 200%" }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLS4wMyAzMGgxMHYxMGgtMTB6TTIwIDIwaDEwdjEwaC0xMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-50" />

          <div className="relative z-10 py-20 px-8 md:px-16 text-center text-white">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                Ready to Transform
              </motion.span>
              <motion.span
                className="block mt-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                Your Customer Retention?
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Join 1,000+ restaurants driving 35% more revenue with smart loyalty. Start your free 30-day trial today.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-white text-[hsl(14_88%_55%)] hover:bg-white/90 transition-all w-full sm:w-auto shadow-2xl"
                >
                  Start Free Trial
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block"
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10 transition-all w-full sm:w-auto"
                >
                  Schedule a Call
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
