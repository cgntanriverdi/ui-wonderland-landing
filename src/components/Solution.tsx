import { Card } from "@/components/ui/card";
import { Map, QrCode, Trophy, Gift } from "lucide-react";
import foodCollage from "@/assets/food-collage.png";
import { motion } from "framer-motion";

export const Solution = () => {

  const steps = [
    {
      icon: Map,
      title: "Programınızı Tasarlayın",
      description: "Sadakat seviyeleri, ödüller ve kampanyalar dakikalar içinde hazır. Teknik bilgi gerektirmez"
    },
    {
      icon: QrCode,
      title: "Sorunsuz Entegrasyon",
      description: "QR tabanlı sistem her POS ile çalışır. Donanım kurulumu yok, eğitim gerektirmez"
    },
    {
      icon: Trophy,
      title: "Anlık Analiz",
      description: "Müşteri davranışları, kampanya kullanımları ve ciro etkisini canlı panolardan takip edin"
    },
    {
      icon: Gift,
      title: "Otomatik Etkileşim",
      description: "AI destekli öneriler müşterileri geri getirir. Oyunlaştırma müşteri değerini artırır"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden" id="how-it-works">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 via-orange-50/30 to-red-50/50" />

      {/* Static gradient orb */}
      <div
        className="absolute bottom-20 left-20 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(25 95% 53% / 0.15), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title mb-6">
            Sadakat programınızı
            <span className="block mt-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)]">
                24 saatte başlatın
              </span>
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Minimum kurulum, sıfır teknik yük ile hemen başlayın
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={foodCollage}
              alt="Restaurant Foods"
              className="w-full h-auto rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <div className="space-y-8">
            <h3 className="text-4xl font-bold">Nasıl Çalışır</h3>
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
                  <Card className="p-6 glass-effect relative overflow-hidden">
                    <div className="flex gap-6 items-start relative z-10">
                      <div className="flex-shrink-0">
                        <motion.div
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] flex items-center justify-center"
                          whileHover={{ rotate: 180, scale: 1.2 }}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
