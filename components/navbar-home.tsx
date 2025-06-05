"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BlurTransition } from "./blur-transition";

export function NavbarHome() {
  const pathname = usePathname();
  const route = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
  ];

  return (
    <div className="flex flex-row gap-2 mb-4 lg:hidden">
      {route.map((item, index) => (
        <BlurTransition key={index} index={index + 1.2}>
          <Link
            key={index}
            className={`text-sm font-bold  ${
              pathname === item.path ? "active" : ""
            }`}
            href={item.path}
          >
            {item.name}
          </Link>
        </BlurTransition>
      ))}
    </div>
  );
}
