"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { ExternalLink } from "lucide-react";

export interface CarouselProject {
  id: number | string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  gradient?: string;
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
import type { Transition } from "motion/react";

const SPRING_OPTIONS: Transition = { type: "spring", stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselProject;
  index: number;
  itemWidth: number;
  trackItemOffset: number;
  x: ReturnType<typeof useMotionValue<number>>;
  transition: Transition;
}

function CarouselItem({ item, index, itemWidth, trackItemOffset, x, transition }: CarouselItemProps) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const rotateY = useTransform(x, range, [90, 0, -90], { clamp: false });

  return (
    <motion.div
      className="carousel-item"
      style={{ width: itemWidth, rotateY }}
      transition={transition}
    >
      {/* Gradient accent strip */}
      <div className={`w-full h-1.5 bg-gradient-to-r ${item.gradient ?? "from-primary to-purple-400"} flex-shrink-0`} />

      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-card-foreground text-sm leading-snug">
          {item.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed flex-1">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View on GitHub <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}

interface CarouselProps {
  items: CarouselProject[];
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
}

export function Carousel({ items, autoplay = false, autoplayDelay = 3000, pauseOnHover = true, loop = true }: CarouselProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [baseWidth, setBaseWidth] = useState(0);

  // Measure synchronously before first paint to avoid layout flash
  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (el) setBaseWidth(el.offsetWidth);
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setBaseWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop || items.length === 0) return items;
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;
    const el = containerRef.current;
    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); };
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1 || (pauseOnHover && isHovered)) return;
    const timer = setInterval(() => setPosition((p) => Math.min(p + 1, itemsForRender.length - 1)), autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    x.set(-(loop ? 1 : 0) * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  const effectiveTransition: Transition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) { setIsAnimating(false); return; }
    const last = itemsForRender.length - 1;
    if (position === last) {
      setIsJumping(true);
      setPosition(1);
      x.set(-1 * trackItemOffset);
      requestAnimationFrame(() => { setIsJumping(false); setIsAnimating(false); });
      return;
    }
    if (position === 0) {
      setIsJumping(true);
      const t = items.length;
      setPosition(t);
      x.set(-t * trackItemOffset);
      requestAnimationFrame(() => { setIsJumping(false); setIsAnimating(false); });
      return;
    }
    setIsAnimating(false);
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const { offset, velocity } = info;
    const dir = offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD ? 1
      : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD ? -1 : 0;
    if (!dir) return;
    setPosition((p) => Math.max(0, Math.min(p + dir, itemsForRender.length - 1)));
  };

  const dragProps = loop ? {} : {
    dragConstraints: { left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0), right: 0 },
  };

  const activeIndex = items.length === 0 ? 0 : loop
    ? (position - 1 + items.length) % items.length
    : Math.min(position, items.length - 1);

  return (
    <div ref={wrapperRef} className="w-full">
      <div
        ref={containerRef}
        className="carousel-container"
      >
        <motion.div
          className="carousel-track"
          drag={isAnimating ? false : "x"}
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(position * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={handleAnimationComplete}
        >
          {itemsForRender.map((item, index) => (
            <CarouselItem
              key={`${String(item.id)}-${index}`}
              item={item}
              index={index}
              itemWidth={itemWidth}
              trackItemOffset={trackItemOffset}
              x={x}
              transition={effectiveTransition}
            />
          ))}
        </motion.div>

        <div className="carousel-indicators-container">
          <div className="carousel-indicators">
            {items.map((_, i) => (
              <motion.div
                key={i}
                className={`carousel-indicator ${activeIndex === i ? "active" : "inactive"}`}
                animate={{ scale: activeIndex === i ? 1.2 : 1 }}
                onClick={() => setPosition(loop ? i + 1 : i)}
                transition={{ duration: 0.15 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
