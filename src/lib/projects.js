import "server-only";
import { projects } from "@/data/projects.js";

/*
 * Every page reads projects through these functions, never from the data
 * file directly. When the projects move to an API, only this file changes:
 * replace the local array with a fetch() and keep the same return shape.
 */

const placeholderAbout =
  "This is placeholder text. Write a longer story about the project here: why you built it, what you learned, and what was hard to get right.";

const placeholderFeatures = [
  "Placeholder feature one",
  "Placeholder feature two",
  "Placeholder feature three",
];

function withDetails(project) {
  return {
    ...project,
    about: project.about ?? placeholderAbout,
    features: project.features ?? placeholderFeatures,
  };
}

export async function getProjects() {
  return projects.map(withDetails);
}

export async function getProject(slug) {
  const all = await getProjects();
  const index = all.findIndex((project) => project.slug === slug);
  if (index === -1) return null;

  return {
    project: all[index],
    previous: all[index - 1] ?? null,
    next: all[index + 1] ?? null,
  };
}
