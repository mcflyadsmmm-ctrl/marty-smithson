import Link from "next/link";
import { brands } from "@/lib/content";

export function BrandRoster() {
  return (
    <ul className="brand-list">
      {brands.map((brand) => (
        <li key={brand.mark}>
          <Link className="brand-chip" href="/work/mcfly">
            {brand.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
