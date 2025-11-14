import { Card } from "@/components/ui/card";
import { Check, Shield, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const Benefits = () => {

  const benefits = [
    {
      icon: Zap,
      title: "Komisyon Ödemekten Kurtulun",
      description: "Paket servis uygulamalarına %30-40 ödemek yerine sabit aylık ücret ödeyin. İster 100, ister 10,000 müşteri olsun fiyat aynı",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Sparkles,
      title: "Müşteriler Mekana Gelsin",
      description: "Kampanyalar ve özel indirimlerle müşterileri restoranınıza çağırın. Restoranlar ortalama %35 daha fazla ziyaret görüyor",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Check,
      title: "Müşteriler Tekrar Gelsin",
      description: "Puan topla, seviye atla, ödül kazan sistemi ile müşteriler sürekli geri gelir. Müşteri bağlılığı 2.5 kat artıyor",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Müşteri Verileriniz Size Ait",
      description: "Müşterilerinizin telefon numaraları, siparişleri, tercihleri sizde kalıyor. Başka platformlara bağımlı değilsiniz",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden" id="benefits">
      {/* Static background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-red-50/30 to-yellow-50/50" />

      {/* Static gradient orb */}
      <div
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(14 88% 55% / 0.15), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title mb-6">
            Neden
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)]">
              Afiyet?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Daha az masraf, daha fazla müşteri, daha çok kazanç
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
              <Card className="p-8 text-center glass-effect h-full relative overflow-hidden">
                {/* Static gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color.replace('from-', 'hsl(var(--')}, ${benefit.color.replace('to-', 'hsl(var(--')})`,
                  }}
                />
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} mx-auto mb-6 flex items-center justify-center relative z-10`}
                  whileHover={{ scale: 1.2, rotate: 180 }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{benefit.title}</h3>
                <p className="text-muted-foreground relative z-10">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
