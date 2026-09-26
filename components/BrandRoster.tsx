import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { brands } from "@/lib/content";
import { clientListGraph, jsonLd } from "@/lib/structured-data";

export function BrandRoster({
  wall = false,
}: {
  wall?: boolean;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(clientListGraph) }}
      />
      <ul className={wall ? "client-strip" : "brand-list"}>
        {brands.map((brand) => {
          const mark = (
            <>
              {brand.logo ? (
                <Image
                  className="client-logo"
                  src={brand.logo}
                  alt=""
                  width={32}
                  height={32}
                />
              ) : (
                <span className="brand-mark" aria-hidden="true">
                  {brand.mark}
                </span>
              )}
              <span className="client-name">{brand.name}</span>
            </>
          );

          return (
            <li key={brand.name}>
              {brand.href ? (
                <ExternalLink href={brand.href}>{mark}</ExternalLink>
              ) : (
                <span className="client-plain">{mark}</span>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
