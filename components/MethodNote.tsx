import { methods } from "@/lib/content";

export function MethodNote() {
  return (
    <section className="section method-note" aria-labelledby="methods-title">
      <p className="field">Methods</p>
      <h2 id="methods-title">{methods.title}</h2>
      {methods.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}
