import { brands } from "@/lib/content";

export function BrandRoster() {
  return (
    <ul className="brand-list">
      {brands.map((brand) => (
        <li key={brand.mark}>{brand.name}</li>
      ))}
    </ul>
  );
}
