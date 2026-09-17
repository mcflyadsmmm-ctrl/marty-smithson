import Image from "next/image";
import { brands } from "@/lib/content";

export function BrandRoster({
  wall = false,
}: {
  wall?: boolean;
}) {
  return (
    <ul className={wall ? "client-strip" : "brand-list"}>
      {brands.map((brand) => {
        const mark = (
          <>
            {brand.logo ? (
              <Image
                className="client-logo"
                src={brand.logo}
                alt=""
                width={28}
                height={28}
              />
            ) : (
              <span className="brand-mark" aria-hidden="true">
                {brand.mark}
              </span>
            )}
            <span>{brand.name}</span>
          </>
        );

        return (
          <li key={brand.name}>
            {brand.href ? (
              <a href={brand.href} rel="noreferrer" target="_blank">
                {mark}
              </a>
            ) : (
              <span className="client-plain">{mark}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
