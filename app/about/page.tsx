import { BlurTransition } from "@/components/blur-transition";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col w-full gap-4 ">
      <BlurTransition>
        <section className="flex flex-col lg:hidden">
          <Link className="text-sm font-bold " href="/">
            Back to Home
          </Link>
        </section>
      </BlurTransition>
      <BlurTransition index={1}>
        <section className="flex flex-col gap-8">
          <div className="gap-4">
            <h1 className="text-3xl font-bold text-[var(--foreground-highlight)]">
              About
            </h1>
            <p>
              I am a Front-End Developer with over 5 years of experience
              building responsive, user-friendly, and high-performance web
              interfaces.
            </p>
          </div>
          <div className="">
            <BlurTransition>
              <h1 className="text-2xl font-bold text-[var(--foreground-highlight)]">
                Experience
              </h1>
            </BlurTransition>
            <div className="flex flex-row gap-4 items-start px-2 h-full">
              <ol className="flex flex-col gap-2 py-1">
                <BlurTransition index={0 + 1.2}>
                  <p className="font-bold tracking-wide">
                    PT Agra Nara Geospasial - Front End Developer
                  </p>
                  <span className="font-sm">2019 - 2025</span>
                </BlurTransition>
                <BlurTransition index={0 + 1.3}>
                  <p className="font-bold tracking-wide">
                    PT Detak Kreasi Digital - Front End Developer
                  </p>
                  <span className="font-sm">2018</span>
                </BlurTransition>
              </ol>
            </div>
          </div>
          <div className="">
            <BlurTransition>
              <h1 className="text-2xl font-bold text-[var(--foreground-highlight)]">
                Education
              </h1>
            </BlurTransition>
            <div className="flex flex-row gap-4 items-start px-2 h-full">
              <ol className="flex flex-col gap-2 py-1">
                <BlurTransition index={0 + 1.2}>
                  <p className="font-bold tracking-wide">
                    SMK BPI BANDUNG - Rekayasa Perangkat Lunak
                  </p>
                  <span className="font-sm">2015 - 2018</span>
                </BlurTransition>
              </ol>
            </div>
          </div>
          <div className="">
            <BlurTransition>
              <h1 className="text-2xl font-bold text-[var(--foreground-highlight)]">
                Tech Stack
              </h1>
            </BlurTransition>
            <div className="flex flex-row gap-4 items-start px-2 h-full">
              <ol className="flex flex-col gap-2 py-1">
                <BlurTransition index={0 + 1.2}>
                  <p className="tracking-wide">React.Js / Next.Js</p>
                  <p className="tracking-wide">Vue.Js</p>
                  <p className=" tracking-wide">Svelte</p>
                  <p className=" tracking-wide">Tailwind CSS</p>
                  <p className=" tracking-wide">Framer Motion / Gsap</p>
                  <p className="tracking-wide">Node.Js</p>
                  <p className=" tracking-wide">Express.Js</p>
                  <p className="tracking-wide">PostgresSQL</p>
                  <p className=" tracking-wide">MongoDB</p>
                </BlurTransition>
              </ol>
            </div>
          </div>
        </section>
      </BlurTransition>
    </div>
  );
}
