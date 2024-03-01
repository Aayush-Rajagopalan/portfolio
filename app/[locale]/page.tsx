import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Stack from "@/components/stack";

export default function Index() {
  return (
    <>
      <Hero />
      <div className="bg-zinc-950">
        <Projects />
      </div>
    </>
  );
}
