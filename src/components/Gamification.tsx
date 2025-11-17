import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, Target, Award } from "lucide-react";
import oyunImg from "@/assets/oyun.png";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, zoomIn } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Gamification = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const levels = [
    { name: "Bronze", color: "bg-amber-700", users: "0-999 puan" },
    { name: "Silver", color: "bg-gray-400", users: "1,000-4,999 puan" },
    { name: "Gold", color: "bg-yellow-500", users: "5,000-19,999 puan" },
    { name: "Platinum", color: "bg-purple-500", users: "20,000+ puan" }
  ];

  const features = [
    {
      icon: Star,
      title: "Her Ziyaret Puan Yağmuru",
      items: [
        "QR kod okut, otomatik puan kazan - basit",
        "Restorana özel seviye sistemi ile özel ayrıcalıklar",
        "Bronze'dan Platinum'a - her seviyede farklı hediyeler"
      ]
    },
    {
      icon: Zap,
      title: "Streak Sistemi ile Turbo Puan",
      items: [
        "Haftada 3 kez gel, puanlar 2x olsun",
        "Sürekli müşterilere özel VIP indirimler",
        "En sadık müşteri sen ol, en büyük ödüller senin"
      ]
    },
    {
      icon: Target,
      title: "Yeni Keşiflerde Bonus Fırtınası",
      items: [
        "Yeni restoran dene, ilk ziyarette 3x puan",
        "\"İlk 50 müşteri\" kampanyalarına özel avantajlar",
        "Arkadaşını getir, sen de o da kazansın"
      ]
    },
    {
      icon: Award,
      title: "Challenge Sistemi",
      items: [
        "Haftalık görevler: \"5 farklı restoran ziyaret et\"",
        "Aylık özel etkinlikler ve yarışmalar",
        "Leaderboard'da zirveye çık, ekstra ödüller kap"
      ]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/30 to-background" id="features" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <h2 className="section-title mb-6">
            Müşterileriniz Gelmek İçin
            <span className="block mt-2">
              <span className="gradient-text">Yarışacak</span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oyun gibi: Puan kazan, level atla, ödül topla - başarılı sadakat programlarından esinlendi
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.img
              src={oyunImg}
              alt="Gamification System"
              className="w-full h-auto rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 glass-effect">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                      <ul className="space-y-2">
                        {feature.items.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold mb-8">Level Sistemi</h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {levels.map((level, index) => (
            <motion.div
              key={index}
              variants={zoomIn}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 text-center glass-effect h-full">
                <motion.div
                  className={`w-20 h-20 rounded-full ${level.color} mx-auto mb-4 flex items-center justify-center`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Award className="w-10 h-10 text-white" />
                </motion.div>
                <h4 className="text-2xl font-bold mb-2">{level.name}</h4>
                <Badge variant="secondary" className="text-xs">
                  {level.users}
                </Badge>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
