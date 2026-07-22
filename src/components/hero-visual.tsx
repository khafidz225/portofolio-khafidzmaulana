"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import * as React from "react";

const POINTER_FINE_QUERY =
  "(hover: hover) and (pointer: fine) and (min-width: 768px)";

export interface HeroVisualProps {
  className?: string;
}

const BUILD_LAYERS = [
  { index: "01", label: "Interface", detail: "Flutter UI" },
  { index: "02", label: "App state", detail: "Riverpod / BLoC" },
  { index: "03", label: "Data flow", detail: "Offline to server" },
] as const;

/**
 * A compact map of the layers behind Khafidz's mobile work. Pointer movement
 * separates the device from its system layers, while the sync rail explains
 * how local data moves to the server. Both effects stop for reduced motion.
 */
export function HeroVisual({ className }: HeroVisualProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [canParallax, setCanParallax] = React.useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const deviceX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 24,
    mass: 0.35,
  });
  const deviceY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 24,
    mass: 0.35,
  });
  const deviceRotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [2.2, -2.2]),
    { stiffness: 150, damping: 24, mass: 0.35 },
  );
  const deviceRotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-2.8, 2.8]),
    { stiffness: 150, damping: 24, mass: 0.35 },
  );
  const layerX = useSpring(useTransform(pointerX, [-0.5, 0.5], [5, -5]), {
    stiffness: 120,
    damping: 26,
  });
  const layerY = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), {
    stiffness: 120,
    damping: 26,
  });

  React.useEffect(() => {
    const pointerQuery = window.matchMedia(POINTER_FINE_QUERY);
    const syncPointer = () => setCanParallax(pointerQuery.matches);

    syncPointer();
    pointerQuery.addEventListener("change", syncPointer);

    return () => pointerQuery.removeEventListener("change", syncPointer);
  }, []);

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (
      shouldReduceMotion ||
      !canParallax ||
      event.pointerType !== "mouse"
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  return (
    <figure
      role="img"
      aria-label="A mobile system map showing a Flutter interface, application state, and an offline-to-server data flow."
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className={cn(
        "relative isolate mx-auto min-h-[430px] w-full max-w-[31rem] overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-[0_35px_100px_rgba(0,0,0,0.42)] sm:min-h-[520px]",
        className,
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-55"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to bottom, black, transparent 94%)",
          }}
        />
        <div className="absolute -bottom-28 -left-20 size-80 rounded-full bg-signal/[0.16] blur-3xl" />
        <div className="absolute right-4 top-20 font-display text-[9rem] font-semibold leading-none tracking-[-0.09em] text-white/[0.025] sm:text-[12rem]">
          01
        </div>

        <header className="absolute inset-x-5 top-5 z-20 flex items-center justify-between sm:inset-x-7 sm:top-7">
          <p className="flex items-center gap-2 font-mono text-[9px] font-medium uppercase tracking-[0.24em] text-neutral-400 sm:text-[10px]">
            <span className="size-1.5 rounded-full bg-signal shadow-[0_0_16px_hsl(var(--signal)/0.8)]" />
            Mobile build
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600 sm:text-[10px]">
            Flutter / 01
          </p>
        </header>

        <svg
          viewBox="0 0 480 520"
          className="absolute inset-0 size-full text-signal/[0.35]"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M230 190 C285 190 286 218 340 218"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 7"
          />
          <path
            d="M230 260 C285 260 286 282 340 282"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 7"
          />
          <path
            d="M230 330 C285 330 286 346 340 346"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 7"
          />
        </svg>

        <div className="absolute bottom-[16%] left-[7%] top-[15%] w-[55%] max-w-[15rem]">
          <motion.div
            initial={false}
            className="size-full"
            style={{
              x: shouldReduceMotion ? 0 : deviceX,
              y: shouldReduceMotion ? 0 : deviceY,
              rotateX: shouldReduceMotion ? 0 : deviceRotateX,
              rotateY: shouldReduceMotion ? 0 : deviceRotateY,
              transformPerspective: 900,
            }}
          >
            <div className="relative size-full rounded-[2.25rem] border border-white/20 bg-neutral-900 p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.62),0_0_55px_hsl(var(--signal)/0.08)] sm:p-2">
              <div className="absolute left-1/2 top-2 z-10 h-3 w-14 -translate-x-1/2 rounded-full bg-black sm:h-4 sm:w-20" />
              <div className="flex size-full flex-col overflow-hidden rounded-[1.9rem] border border-white/[0.06] bg-neutral-950 px-3 pb-3 pt-7 sm:px-4 sm:pb-4 sm:pt-10">
                <div className="flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.16em] text-neutral-600 sm:text-[9px]">
                  <span>Mobile system</span>
                  <span className="text-signal">Active</span>
                </div>

                <div className="mt-5 sm:mt-7">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-signal sm:text-[10px]">
                    Built with
                  </p>
                  <p className="mt-1 font-display text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                    Flutter
                  </p>
                </div>

                <div className="mt-5 space-y-2 sm:mt-7 sm:space-y-2.5">
                  <div className="h-16 rounded-xl border border-white/[0.07] bg-white/[0.035] p-3 sm:h-20 sm:rounded-2xl sm:p-4">
                    <div className="h-1.5 w-10 rounded-full bg-signal/70" />
                    <div className="mt-2 h-1.5 w-4/5 rounded-full bg-white/10" />
                    <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-white/[0.07]" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 rounded-xl border border-white/[0.07] bg-white/[0.035] p-2.5 sm:h-16 sm:p-3">
                      <div className="size-2 rounded-full bg-signal/70" />
                      <div className="mt-2 h-1 w-3/4 rounded-full bg-white/10" />
                    </div>
                    <div className="h-12 rounded-xl border border-white/[0.07] bg-white/[0.035] p-2.5 sm:h-16 sm:p-3">
                      <div className="size-2 rounded-full bg-white/20" />
                      <div className="mt-2 h-1 w-3/4 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-2 border-t border-white/[0.07] pt-3 font-mono text-[7px] uppercase tracking-[0.16em] text-neutral-600 sm:pt-4 sm:text-[8px]">
                  <span className="size-1.5 rounded-full bg-signal" />
                  Sync ready
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          className="absolute right-[5%] top-[28%] z-10 w-[42%] overflow-hidden rounded-2xl border border-white/[0.11] bg-neutral-950/[0.88] shadow-[0_22px_60px_rgba(0,0,0,0.48)] backdrop-blur-md"
          style={{
            x: shouldReduceMotion ? 0 : layerX,
            y: shouldReduceMotion ? 0 : layerY,
          }}
        >
          <p className="border-b border-white/[0.08] px-3 py-2 font-mono text-[7px] uppercase tracking-[0.2em] text-neutral-600 sm:px-4 sm:py-3 sm:text-[8px]">
            Build layers
          </p>
          <div className="divide-y divide-white/[0.08]">
            {BUILD_LAYERS.map((layer) => (
              <div
                key={layer.index}
                className="grid grid-cols-[1rem_1fr] gap-2 px-3 py-2.5 sm:grid-cols-[1.25rem_1fr] sm:gap-3 sm:px-4 sm:py-3.5"
              >
                <span className="font-mono text-[7px] text-signal sm:text-[8px]">
                  {layer.index}
                </span>
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold text-white sm:text-[11px]">
                    {layer.label}
                  </p>
                  <p className="mt-0.5 truncate text-[7px] text-neutral-500 sm:text-[9px]">
                    {layer.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="absolute bottom-5 left-5 right-5 z-20 sm:bottom-7 sm:left-7 sm:right-7">
          <div className="mb-2 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-neutral-600 sm:text-[9px]">
            <span>Local data</span>
            <span>Server</span>
          </div>
          <div className="relative h-px overflow-hidden bg-white/10">
            <motion.span
              className="absolute inset-y-0 left-0 w-full origin-left bg-signal/80"
              initial={false}
              animate={
                shouldReduceMotion
                  ? { scaleX: 1 }
                  : { scaleX: [0, 1] }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 2.4,
                      ease: [0.4, 0, 0.2, 1],
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 0.7,
                    }
              }
            />
          </div>
        </div>
      </div>
    </figure>
  );
}
