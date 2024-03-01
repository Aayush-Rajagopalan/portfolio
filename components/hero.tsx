import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <div>
      <div className="relative flex  h-screen max-h-[80rem]  min-h-[40rem] flex-col bg-gradient-to-bl from-gray-900 to-black">
        <div className="container m-auto px-4">
          <div
            className={"lg:w-1/2"}
          >
            <span className="text-2xl font-medium text-gray-300">
              {t("intro")}
            </span>
            <h1 className="py-8 text-7xl font-medium text-white md:text-8xl">
              {t("name")}
            </h1>
            <span className="text-xl leading-relaxed text-gray-400 md:text-2xl md:leading-relaxed">
              {t("description")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
