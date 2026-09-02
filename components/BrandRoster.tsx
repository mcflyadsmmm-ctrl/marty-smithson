import { brands } from "@/lib/content";

export function BrandRoster() {
  return (
    <ul className="brand-list">
      {brands.map((brand) => (
        <li key={brand.mark}>
          <span className="brand-mark">{brand.mark}</span>
          <span>{brand.name}</span>
        </li>
      ))}
    </ul>
  );
}
