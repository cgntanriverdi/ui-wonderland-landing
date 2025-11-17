import { Variants } from "framer-motion";

// Apple-style easing functions
export const easing = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  easeOut: [0.16, 1, 0.3, 1],
  easeIn: [0.87, 0, 0.13, 1],
  apple: [0.4, 0.0, 0.2, 1], // Apple's signature bezier curve
  appleSpring: [0.25, 0.1, 0.25, 1],
};

// Mobile-optimized animation utilities
export const getMobileOptimizedVariant = (
  desktopVariant: Variants,
  isMobile: boolean
): Variants => {
  if (!isMobile) return desktopVariant;

  // Reduce animation complexity for mobile
  const optimized: Variants = {};

  Object.keys(desktopVariant).forEach((key) => {
    const variant = desktopVariant[key];
    if (typeof variant === 'object' && variant !== null) {
      optimized[key] = {
        ...variant,
        // Remove expensive transforms
        rotateX: undefined,
        rotateY: undefined,
        filter: undefined,
        clipPath: undefined,
        // Reduce movement distance
        x: variant.x ? (typeof variant.x === 'number' ? variant.x * 0.5 : variant.x) : variant.x,
        y: variant.y ? (typeof variant.y === 'number' ? variant.y * 0.5 : variant.y) : variant.y,
        // Faster transitions
        transition: variant.transition ? {
          ...variant.transition,
          duration: typeof variant.transition.duration === 'number'
            ? variant.transition.duration * 0.7
            : variant.transition.duration,
        } : variant.transition,
      };
    } else {
      optimized[key] = variant;
    }
  });

  return optimized;
};

// Story-driven scroll animations - Progressive reveal system

// Chapter 1: Introduction (Hero) - Problem reveal
export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: easing.apple,
    },
  },
};

export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: easing.apple,
    },
  },
};

// Chapter 2: Development (Benefits) - Solution emergence
export const benefitsContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const benefitCard: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: -15,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: easing.apple,
    },
  },
};

// Chapter 3: How it works (Solution) - Story progression
export const solutionImageReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -120,
    scale: 0.8,
    rotateY: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1.2,
      ease: easing.apple,
    },
  },
};

export const solutionImageRevealRight: Variants = {
  hidden: {
    opacity: 0,
    x: 120,
    scale: 0.8,
    rotateY: 25,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1.2,
      ease: easing.apple,
    },
  },
};

export const solutionTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: index * 0.1,
      ease: easing.apple,
    },
  }),
};

// Chapter 4: Conclusion (CTA) - Final reveal
export const ctaReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: easing.apple,
    },
  },
};

// Scroll-triggered progressive reveals
export const progressiveReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.4,
      ease: easing.apple,
    },
  },
};

// Parallax layers
export const parallaxSlow: Variants = {
  hidden: { y: 0 },
  visible: { y: -50 },
};

export const parallaxMedium: Variants = {
  hidden: { y: 0 },
  visible: { y: -30 },
};

export const parallaxFast: Variants = {
  hidden: { y: 0 },
  visible: { y: -10 },
};

// Interconnected section transitions
export const sectionTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: easing.apple,
    },
  },
};

// Legacy animations (keeping for compatibility)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing.apple,
    },
  },
};

export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easing.apple,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easing.apple,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easing.apple,
    },
  },
};

export const zoomIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: easing.apple,
    },
  },
};

export const letterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const parallaxContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing.smooth,
    },
  },
};

export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: easing.easeOut,
  },
};

export const buttonTap = {
  scale: 0.95,
};

export const cardHover = {
  y: -10,
  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
  transition: {
    duration: 0.4,
    ease: easing.easeOut,
  },
};

export const magneticVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 0, y: 0 },
};
