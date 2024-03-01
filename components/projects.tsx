import { useTranslations } from "next-intl";
import Link from "next/link";
import ProjectsList from "./projects-list";

export default function Projects() {
    const p = useTranslations("Projects");
  return (
    <div id="projects" className="container m-auto scroll-my-20 py-8 md:py-12">
      <div className="px-4 py-2 flex flex-col md:flex-row justify-between items-start">
        <div>
          <h2 className="py-4 text-3xl font-extrabold text-white">
            {p("title")}
          </h2>
          <span className="text-xl text-gray-400">{p("subtitle")}</span>
        </div>
        <div className="py-4 my-5">
          <Link href="/projects">
            <span className="text-xl text-white hover:transition-colors hover:bg-green-500 hover:bg-opacity-50 hover:text-green-300 bg-neutral-800 p-3  px-10 rounded-full">
              {p("cta")}
            </span>
          </Link>
        </div>
      </div>
     <ProjectsList />
    </div>
  );
}
