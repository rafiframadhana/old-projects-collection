import { payloadFetch } from "@/lib/payload/client.js";

/*
 * Projects come from Payload CMS, filtered to the ones marked isOldProject.
 * Both queries share the "projects" cache tag, so one call to
 * /api/revalidate refreshes the list and every detail page.
 */

const oldProjectsOnly = { "where[isOldProject][equals]": "true", depth: "1" };

function toImage(item) {
  const image = item.image ?? {};
  const url = image.cloudinary?.secure_url || image.thumbnailURL || "";
  if (!url) return null;

  return {
    url,
    width: image.cloudinary?.width ?? image.width,
    height: image.cloudinary?.height ?? image.height,
    alt: image.alt ?? "",
  };
}

function transformProject(p) {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    description: p.description,
    fullDescription: p.fullDescription || "",
    stack: p.stack ?? [],
    liveUrl: p.liveUrl || null,
    githubUrl: p.githubUrl || null,
    images: (p.images ?? []).map(toImage).filter(Boolean),
  };
}

export async function getProjects() {
  const data = await payloadFetch(
    "/projects",
    { ...oldProjectsOnly, sort: "_order", limit: "100" },
    { tags: ["projects"] }
  );
  return data.docs.map(transformProject);
}

export async function getProjectBySlug(slug) {
  const data = await payloadFetch(
    "/projects",
    { ...oldProjectsOnly, "where[slug][equals]": slug, limit: "1" },
    { tags: ["projects"] }
  );
  const project = data.docs[0];
  return project ? transformProject(project) : null;
}
