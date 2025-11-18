import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { easing } from "@/lib/animations";
import logo from "@/assets/logo.png";
import { useResize } from "@/contexts/ResizeContext";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { shouldReduceAnimations } = useResize();
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrolled = currentScroll > 50;

      // Only update if crossing the 50px threshold
      if ((lastScrollRef.current <= 50 && currentScroll > 50) ||
          (lastScrollRef.current > 50 && currentScroll <= 50)) {
        setScrolled(isScrolled);
      }

      lastScrollRef.current = currentScroll;
    };

    // Throttled scroll handler
    const throttledHandleScroll = () => {
      if (!scrollTimeoutRef.current) {
        scrollTimeoutRef.current = setTimeout(() => {
          handleScroll();
          scrollTimeoutRef.current = undefined;
        }, 16); // ~60fps
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const navLinks = [
    { href: "#benefits", label: "Avantajlar" },
    { href: "#how-it-works", label: "Nasıl Çalışır" },
    { href: "mailto:afiyetapp@outlook.com?subject=Afiyet Hakkında Bilgi Almak İstiyorum&body=Merhaba,%0D%0A%0D%0AAfiyet hakkında daha fazla bilgi almak istiyorum.", label: "Bize Ulaşın" },
  ];

  const NavComponent = shouldReduceAnimations ? 'nav' : motion.nav;
  const LinkComponent = shouldReduceAnimations ? 'a' : motion.a;
  const DivComponent = shouldReduceAnimations ? 'div' : motion.div;

  return (
    <NavComponent
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "glass-effect shadow-lg py-2" : "bg-transparent py-4"
      }`}
      style={{
        transition: 'padding 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased'
      }}
      {...(!shouldReduceAnimations && {
        initial: { y: -100 },
        animate: { y: 0 },
        transition: { duration: 0.6, ease: easing.apple }
      })}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <DivComponent
          className="flex items-center gap-6"
          {...(!shouldReduceAnimations && {
            whileHover: { scale: 1.05 },
            transition: { duration: 0.2 }
          })}
        >
          <img src={logo} alt="Afiyet" className="h-16 w-auto" loading="lazy" />
          <span className="hidden lg:block text-sm font-semibold tracking-wider uppercase text-accent whitespace-nowrap">
            Restoranlar İçin Komisyonsuz Müşteri Platformu
          </span>
        </DivComponent>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <LinkComponent
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-foreground transition-colors relative"
              {...(!shouldReduceAnimations && {
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: index * 0.1, ease: easing.apple },
                whileHover: { y: -2 }
              })}
            >
              {link.label}
              {!shouldReduceAnimations && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </LinkComponent>
          ))}
        </div>
      </div>
    </NavComponent>
  );
};
