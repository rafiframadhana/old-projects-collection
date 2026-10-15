import { getProjects } from "@/lib/projects.js";
import Projects from "@/components/Projects.jsx";

export default async function HomePage() {
  const projects = await getProjects();

  return <Projects projects={projects} />;
}
