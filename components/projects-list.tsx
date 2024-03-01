import ProjectCard from "@/components/project-card";
import { projects_ar, projects_en, projects_fr } from "@/projects";
import { getLocale } from "next-intl/server";

interface Projects {
  id: string;
  image: string;
  name: string;
  desc: string;
  link: string;
  linkLabel: string;
  tags: string[];
  isClient: boolean;
  isFeatured: boolean;
}

export default async function ProjectsList() {
  const lang = await getLocale();
  let projects = projects_en;
  if (lang === "ar") {
    projects = projects_ar;
  } else if (lang === "fr") {
    projects = projects_fr;
  }
  const featuredProjects = projects.filter(
    (project: Projects) => project.isFeatured
  );

  return (
    <ul className="flex snap-x snap-proximity gap-6 overflow-x-auto pb-2 pt-8 sm:grid sm:flex-none sm:overflow-x-visible sm:px-4 sm:pb-0 md:grid-cols-2 md:pt-12 xl:grid-cols-4">
      {featuredProjects.map((project: Projects, i) => (
        <li key={i} className="first:ml-4 last:mr-4 sm:first:ml-0 sm:last:mr-0">
          <ProjectCard key={project.id} {...project} tag={project.tags[0]} />
        </li>
      ))}
    </ul>
  );
}
