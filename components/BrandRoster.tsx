import { brands } from "@/lib/content";

export function BrandRoster({
  wall = false,
}: {
  wall?: boolean;
}) {
  return (
    <ul className={wall ? "client-wall" : "brand-list"}>
      {brands.map((brand) => (
        <li key={brand.name}>{brand.name}</li>
      ))}
    </ul>
  );
}
