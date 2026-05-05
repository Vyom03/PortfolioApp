import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './AnimatedSection.css';

/**
 * Wrapper component that adds scroll animations to its children
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.animationType - 'fade', 'slide-up', 'slide-left', 'slide-right', 'scale'
 * @param {number} props.delay - Animation delay in milliseconds
 * @param {number} props.threshold - Intersection threshold (0-1)
 * @param {boolean} props.triggerOnce - Whether to animate only once
 * @param {string} props.className - Additional CSS classes
 */
function AnimatedSection({
  children,
  animationType = 'fade',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = ''
}) {
  const [ref, isVisible] = useScrollAnimation({
    threshold,
    animationType,
    delay,
    triggerOnce
  });

  return (
    <div
      ref={ref}
      className={`animated-section ${animationType} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;

