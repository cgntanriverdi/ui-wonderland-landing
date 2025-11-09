import { Card } from "@/components/ui/card";
import { Check, Shield, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const Benefits = () => {

  const benefits = [
    {
      icon: Zap,
      title: "Launch in 24 Hours",
      description: "No complicated setup or training required. Go live with a fully branded loyalty program in one day",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Sparkles,
      title: "Increase Repeat Visits",
      description: "Data shows 35% more frequent visits from loyalty members. Turn occasional diners into regulars",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Check,
      title: "Unified Dashboard",
      description: "Track all customer behavior, rewards redemption, and ROI in one powerful analytics dashboard",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and GDPR compliance. Your customer data is protected and fully owned by you",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden" id="benefits">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-red-50/30 to-yellow-50/50 animate-gradient"
           style={{ backgroundSize: '200% 200%' }} />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(14 88% 55% / 0.15), transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title mb-6">
            Why <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] animate-gradient"
              style={{ backgroundSize: '200% 200%' }}
            >
              Leading Restaurants
            </motion.span> Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The complete loyalty solution that drives measurable results from day one
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 3, 0],
                  rotateX: [0, 2, 0],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="p-8 text-center glass-effect h-full relative overflow-hidden">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${benefit.color.replace('from-', 'hsl(var(--')}, ${benefit.color.replace('to-', 'hsl(var(--')})`,
                    }}
                  />
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} mx-auto mb-6 flex items-center justify-center relative z-10`}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 relative z-10">{benefit.title}</h3>
                  <p className="text-muted-foreground relative z-10">{benefit.description}</p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
