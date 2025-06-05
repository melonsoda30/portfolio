"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { BlurTransition } from "./blur-transition";

type position = {
  // left: number;
  // width: number;
  top: number;
  opacity: number;
};

export function Navbar() {
  const [position, setPosition] = useState<position>({
    top: 0,
    opacity: 0,
  });
  const ref = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  function handleMouseEnter(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!dotRef.current || !ref.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dotRect = dotRef.current.getBoundingClientRect();

    const parentTop = ref.current.getBoundingClientRect().top;
    const elementTop = rect.top;
    const elementHeight = e.currentTarget.offsetHeight;
    const dotTHeight = dotRect.height / 2;
    const middleY = elementTop - parentTop + elementHeight / 2 - dotTHeight;
    console.log(middleY, dotTHeight);
    setPosition({
      top: middleY,
      opacity: 1,
    });
  }

  const route = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
  ];
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      ref={ref}
      onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      className="hidden absolute top-16 z-30 flex-col items-center justify-center gap-4 whitespace-nowrap rounded-full text-sm font-bold lg:flex "
      style={{
        right: "calc(50% + (var(--breakpoint-sm) / 2))",
        transform: "translateX(-100%)",
      }}
    >
      {pathname === "/" ? (
        route.map((item, index) => (
          <BlurTransition key={index} index={index + 1.2}>
            <Link
              key={index}
              className={`relative z-10 text-sm ${
                pathname === item.path ? "active" : ""
              }`}
              href={item.path}
              onMouseEnter={handleMouseEnter}
              onClick={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
            >
              {item.name}
            </Link>
          </BlurTransition>
        ))
      ) : (
        <BlurTransition index={1.2}>
          <Link
            className="relative z-10 text-sm"
            href="/"
            onMouseEnter={handleMouseEnter}
            onClick={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
          >
            Back to Home
          </Link>
        </BlurTransition>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ ...position }}
        ref={dotRef}
        exit={{ opacity: 0 }}
        className="absolute opacity-0 -left-4 z-10 h-2 w-2 rounded-full bg-[var(--foreground-highlight)] pointer-events-none"
      ></motion.div>
    </motion.div>
  );
}
