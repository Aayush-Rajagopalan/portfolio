import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Avatar from "../public/logo.png";
import { useTranslations } from "next-intl";

export default function NavBar() {

  const t = useTranslations("Navbar")
  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 py-6 transition-all duration-500"
      )}
    >
      <div className="container mx-auto justify-between flex flex-row items-center gap-2 md:gap-6">
        <div className=" flex items-center gap-2 md:gap-6">
          <Link
            href="/"
            className="md:mr-2 block overflow-clip rounded-full leading-[0]"
          >
            <Image
              src={Avatar}
              width={32}
              height={32}
              className="align-middle"
              alt="Aayush's Avatar"
              priority
            />
          </Link>
          <Link
            href="https://aayus.me/blog"
            className={cn(
              "text-sm font-medium text-white hidden md:flex transition-colors hover:text-indigo-400"
            )}
          >
            {t("blog")}
          </Link>
          <Link
            href="/projects"
            className={cn(
              "text-sm font-medium text-white hidden md:flex transition-colors hover:text-indigo-400"
            )}
          >
            {t('projects')}
          </Link>
        </div>
        <div className=" flex items-center gap-2 md:gap-6">
          <Link
            href="https://aayus.me/social/discord"
            className="backdrop-blur-lg bg-black bg-opacity-30  flex items-center py-2 px-8 rounded-3xl"
          >
            <span className="pr-2 text-white">{t('status')}</span>
          </Link>
          <Link
            href="https://aayus.me/social/discord"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white"
          >
            <span className=" text-white">{t('contact')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
