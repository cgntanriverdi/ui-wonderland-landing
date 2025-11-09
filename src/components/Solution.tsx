import { Card } from "@/components/ui/card";
import { Map, QrCode, Trophy, Gift } from "lucide-react";
import foodCollage from "@/assets/food-collage.png";

export const Solution = () => {
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
    <section className="py-32 bg-background" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="section-title mb-6">
            Sadakat Programları
            <span className="block mt-2">Artık <span className="gradient-text">Çok Kolay</span></span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Her restoranınızdan puan kazanın, bir arada yönetin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="animate-slide-right">
            <img 
              src={foodCollage} 
              alt="Restaurant Foods" 
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>

          <div className="space-y-8 animate-slide-left">
            <h3 className="text-4xl font-bold">Nasıl Çalışır?</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card 
                  key={index}
                  className="p-6 hover-lift glass-effect"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accent mb-1">ADIM {index + 1}</div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
