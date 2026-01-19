import Container from "@/components/Container";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex items-start justify-start">
      <Container className="mt-10 min-h-screen p-4 md:p-20 md:pb-10">
        <h1 className="text-primary. text-2xl font-bold tracking-tight md:text-4xl">
          Saumya Rex
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as a engineer at Google.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
