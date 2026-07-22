"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import * as React from "react";

const REVEAL_EASE = [0.16, 1, 0.3, 1] as const;
const POINTER_FINE_QUERY =
  "(hover: hover) and (pointer: fine) and (min-width: 768px)";

export interface RevealProps
  extends Omit<
    HTMLMotionProps<"div">,
    "initial" | "transition" | "viewport" | "whileInView"
  > {
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

/**
 * Progressive section reveal. `initial={false}` keeps the server-rendered
 * content visible when JavaScript is unavailable or still hydrating.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 18,
  duration = 0.6,
  once = true,
  amount = 0.25,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={false}
      whileInView={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: [0, 1], y: [distance, 0] }
      }
      viewport={{ once, amount }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { delay, duration, ease: REVEAL_EASE }
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface ScrollProgressProps
  extends Omit<HTMLMotionProps<"div">, "children" | "style"> {
  springStiffness?: number;
  springDamping?: number;
}

/** A composited, decorative reading-progress indicator. */
export function ScrollProgress({
  className,
  springStiffness = 130,
  springDamping = 28,
  ...props
}: ScrollProgressProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: springStiffness,
    damping: springDamping,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      initial={false}
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-signal",
        className,
      )}
      style={{
        scaleX: shouldReduceMotion ? scrollYProgress : smoothProgress,
        transformOrigin: "0% 50%",
      }}
      {...props}
    />
  );
}

export interface CursorGlowProps
  extends Omit<HTMLMotionProps<"div">, "children" | "style"> {
  size?: number;
  color?: string;
  style?: HTMLMotionProps<"div">["style"];
}

/**
 * Pointer-following ambient light. It only subscribes to pointer events on
 * desktop-class, fine-pointer devices and remains inert for reduced motion.
 */
export function CursorGlow({
  className,
  size = 360,
  color = "rgba(251, 146, 60, 0.16)",
  style,
  ...props
}: CursorGlowProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const rawX = useMotionValue(-size);
  const rawY = useMotionValue(-size);
  const rawOpacity = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 150, damping: 26, mass: 0.35 });
  const y = useSpring(rawY, { stiffness: 150, damping: 26, mass: 0.35 });
  const opacity = useSpring(rawOpacity, { stiffness: 180, damping: 24 });

  React.useEffect(() => {
    rawOpacity.set(0);

    if (shouldReduceMotion) return;

    const pointerQuery = window.matchMedia(POINTER_FINE_QUERY);

    const handlePointerMove = (event: PointerEvent) => {
      rawX.set(event.clientX - size / 2);
      rawY.set(event.clientY - size / 2);
      rawOpacity.set(1);
    };

    const hideGlow = () => rawOpacity.set(0);

    const syncListeners = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", hideGlow);
      window.removeEventListener("blur", hideGlow);

      if (pointerQuery.matches) {
        window.addEventListener("pointermove", handlePointerMove, {
          passive: true,
        });
        window.addEventListener("pointerleave", hideGlow);
        window.addEventListener("blur", hideGlow);
      } else {
        hideGlow();
      }
    };

    syncListeners();
    pointerQuery.addEventListener("change", syncListeners);

    return () => {
      pointerQuery.removeEventListener("change", syncListeners);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", hideGlow);
      window.removeEventListener("blur", hideGlow);
    };
  }, [rawOpacity, rawX, rawY, shouldReduceMotion, size]);

  return (
    <motion.div
      aria-hidden="true"
      initial={false}
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-0 hidden rounded-full md:block",
        className,
      )}
      style={{
        ...style,
        width: size,
        height: size,
        x,
        y,
        opacity,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      {...props}
    />
  );
}

export interface MagneticLinkProps
  extends Omit<HTMLMotionProps<"a">, "href"> {
  href: string;
  strength?: number;
}

/** Accessible anchor with a small, pointer-only attraction effect. */
export const MagneticLink = React.forwardRef<
  HTMLAnchorElement,
  MagneticLinkProps
>(
  (
    {
      children,
      className,
      href,
      onBlur,
      onPointerLeave,
      onPointerMove,
      rel,
      strength = 8,
      style,
      target,
      ...props
    },
    forwardedRef,
  ) => {
    const shouldReduceMotion = useReducedMotion() ?? false;
    const [canMagnetize, setCanMagnetize] = React.useState(false);
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const x = useSpring(rawX, { stiffness: 260, damping: 20, mass: 0.25 });
    const y = useSpring(rawY, { stiffness: 260, damping: 20, mass: 0.25 });

    React.useEffect(() => {
      const pointerQuery = window.matchMedia(POINTER_FINE_QUERY);
      const syncPointer = () => setCanMagnetize(pointerQuery.matches);

      syncPointer();
      pointerQuery.addEventListener("change", syncPointer);

      return () => pointerQuery.removeEventListener("change", syncPointer);
    }, []);

    const setRefs = React.useCallback(
      (node: HTMLAnchorElement | null) => {
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef],
    );

    const resetPosition = () => {
      rawX.set(0);
      rawY.set(0);
    };

    const handlePointerMove = (
      event: React.PointerEvent<HTMLAnchorElement>,
    ) => {
      onPointerMove?.(event);

      if (
        event.defaultPrevented ||
        shouldReduceMotion ||
        !canMagnetize ||
        event.pointerType !== "mouse"
      ) {
        return;
      }

      const bounds = event.currentTarget.getBoundingClientRect();
      const offsetX =
        ((event.clientX - bounds.left) / bounds.width - 0.5) * strength * 2;
      const offsetY =
        ((event.clientY - bounds.top) / bounds.height - 0.5) * strength * 2;

      rawX.set(offsetX);
      rawY.set(offsetY);
    };

    const handlePointerLeave = (
      event: React.PointerEvent<HTMLAnchorElement>,
    ) => {
      onPointerLeave?.(event);
      resetPosition();
    };

    const handleBlur = (event: React.FocusEvent<HTMLAnchorElement>) => {
      onBlur?.(event);
      resetPosition();
    };

    return (
      <motion.a
        ref={setRefs}
        href={href}
        target={target}
        rel={target === "_blank" ? rel ?? "noopener noreferrer" : rel}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onBlur={handleBlur}
        className={cn(
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
          className,
        )}
        style={{
          ...style,
          x: shouldReduceMotion ? 0 : x,
          y: shouldReduceMotion ? 0 : y,
        }}
        {...props}
      >
        {children}
      </motion.a>
    );
  },
);

MagneticLink.displayName = "MagneticLink";
