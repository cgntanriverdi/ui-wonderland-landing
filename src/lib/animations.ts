import { Variants } from "framer-motion";

// Apple-style easing functions
export const easing = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  easeOut: [0.16, 1, 0.3, 1],
  easeIn: [0.87, 0, 0.13, 1],
  apple: [0.4, 0.0, 0.2, 1], // Apple's signature bezier curve
};

// Fade in from bottom (Apple-style)
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

// Fade in with scale
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

// Stagger children animations
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

// Slide in from left
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

// Slide in from right
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

// Zoom in effect
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

// Letter by letter reveal (for headlines)
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

// Parallax container
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

// Button hover animations
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

// Card hover effect
export const cardHover = {
  y: -10,
  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
  transition: {
    duration: 0.4,
    ease: easing.easeOut,
  },
};

// Magnetic effect for buttons
export const magneticVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 0, y: 0 },
};
