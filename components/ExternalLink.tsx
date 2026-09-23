import type { ReactNode } from "react";

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
