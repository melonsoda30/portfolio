import { getProjects } from "@/actions/projects";
import { BlurTransition } from "@/components/blur-transition";
import Image from "next/image";
import Link from "next/link";

export default async function WorksDetail({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const data = await getProjects({ url: name });
  const project = data[0];
  const filterImage = await project.images.filter(
    (img) => !img.includes("logo")
  );
  return (
    <div className="flex flex-col w-full gap-4 ">
      <BlurTransition>
        <section className="flex flex-col gap-2">
          <Link className="text-sm font-bold lg:hidden" href="/">
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-[var(--foreground-highlight)]">
            {project.name}
          </h1>
        </section>
      </BlurTransition>
      <BlurTransition index={1}>
        <section className="flex flex-col gap-2">
          <p>{project.description}</p>
          <p className="text-sm mb-2">
            Year :{" "}
            <span className=" font-bold text-[var(--foreground-highlight)]">
              {project.year}
            </span>
          </p>
          <p className="text-sm mb-2">
            Role :{" "}
            <span className=" font-bold text-[var(--foreground-highlight)]">
              {project.role}
            </span>
          </p>
          <p className="text-sm">Tech Stack:</p>
          <ol className="flex mb-2 gap-1 flex-col">
            {project.stack.map((item, index) => (
              <li
                key={index}
                className="text-sm font-bold text-[var(--foreground-highlight)]"
              >
                {item}
              </li>
            ))}
          </ol>
          <p className="text-sm mb-2">
            Preview :{" "}
            {project.site ? (
              <Link href={project.site}>{project.site}</Link>
            ) : (
              "-"
            )}
          </p>
        </section>
      </BlurTransition>

      <section className="flex flex-col w-full gap-2">
        {filterImage &&
          filterImage.map((image, index) => (
            <BlurTransition index={index + 2} key={index}>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.name} image`}
                  fill
                  // loading="lazy"
                  sizes="(max-width: 768px) 700px, 100vw"
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </BlurTransition>
          ))}
      </section>
    </div>
  );
}
