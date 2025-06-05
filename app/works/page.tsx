import { getProjects } from "@/actions/projects";
import { BlurTransition } from "@/components/blur-transition";
import { ProjectsBox } from "@/components/projects-box";
import Link from "next/link";

export default async function Works() {
  const data = await getProjects();
  return (
    <>
      <section className="flex flex-col gap-2">
        <BlurTransition>
          <Link className="text-sm font-bold lg:hidden" href="/">
            Back to Home
          </Link>
        </BlurTransition>
        <BlurTransition index={1}>
          <h1 className="text-3xl font-bold text-[var(--foreground-highlight)]">
            Latest Works
          </h1>
          <p className="text-sm">
            A collection of recent websites and applications I’ve built.
          </p>
        </BlurTransition>
      </section>
      <section className="grid grid-cols-2 w-full gap-2">
        {data.map((project, index) => (
          <ProjectsBox key={index} project={project} />
        ))}
      </section>
    </>
  );
}
