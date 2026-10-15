import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/projects.js";
import ProjectDetail from "@/components/ProjectDetail.jsx";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const result = await getProject(slug);
  if (!result) return {};

  const { project } = result;
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.img.src,
          width: project.img.width,
          height: project.img.height,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const result = await getProject(slug);
  if (!result) notFound();

  return <ProjectDetail {...result} />;
}
