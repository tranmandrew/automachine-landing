'use client';

import { useEffect, useState, useRef } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function FadeInSection({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';

    switch (direction) {
      case 'up': return 'translate3d(0, 50px, 0)';
      case 'down': return 'translate3d(0, -50px, 0)';
      case 'left': return 'translate3d(50px, 0, 0)';
      case 'right': return 'translate3d(-50px, 0, 0)';
      default: return 'translate3d(0, 50px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}