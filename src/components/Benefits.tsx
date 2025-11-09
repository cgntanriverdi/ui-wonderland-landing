import { Card } from "@/components/ui/card";
import { Check, Shield, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const benefits = [
    {
      icon: Zap,
      title: "Hızlı ve Kolay",
      description: "Tek QR kod okutması ile anında puan kazanın",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Sparkles,
      title: "Her Ziyaret Değerli",
      description: "Her öğün, her kahve, her atıştırmalık puan kazandırır",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Check,
      title: "Tek Platform",
      description: "Tüm sadakat puanlarınız bir arada, takip etmesi kolay",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Güvenli ve Özel",
      description: "Verileriniz şifreli ve güvende, sadece sizin kontrolünüzde",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30" id="benefits" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <h2 className="section-title mb-6">
            Neden <span className="gradient-text">Afiyet 2.0</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Restoran sadakat programlarını yeniden tanımlıyoruz
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={cardHover}
            >
              <Card className="p-8 text-center glass-effect h-full">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} mx-auto mb-6 flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
