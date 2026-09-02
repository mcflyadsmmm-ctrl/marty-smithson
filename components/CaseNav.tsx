const items = [
  { href: "#architecture", label: "Architecture" },
  { href: "#shift", label: "Shift" },
  { href: "#identity", label: "Identity" },
  { href: "#lanes", label: "Lanes" },
  { href: "#constraint", label: "Constraint" },
  { href: "#mix", label: "Mix" },
] as const;

export function CaseNav() {
  return (
    <nav className="case-nav" aria-label="On this case">
      {items.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
