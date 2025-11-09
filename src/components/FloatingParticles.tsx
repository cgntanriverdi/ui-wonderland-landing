export const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle,
              hsl(${14 + Math.random() * 20} ${88 - Math.random() * 20}% ${55 + Math.random() * 10}% / 0.15),
              transparent 70%
            )`,
            filter: "blur(40px)",
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
};
