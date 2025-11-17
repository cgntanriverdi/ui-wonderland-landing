import { QrCode, Search } from "lucide-react";
import qrCodeScreen from "@/assets/IMG_5353.jpg";
import restaurantList from "@/assets/IMG_5355.jpg";
import restaurantPanel from "@/assets/IMG_5354.jpg";
import couponVerification from "@/assets/IMG_5356.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { getMobileOptimizedVariant, solutionImageReveal, solutionImageRevealRight, solutionTextReveal, sectionTransition } from "@/lib/animations";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export const Solution = () => {
  const ref = useRef<HTMLElement>(null);
  const { shouldReduceAnimations } = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Disable parallax on mobile
  const backgroundY = useTransform(scrollYProgress, [0, 1], shouldReduceAnimations ? [0, 0] : [0, -50]);
  const orbY = useTransform(scrollYProgress, [0, 1], shouldReduceAnimations ? [0, 0] : [0, 100]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceAnimations ? [1, 1, 1] : [0.8, 1.2, 0.8]);

  // Get mobile-optimized variants
  const optimizedSolutionImageReveal = getMobileOptimizedVariant(solutionImageReveal, shouldReduceAnimations);
  const optimizedSolutionImageRevealRight = getMobileOptimizedVariant(solutionImageRevealRight, shouldReduceAnimations);
  const optimizedSolutionTextReveal = getMobileOptimizedVariant(solutionTextReveal, shouldReduceAnimations);
  const optimizedSectionTransition = getMobileOptimizedVariant(sectionTransition, shouldReduceAnimations);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" id="how-it-works">
      {/* Parallax gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 via-orange-50/30 to-red-50/50"
        style={{ y: backgroundY }}
      />

      {/* Parallax gradient orb - Disabled for mobile */}
      {!shouldReduceAnimations && (
        <motion.div
          className="absolute bottom-20 left-20 w-[600px] h-[600px] rounded-full will-change-transform"
          style={{
            background: 'radial-gradient(circle, hsl(25 95% 53% / 0.15), transparent 70%)',
            filter: 'blur(80px)',
            y: orbY,
            scale: orbScale,
          }}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with reveal */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={optimizedSectionTransition}
        >
          <h2 className="section-title mb-6">
            Nasıl Çalışır?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Müşteriler uygulamayı kullanarak restoranlarınızı keşfeder ve kampanyalarınızdan faydalanır
          </p>
        </motion.div>

        {/* Kullanıcı Akışı - 1. Keşfet */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={optimizedSolutionImageReveal}
          >
            {!shouldReduceAnimations && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] blur-3xl opacity-20 rounded-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
            <motion.img
              src={qrCodeScreen}
              alt="Afiyet Restoran Listesi - Müşteri Uygulaması"
              className="relative w-full h-auto rounded-3xl shadow-2xl will-change-transform"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={optimizedSectionTransition}
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              variants={optimizedSolutionTextReveal}
              custom={0}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-accent">ADIM 1</div>
            </motion.div>
            <motion.h3
              className="text-4xl font-bold"
              variants={optimizedSolutionTextReveal}
              custom={1}
            >
              Yakındaki Restoranları Keşfedin
            </motion.h3>
            <motion.p
              className="text-xl text-muted-foreground"
              variants={optimizedSolutionTextReveal}
              custom={2}
            >
              Müşteriler telefon numarası ile ücretsiz kayıt olur. Uygulamadan yakınlarındaki restoranları keşfedebilir, kampanyaları görüntüleyebilir ve favori restoranlarını takip edebilir. Konum bazlı filtreleme ile en yakın fırsatları bulun.
            </motion.p>
            <motion.ul
              className="space-y-3 text-muted-foreground"
              variants={optimizedSolutionTextReveal}
              custom={3}
            >
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Ücretsiz telefon numarası ile kayıt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Konum bazlı restoran listesi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Popülerlik ve mesafe filtreleme</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Canlı kampanya görüntüleme</span>
              </li>
            </motion.ul>
          </motion.div>
        </div>

        {/* Kullanıcı Akışı - 2. QR Kod ile Kullanım */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={optimizedSectionTransition}
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              variants={optimizedSolutionTextReveal}
              custom={0}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-accent">ADIM 2</div>
            </motion.div>
            <motion.h3
              className="text-4xl font-bold"
              variants={optimizedSolutionTextReveal}
              custom={1}
            >
              Fırsat Kullanımı
            </motion.h3>
            <motion.p
              className="text-xl text-muted-foreground"
              variants={optimizedSolutionTextReveal}
              custom={2}
            >
              Müşteriler seçtikleri kampanyaya göre uygulamadan QR kod oluşturur. Restoranınızda QR kodu okutarak anında doğrulayın. 5 dakikalık zamanlayıcı ile güvenli ve hızlı işlem. Her kullanımda otomatik puan kazanımı.
            </motion.p>
            <motion.ul
              className="space-y-3 text-muted-foreground"
              variants={optimizedSolutionTextReveal}
              custom={3}
            >
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Kampanyaya göre QR kod oluşturma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>5 dakikalık zamanlayıcı ile güvenli kullanım</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Restoran panelinden tek tıkla doğrulama</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Otomatik puan kazanımı</span>
              </li>
            </motion.ul>
          </motion.div>
          <motion.div
            className="relative order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={optimizedSolutionImageRevealRight}
          >
            {!shouldReduceAnimations && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] blur-3xl opacity-20 rounded-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            )}
            <motion.img
              src={restaurantList}
              alt="Afiyet QR Kod - Fırsat Kullanımı"
              className="relative w-full h-auto rounded-3xl shadow-2xl will-change-transform"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>

        {/* Kullanıcı Akışı - 3. Kupon Doğrulama */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={optimizedSolutionImageReveal}
          >
            {!shouldReduceAnimations && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] blur-3xl opacity-20 rounded-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            )}
            <motion.img
              src={couponVerification}
              alt="Afiyet Kupon Doğrulama - Restoran Paneli"
              className="relative w-full h-auto rounded-3xl shadow-2xl will-change-transform"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={optimizedSectionTransition}
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              variants={optimizedSolutionTextReveal}
              custom={0}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-accent">ADIM 3</div>
            </motion.div>
            <motion.h3
              className="text-4xl font-bold"
              variants={optimizedSolutionTextReveal}
              custom={1}
            >
              Kupon Doğrulama
            </motion.h3>
            <motion.p
              className="text-xl text-muted-foreground"
              variants={optimizedSolutionTextReveal}
              custom={2}
            >
              Restoran panelinizden "Tara" özelliğini kullanarak müşterinin QR kodunu okutun. Anında doğrulama yapılır ve kupon güvenilir bir şekilde kullanılmış olur. Ekstra cihaz gerektirmez.
            </motion.p>
            <motion.ul
              className="space-y-3 text-muted-foreground"
              variants={optimizedSolutionTextReveal}
              custom={3}
            >
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Restoran panelinden QR kod okutma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Anında doğrulama ve onay</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Güvenilir kupon kullanımı takibi</span>
              </li>
            </motion.ul>
          </motion.div>
        </div>

        {/* Restoran Paneli - Kampanya Yönetimi */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={optimizedSolutionImageReveal}
          >
            {!shouldReduceAnimations && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] blur-3xl opacity-20 rounded-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            )}
            <motion.img
              src={restaurantPanel}
              alt="Afiyet Restoran Paneli - Kampanya Yönetimi"
              className="relative w-full h-auto rounded-3xl shadow-2xl will-change-transform"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={optimizedSectionTransition}
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              variants={optimizedSolutionTextReveal}
              custom={0}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-accent">RESTORAN PANELİ</div>
            </motion.div>
            <motion.h3
              className="text-4xl font-bold"
              variants={optimizedSolutionTextReveal}
              custom={1}
            >
              Kampanya Yönetimi Paneli
            </motion.h3>
            <motion.p
              className="text-xl text-muted-foreground"
              variants={optimizedSolutionTextReveal}
              custom={2}
            >
              Kart tabanlı basit arayüzle kampanyalarınızı kolayca oluşturun ve yönetin. Ürün görselleri, fiyatlar ve geçerlilik kurallarını tek bir ekrandan belirleyin. Teknik bilgi gerektirmez.
            </motion.p>
            <motion.ul
              className="space-y-3 text-muted-foreground"
              variants={optimizedSolutionTextReveal}
              custom={3}
            >
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Kampanya başlığı ve açıklama ekleme</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>İndirimli fiyat belirleme</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Ürün fotoğrafı yükleme</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Anında yayınlama</span>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
