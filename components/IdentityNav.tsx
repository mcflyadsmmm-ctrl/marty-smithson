"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof sections)[number]["id"];

export function IdentityNav() {
  const [active, setActive] = useState<SectionId>("about");

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    if (nodes.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id;
        if (id === "about" || id === "experience" || id === "approach" || id === "contact") {
          setActive(id);
        }
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="identity-nav" aria-label="On this page">
      {sections.map((section) => {
        const current = active === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={current ? "true" : undefined}
          >
            {section.label}
          </a>
        );
      })}
    </nav>
  );
}
