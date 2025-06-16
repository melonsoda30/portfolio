import { BlurTransition } from "@/components/blur-transition";
import { List } from "@/components/list";
import { NavbarHome } from "@/components/navbar-home";
import { File, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="">
        <NavbarHome />

        {/* <BlurTransition> */}
        <BlurTransition>
          <h1 className="text-3xl font-bold">
            Hi i&apos;m{" "}
            <span className="text-[var(--foreground-highlight)]">Miftah</span>,
          </h1>
          {/* </BlurTransition> */}

          <p className="text-sm">
            I am Full-Stack-Capable Front-End Developer, I love to build and
            learn new things.
          </p>
        </BlurTransition>

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
      </section>
      <section className="flex flex-col gap-4">
        <List title="Works" params="company" />
      </section>

      <section className="flex flex-col gap-4">
        <List title="Personal Works" params="personal" />
      </section>
    </>
  );
}
