import Link from "next/link";

export default function NotFound() {
  return (
    <article className="page">
      <header className="page-head wrap">
        <h1>Page not found</h1>
        <p className="lede">That URL is not on this site.</p>
      </header>
      <div className="wrap resume-sheet">
        <p className="quiet">
          Home opens the desks. Work keeps the three cases.
        </p>
        <p className="close-links">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
        </p>
      </div>
    </article>
  );
}
