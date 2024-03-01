import Image from "next/image";
import { Link } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProjectProps {
  id: string;
  image: string;
  name: string;
  desc: string;
  link: string;
  linkLabel: string;
  tags: string[];
  tag: string;
  isClient: boolean;
  isFeatured: boolean;
}

interface ProjectTagProps {
  tag: string;
}

const ProjectTag = ({ tag }: ProjectTagProps) => {
  return (
    <span className="text-xs font-bold uppercase px-2 text-neutral-400 bg-black bg-opacity-50 p-1 rounded-3xl">
      {tag}
    </span>
  );
};

export default function ProductCard(props: ProjectProps) {
    const t = useTranslations("Projects")
  return (
    <div className="flex h-full w-80 snap-center flex-col overflow-clip rounded-lg bg-neutral-800 transition-transform sm:w-auto sm:hover:scale-[102%]">
      <div className="relative aspect-video bg-black">
        {props.image && (
          <Image
            src={props.image}
            alt={props.name}
            layout="fill"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex grow flex-col p-4">
        {props.isClient === false ? (
          <span className="text-green-300 mb-2 bg-green-500 text-sm bg-opacity-30 w-max px-2 rounded-3xl">
            {t("personal")}
          </span>
        ) : props.isClient === true ? (
          <span className="text-red-300 mb-2 bg-red-500 text-sm bg-opacity-30 w-max px-2 rounded-3xl">
            {t("commission")}
          </span>
        ) : (
          <></>
        )}
        <h3 className="pb-2 font-bold text-white px-1">{props.name}</h3>
        <span className="grow text-neutral-300 px-1">{props.desc}</span>
        <ul className="flex flex-wrap gap-1 pt-2">
          {props.tags?.map((tag) => (
            <li key={tag}>
              <ProjectTag tag={tag} />
            </li>
          ))}
        </ul>
        <a
          className="mt-2 block font-medium text-indigo-400"
          href={props.link}
          rel="noreferrer"
          target={props.link.startsWith("/") ? undefined : "_blank"}
        >
          <Link className="mr-2 inline align-middle h-4 w-4 text-indigo-400" />
          {props.linkLabel}
        </a>
      </div>
    </div>
  );
}
