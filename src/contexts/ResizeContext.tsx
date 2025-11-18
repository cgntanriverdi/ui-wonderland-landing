import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

interface ResizeContextType {
  isMobile: boolean;
  isResizing: boolean;
  shouldReduceAnimations: boolean;
  viewportWidth: number;
  viewportHeight: number;
}

const ResizeContext = createContext<ResizeContextType>({
  isMobile: false,
  isResizing: false,
  shouldReduceAnimations: false,
  viewportWidth: window.innerWidth,
  viewportHeight: window.innerHeight,
});

export const useResize = () => {
  const context = useContext(ResizeContext);
  if (!context) {
    throw new Error('useResize must be used within ResizeProvider');
  }
  return context;
};

export const ResizeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  // Refs for timers
  const resizeTimerRef = useRef<NodeJS.Timeout>();
  const resizingTimerRef = useRef<NodeJS.Timeout>();
  const rafRef = useRef<number>();

  // Store previous values to prevent unnecessary updates
  const prevValuesRef = useRef({
    mobile: false,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const checkMobile = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const mobile = width < 768;

    // Check if it's actually a mobile device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(userAgent);

    // Combine checks
    const actuallyMobile = mobile && (isTouchDevice || isMobileUA);

    // Only update if values changed
    if (prevValuesRef.current.mobile !== actuallyMobile) {
      setIsMobile(actuallyMobile);
      prevValuesRef.current.mobile = actuallyMobile;
    }

    if (prevValuesRef.current.width !== width) {
      setViewportWidth(width);
      prevValuesRef.current.width = width;
    }

    if (prevValuesRef.current.height !== height) {
      setViewportHeight(height);
      prevValuesRef.current.height = height;
    }
  }, []);

  const handleResize = useCallback(() => {
    // Cancel any pending RAF
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Use RAF to batch updates with browser paint
    rafRef.current = requestAnimationFrame(() => {
      // Set resizing state immediately
      setIsResizing(true);

      // Clear existing timers
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      if (resizingTimerRef.current) {
        clearTimeout(resizingTimerRef.current);
      }

      // Debounced check mobile
      resizeTimerRef.current = setTimeout(() => {
        checkMobile();
      }, 150);

      // Clear resizing state after resize stops
      resizingTimerRef.current = setTimeout(() => {
        setIsResizing(false);
      }, 300);
    });
  }, [checkMobile]);

  useEffect(() => {
    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      if (resizingTimerRef.current) {
        clearTimeout(resizingTimerRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleResize, checkMobile]);

  // Check for low-power mode
  const isLowPower = (() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSlowDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
    const hasLowMemory = (navigator as any).deviceMemory ? (navigator as any).deviceMemory <= 4 : false;
    return prefersReducedMotion || (isSlowDevice && hasLowMemory);
  })();

  const value: ResizeContextType = {
    isMobile,
    isResizing,
    shouldReduceAnimations: isMobile || isLowPower,
    viewportWidth,
    viewportHeight,
  };

  return (
    <ResizeContext.Provider value={value}>
      {children}
    </ResizeContext.Provider>
  );
};