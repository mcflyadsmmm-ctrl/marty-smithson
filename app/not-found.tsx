import Link from "next/link";

export default function NotFound() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <p className="label">404</p>
        <h1>Page not found</h1>
        <p className="lede">That page isn’t here.</p>
      </header>
      <div className="wrap">
        <p className="close-links">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
        </p>
      </div>
    </article>
  );
}
