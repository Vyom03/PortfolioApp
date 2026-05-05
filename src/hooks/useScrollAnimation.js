import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.animationType - 'fade', 'slide-up', 'slide-left', 'slide-right', 'scale'
 * @param {number} options.delay - Animation delay in milliseconds
 * @param {boolean} options.triggerOnce - Whether to animate only once
 * @returns {Array} [ref, isVisible]
 */
export const useScrollAnimation = ({
  threshold = 0.05,
  animationType = 'fade',
  delay = 0,
  triggerOnce = true
} = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If already animated and triggerOnce is true, don't observe again
    if (hasAnimated && triggerOnce) {
      setIsVisible(true);
      return;
    }

    // Check if element is already in viewport on mount
    const checkInitialVisibility = () => {
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight + 200 && rect.bottom > -200;
      if (isInViewport && !hasAnimated) {
        setTimeout(() => {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }
        }, delay);
        return true;
      }
      return false;
    };

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // If already visible, don't set up observer
    if (checkInitialVisibility() && triggerOnce) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                setHasAnimated(true);
              }
            }, delay);

            if (triggerOnce) {
              observerRef.current?.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '150px 0px -50px 0px' // Trigger much earlier - 150px before element enters viewport
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, delay, triggerOnce, hasAnimated]);

  return [elementRef, isVisible];
};

