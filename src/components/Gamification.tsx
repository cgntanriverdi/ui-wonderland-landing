import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, Target, Award } from "lucide-react";
import gamificationImg from "@/assets/gamification.png";

export const Gamification = () => {
  const levels = [
    { name: "Bronze", color: "bg-amber-700", users: "0-999 puan" },
    { name: "Silver", color: "bg-gray-400", users: "1,000-4,999 puan" },
    { name: "Gold", color: "bg-yellow-500", users: "5,000-19,999 puan" },
    { name: "Platinum", color: "bg-purple-500", users: "20,000+ puan" }
  ];

  const features = [
    {
      icon: Star,
      title: "Restoran Puanları",
      items: [
        "Her ziyarette otomatik puan kazanın",
        "Restorana özel ödüller biriktirin",
        "Ücretsiz yemek ve indirimler kazanın"
      ]
    },
    {
      icon: Zap,
      title: "Süreklilik Bonusu",
      items: [
        "Düzenli ziyaretlerle ekstra puan",
        "Haftalık kazanç bonusları",
        "Özel sadakat ödülleri"
      ]
    },
    {
      icon: Target,
      title: "Keşif Avantajları",
      items: [
        "Yeni restoranları deneyin, 2x puan kazanın",
        "İlk ziyaretlerde özel bonuslar",
        "Arkadaş davet bonusu"
      ]
    },
    {
      icon: Award,
      title: "Görev Sistemi",
      items: [
        "Haftalık görevleri tamamlayın",
        "Özel etkinliklere katılın",
        "Ekstra ödüller kazanın"
      ]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/30 to-background" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="section-title mb-6">
            <span className="gradient-text">Oyunlaştırma</span> ile
            <span className="block mt-2">Her Ziyaret Kazandırır</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seviye atlayın, ödüller kazanın, deneyiminizi maksimize edin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-right">
            <img 
              src={gamificationImg} 
              alt="Gamification System" 
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>

          <div className="space-y-6 animate-slide-left">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift glass-effect"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
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
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Level Sistemi</h3>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {levels.map((level, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover-lift glass-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 rounded-full ${level.color} mx-auto mb-4 flex items-center justify-center`}>
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">{level.name}</h4>
              <Badge variant="secondary" className="text-xs">
                {level.users}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
