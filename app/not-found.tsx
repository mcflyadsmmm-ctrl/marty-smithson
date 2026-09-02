import Link from "next/link";

export default function NotFound() {
  return (
    <article className="doc">
      <header className="open">
        <h1>Page not found</h1>
        <p className="open-line">That page isn’t here.</p>
      </header>
      <p className="close-links">
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
      </p>
    </article>
  );
}
