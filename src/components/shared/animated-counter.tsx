"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: true,
  });
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    if (isIntersecting) {
      animate();
    }
  }, [isIntersecting, animate]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <span className="text-5xl md:text-6xl font-extrabold text-primary tabular-nums">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="block text-on-surface font-medium uppercase tracking-widest text-sm mt-2">
        {label}
      </span>
    </div>
  );
}
