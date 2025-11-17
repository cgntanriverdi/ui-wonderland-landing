import { useIsMobile } from "@/hooks/useIsMobile";
import { useMemo } from "react";

export const FloatingParticles = () => {
  const { shouldReduceAnimations } = useIsMobile();

  // Memoize particles to prevent re-renders
  const particles = useMemo(() => {
    // Reduce particle count on mobile
    const count = shouldReduceAnimations ? 5 : 20;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: 14 + Math.random() * 20,
      saturation: 88 - Math.random() * 20,
      lightness: 55 + Math.random() * 10,
    }));
  }, [shouldReduceAnimations]);

  // Skip rendering on very low-power devices
  if (shouldReduceAnimations && particles.length === 5) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle,
              hsl(${particle.color} ${particle.saturation}% ${particle.lightness}% / ${shouldReduceAnimations ? '0.08' : '0.15'}),
              transparent 70%
            )`,
            // Reduce blur on mobile for better performance
            filter: `blur(${shouldReduceAnimations ? '20px' : '40px'})`,
            opacity: shouldReduceAnimations ? 0.3 : 0.4,
          }}
        />
      ))}
    </div>
  );
};
