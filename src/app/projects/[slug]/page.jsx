import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/repositories/projects.js";
import ProjectDetail from "@/components/ProjectDetail.jsx";

// Pre-render every project at build time. Projects added in Payload later
// still render on demand.
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.flatMap((project) =>
    project.slug ? [{ slug: project.slug }] : []
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  const image = project.images[0];
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      url: `/projects/${slug}`,
      title: project.title,
      description: project.description,
      images: image
        ? [{ url: image.url, width: image.width, height: image.height }]
        : undefined,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const [project, projects] = await Promise.all([
    getProjectBySlug(slug),
    getProjects(),
  ]);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index !== -1 ? (projects[index + 1] ?? null) : null;

  return <ProjectDetail project={project} previous={previous} next={next} />;
}
