import { BlurTransition } from "@/components/blur-transition";
import { Github, Mail, File, Linkedin } from "lucide-react";
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
            <h1 className="text-3xl font-bold text-[var(--foreground-highlight)] mb-2">
              About
            </h1>
            <p>
              <span className="font-bold tracking-wide">
                Hi, I’m a Full-Stack-Capable Front-End Developer.
              </span>
              <br />
              With 5+ years of experience in React and Vue, I craft responsive,
              high-performance interfaces with a strong focus on UX and design
              accuracy. I’m also skilled in backend tasks like API integration
              and data handling, enabling smooth end-to-end development.
            </p>
          </div>
          <BlurTransition index={1.2} className="flex flex-row gap-2 mt-4">
            <Link
              href="https://www.linkedin.com/in/miftahiqbalf"
              title="LinkedIn"
              className="p-[.3rem] group hover:bg-[var(--foreground-highlight)] rounded-full transition-all duration-200 ease-in-out"
            >
              <Linkedin className="text-lg text-[var(--foreground-highlight)] group-hover:text-[var(--background)] transition-all duration-200 ease-in-out" />
            </Link>
            <Link
              href="https://github.com/melonsoda30"
              title="Github"
              className="p-[.3rem] group hover:bg-[var(--foreground-highlight)] rounded-full transition-all duration-200 ease-in-out"
            >
              <Github className="text-lg text-[var(--foreground-highlight)] group-hover:text-[var(--background)] transition-all duration-200 ease-in-out" />
            </Link>
            <Link
              href="mailto:miftah.it2@gmail.com"
              title="Send me an email"
              className="p-[.3rem] group hover:bg-[var(--foreground-highlight)] rounded-full transition-all duration-200 ease-in-out"
            >
              <Mail className="text-lg text-[var(--foreground-highlight)] group-hover:text-[var(--background)] transition-all duration-200 ease-in-out" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1YOJysOamCI8AN_1K_DkzHy6EtS5_-JBM/view?usp=sharing"
              title="Download CV"
              className="p-[.3rem] group hover:bg-[var(--foreground-highlight)] rounded-full transition-all duration-200 ease-in-out"
            >
              <File className="text-lg text-[var(--foreground-highlight)] group-hover:text-[var(--background)] transition-all duration-200 ease-in-out" />
            </Link>
          </BlurTransition>
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
                  <p className="tracking-wide">PHP</p>
                  <p className="tracking-wide">Node.Js</p>
                  <p className=" tracking-wide">Express.Js</p>
                  <p className="tracking-wide">PostgresSQL</p>
                  <p className=" tracking-wide">MongoDB</p>
                  <p className=" tracking-wide">Prisma / Drizzle</p>
                </BlurTransition>
              </ol>
            </div>
          </div>
        </section>
      </BlurTransition>
    </div>
  );
}
