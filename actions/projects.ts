import fs from "fs/promises";
import path from "path";

export type Project = {
  sort_name: string;
  name: string;
  images: string[];
  description: string;
  type: string;
  url: string;
  year: string;
  stack: string[];
  role: string;
  site: string;
};
export async function getProjects(
  params?: Partial<Record<keyof Project, string>>
) {
  const filePath = path.join(process.cwd(), "data/project.json");
  const data = await fs.readFile(filePath, "utf8");
  let key: keyof Project | undefined;
  if (params && typeof params === "object") {
    key = Object.keys(params)[0] as keyof Project;
  }
  return (JSON.parse(data) as Project[]).filter((project: Project) =>
    key ? project[key] === params?.[key] : true
  );
}
