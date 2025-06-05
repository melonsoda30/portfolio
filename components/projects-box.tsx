import { Project } from "@/actions/projects";
import Image from "next/image";
import Link from "next/link";
import { BlurTransition } from "./blur-transition";

export function ProjectsBox({ project }: { project: Project }) {
  const logo = project.images.find((img) => img.includes("logo"));
  return (
    <BlurTransition index={2}>
      <Link href={`/works/${project.url}`} className="flex flex-col gap-2 ">
        <div className="relative aspect-square w-full  bg-[var(--foreground)] rounded-lg overflow-hidden">
          {logo && (
            <Image
              src={logo}
              alt={project.name}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 200px, 300px"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-200 ease-out"
            />
          )}
        </div>
        <p className="text=[--var(--foreground-highlight)] text-sm font-bold tracking-wide mt-2 mb-0">
          {project.name}
        </p>
        <span className="text-xs">{project.year}</span>
      </Link>
    </BlurTransition>
  );
}
