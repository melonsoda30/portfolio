"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Link from "next/link";

type ListItemProps = {
  title: string;
  name: string;
  images: string[];
  url: string;
};

export function ListItem({ title, name, images, url }: ListItemProps) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHover, setIsHover] = useState(false);

  function getMousePosition(e: React.MouseEvent<HTMLLIElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  }

  function rangeDeg() {
    const deg = [-10, 10];
    return Math.random() * (deg[1] - deg[0]) + deg[0];
  }

  const yOffsets = useMemo(() => images.map(() => rangeDeg()), [images]);

  return (
    <li
      className="relative group"
      onMouseMove={getMousePosition}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link href={`/works/${url}`} className="font-bold tracking-wide z-0 ">
        {title ? `${title} - ${name}` : name}
      </Link>
      <>
        <AnimatePresence>
          {isHover &&
            images.map((image, index) => {
              return (
                <motion.div
                  key={index}
                  className="hidden absolute aspect-video w-[10rem]  h-auto rounded-lg border-1 border-[var(--foreground)] overflow-hidden origin-center bg-[var(--foreground)] pointer-events-none z-10 md:block"
                  initial={{
                    scale: 0,
                    x: `${mousePosition.x + index * 40}px`,
                    y: `${mousePosition.y - index * yOffsets[index]}px`,
                    rotate: rangeDeg(),
                  }}
                  animate={{
                    x: `${mousePosition.x + index * 40}px`,
                    y: `${mousePosition.y - index * yOffsets[index]}px`,
                    scale: 1,
                  }}
                  exit={{
                    scale: 0,
                    transition: {
                      scale: { duration: 0.2 },
                    },
                  }}
                  transition={{
                    scale: { delay: index * 0.15 },
                    x: { duration: 0.2, ease: "easeOut" },
                    y: { duration: 0.2, ease: "easeOut" },
                  }}
                >
                  <Image
                    src={image}
                    alt={`${title} image`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 200px, 300px"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </>
    </li>
  );
}
