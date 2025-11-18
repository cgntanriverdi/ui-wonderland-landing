import { useState, useEffect, useRef, useCallback } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  // Store timer in ref to persist across renders
  const resizeTimerRef = useRef<NodeJS.Timeout>();

  // Store previous values to prevent unnecessary re-renders
  const prevValuesRef = useRef({ mobile: false, lowPower: false });

  const checkMobile = useCallback(() => {
    // Multi-layered mobile detection
    const screenWidth = window.innerWidth < 768;

    // Check if it's actually a mobile device (not just a small desktop window)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Check user agent for mobile indicators
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i;
    const isMobileUA = mobileKeywords.test(userAgent);

    // Check for mobile-specific APIs
    const hasOrientationAPI = 'orientation' in window || 'onorientationchange' in window;

    // Combine checks: Must have small screen AND be a touch device OR have mobile UA
    const mobile = screenWidth && (isTouchDevice || isMobileUA || hasOrientationAPI);

    // Check for low-power mode or reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // More aggressive performance check for weak devices
    const isSlowDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
    const hasLowMemory = (navigator as any).deviceMemory ? (navigator as any).deviceMemory <= 4 : false;

    const lowPower = prefersReducedMotion || (isSlowDevice && hasLowMemory);

    // Only update state if values actually changed
    if (prevValuesRef.current.mobile !== mobile) {
      setIsMobile(mobile);
      prevValuesRef.current.mobile = mobile;
    }

    if (prevValuesRef.current.lowPower !== lowPower) {
      setIsLowPower(lowPower);
      prevValuesRef.current.lowPower = lowPower;
    }
  }, []);

  useEffect(() => {
    checkMobile();

    // Debounced resize handler to prevent jitter
    const debouncedCheckMobile = () => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      resizeTimerRef.current = setTimeout(checkMobile, 150);
    };

    // Listen to both resize and orientation changes
    window.addEventListener('resize', debouncedCheckMobile);
    window.addEventListener('orientationchange', checkMobile);

    return () => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      window.removeEventListener('resize', debouncedCheckMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, [checkMobile]);

  return {
    isMobile,
    isLowPower,
    shouldReduceAnimations: isMobile || isLowPower
  };
};
