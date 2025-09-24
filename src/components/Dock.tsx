'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence
} from 'motion/react';
import React, { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';

import './Dock.css';

export type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  mouseX: MotionValue;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
};

function DockItem({
  children,
  className = '',
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    if (!ref.current || val === Infinity) return 0;
    const rect = ref.current.getBoundingClientRect();
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        {Children.map(children, (child, index) => {
          if (index === 0) { // Icon
            return cloneElement(child as React.ReactElement, { key: index });
          }
          if (index === 1) { // Label - show inline instead of as tooltip
            return (
              <span className="text-white text-xs font-semibold" key={index}>
                {(child as React.ReactElement<{ children: React.ReactNode }>).props.children}
              </span>
            );
          }
          return child;
        })}
      </div>
    </motion.div>
  );
}

type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

function DockLabel({ children, className = '', ...rest }: DockLabelProps) {
  const { isHovered } = rest as { isHovered: MotionValue<number> };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => {
      unsubscribe();
    };
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

function DockIcon({ children, className = '' }: DockIconProps) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  // Initial expansion animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 500); // Delay to let page load first

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div style={{ height, scrollbarWidth: 'none' }} className="dock-outer">
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        style={{
          height: panelHeight,
          transformOrigin: 'center center'
        }}
        role="toolbar"
        aria-label="Application dock"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: hasAnimated ? 1 : 0,
          opacity: hasAnimated ? 1 : 0
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: hasAnimated ? 1 : 0,
              opacity: hasAnimated ? 1 : 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.6 + (index * 0.1),
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <DockItem
              onClick={item.onClick}
              className={item.className}
              mouseX={mouseX}
              spring={spring}
              distance={distance}
              magnification={magnification}
              baseItemSize={baseItemSize}
            >
              <DockIcon>{item.icon}</DockIcon>
              <DockLabel>{item.label}</DockLabel>
            </DockItem>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
