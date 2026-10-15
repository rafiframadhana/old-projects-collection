import "server-only";
import { PAYLOAD_API_URL } from "@/lib/payload/config.js";

export async function payloadFetch(path, searchParams, opts) {
  const url = new URL(`${PAYLOAD_API_URL}${path}`);
  for (const [key, value] of Object.entries(searchParams ?? {})) {
    url.searchParams.set(key, value);
  }

  const res = await fetch(url, {
    next: { revalidate: opts?.revalidate ?? 300, tags: opts?.tags },
  });

  if (!res.ok) {
    throw new Error(`Payload fetch failed (${res.status}): ${path}`);
  }

  return res.json();
}
