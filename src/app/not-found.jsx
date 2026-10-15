import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="content">
      <h2 className="content-heading">Page not found</h2>
      <p className="content-intro">
        There is no page at this address. The project may have been renamed or
        removed.
      </p>
      <p className="not-found-links">
        <Link href="/">Go to the project list</Link>
      </p>
    </section>
  );
}
