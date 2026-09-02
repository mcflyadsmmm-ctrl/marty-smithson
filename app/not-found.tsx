import Link from "next/link";

export default function NotFound() {
  return (
    <article className="page-hero">
      <h1>Page not found</h1>
      <p className="actions">
        <Link className="btn" href="/">
          Home
        </Link>
        <Link className="btn" href="/work">
          Work
        </Link>
      </p>
    </article>
  );
}
