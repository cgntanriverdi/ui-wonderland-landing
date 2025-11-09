import { Card } from "@/components/ui/card";
import { Map, QrCode, Trophy, Gift } from "lucide-react";
import foodCollage from "@/assets/food-collage.png";
import { motion } from "framer-motion";

export const Solution = () => {

  const steps = [
    {
      icon: Map,
      title: "Customize Your Program",
      description: "Design your loyalty tiers, rewards, and branding in minutes with our intuitive platform"
    },
    {
      icon: QrCode,
      title: "Seamless Integration",
      description: "Integrate with your existing POS system or use our QR code solution - no hardware required"
    },
    {
      icon: Trophy,
      title: "Track Real-Time Data",
      description: "Monitor customer engagement, redemption rates, and revenue impact through live analytics"
    },
    {
      icon: Gift,
      title: "Drive Growth",
      description: "Watch retention rates climb as customers return more frequently for rewards and exclusive offers"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden" id="how-it-works">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 via-orange-50/30 to-red-50/50 animate-gradient"
           style={{ backgroundSize: '200% 200%' }} />

      {/* Floating gradient orb */}
      <motion.div
        className="absolute bottom-20 left-20 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(25 95% 53% / 0.15), transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title mb-6">
            From Setup to Success
            <span className="block mt-2">in <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] animate-gradient"
              style={{ backgroundSize: '200% 200%' }}
            >
              4 Simple Steps
            </motion.span></span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Launch your loyalty program and start seeing results within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src={foodCollage}
                alt="Restaurant Foods"
                className="w-full h-auto rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            <h3 className="text-4xl font-bold">How It Works</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{
                    x: 15,
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    <Card className="p-6 glass-effect relative overflow-hidden">
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      />
                      <div className="flex gap-6 items-start relative z-10">
                        <div className="flex-shrink-0">
                          <motion.div
                            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] flex items-center justify-center animate-gradient"
                            style={{ backgroundSize: '200% 200%' }}
                            animate={{
                              rotate: [0, 5, 0, -5, 0],
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.2,
                            }}
                            whileHover={{ rotate: 180, scale: 1.2 }}
                          >
                            <step.icon className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-accent mb-1">STEP {index + 1}</div>
                          <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
