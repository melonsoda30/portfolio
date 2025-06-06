import { ListItem } from "./list-item";
import { BlurTransition } from "./blur-transition";
import { getProjects } from "@/actions/projects";

export async function List({
  title,
  params,
}: {
  title: string;
  params: string;
}) {
  const data = await getProjects({ type: params });

  return (
    <>
      <BlurTransition>
        <h1 className="text-2xl font-bold text-[var(--foreground-highlight)]">
          {title}
        </h1>
      </BlurTransition>
      <div className="flex flex-row gap-4 items-start px-2">
        <BlurTransition className="h-full w-[.1rem] self-stretch  bg-[var(--foreground)]">
          {/* <div className="w-[.1rem] self-stretch  bg-[var(--foreground)]"></div> */}
        </BlurTransition>
        <ol className="flex flex-col gap-2 py-1">
          {data.map((project, index) => (
            <li key={index}>
              <BlurTransition key={index} index={index + 1.2}>
                <ListItem
                  key={index}
                  url={project.url}
                  title={project.sort_name}
                  name={project.name}
                  images={project.images}
                />
              </BlurTransition>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
