"use client";

import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}

export const useCountAnimation = ({ 
  end, 
  duration = 2000, 
  delay = 0,
  suffix = '' 
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !animationTriggered.current) {
      animationTriggered.current = true;
      
      // Ajouter un délai si nécessaire
      const timeoutId = setTimeout(() => {
        let startTime: number;
        let animationFrameId: number;

        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          
          // Fonction d'easing pour un effet plus naturel
          const easedProgress = 1 - Math.pow(1 - progress, 3); // Easing cubic out
          
          setCount(Math.floor(easedProgress * end));
          
          if (progress < 1) {
            animationFrameId = requestAnimationFrame(step);
          }
        };
        
        animationFrameId = requestAnimationFrame(step);
        
        return () => {
          cancelAnimationFrame(animationFrameId);
          clearTimeout(timeoutId);
        };
      }, delay);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isVisible, end, duration, delay]);

  return { count, ref, displayValue: `${count}${suffix}` };
};
