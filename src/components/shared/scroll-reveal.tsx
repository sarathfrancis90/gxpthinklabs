"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

const directionStyles: Record<string, { hidden: string; visible: string }> = {
  up: {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  left: {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  right: {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  none: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay before revealing
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay * 1000);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const styles = directionStyles[direction] || directionStyles.up;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible ? styles.visible : styles.hidden,
        className
      )}
      style={{ transitionDuration: `${duration}s`, transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      {children}
    </div>
  );
}
