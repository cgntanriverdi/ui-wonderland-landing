import { Card } from "@/components/ui/card";
import { Map, QrCode, Trophy, Gift } from "lucide-react";
import foodCollage from "@/assets/food-collage.png";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Solution = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const steps = [
    {
      icon: Map,
      title: "Harita Görür",
      description: "Yakındaki tüm partner restoranları keşfedin"
    },
    {
      icon: QrCode,
      title: "QR Okuttur",
      description: "Yemek sonrası hızlıca puan kazanın"
    },
    {
      icon: Trophy,
      title: "Puan Biriktirir",
      description: "Her restorana özel puanlarınızı toplayın"
    },
    {
      icon: Gift,
      title: "Ödül Kazanır",
      description: "Ücretsiz yemek ve indirimler kazanın"
    }
  ];

  return (
    <section className="py-32 bg-background" id="how-it-works" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <h2 className="section-title mb-6">
            Sadakat Programları
            <span className="block mt-2">Artık <span className="gradient-text">Çok Kolay</span></span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Her restoranınızdan puan kazanın, bir arada yönetin
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.img
              src={foodCollage}
              alt="Restaurant Foods"
              className="w-full h-auto rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={slideInRight}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h3 className="text-4xl font-bold">Nasıl Çalışır?</h3>
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 glass-effect">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <motion.div
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <step.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-accent mb-1">ADIM {index + 1}</div>
                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
