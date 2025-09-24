'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedMetricProps {
  value: string;
  label: string;
  duration?: number;
}

export default function AnimatedMetric({ value, label, duration = 2000 }: AnimatedMetricProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric part and suffix from value
    const numericMatch = value.match(/(\d+)(.*)$/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numericMatch[1]);
    const suffix = numericMatch[2];

    let startValue = 0;
    const increment = targetNum / (duration / 60); // Reduced frequency from 50ms to 60ms
    let animationId: NodeJS.Timeout;

    const animate = () => {
      startValue += increment;

      if (startValue >= targetNum) {
        setDisplayValue(value);
      } else {
        setDisplayValue(`${Math.floor(startValue)}${suffix}`);
        animationId = setTimeout(animate, 60); // Use setTimeout instead of setInterval for better cleanup
      }
    };

    animationId = setTimeout(animate, 60);

    return () => {
      if (animationId) {
        clearTimeout(animationId);
      }
    };
  }, [isVisible, value, duration]);

  return (
    <div
      ref={ref}
      className={`metric-item transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="metric-value text-emerald-lake">{displayValue}</div>
      <div className="metric-label">{label}</div>
    </div>
  );
}