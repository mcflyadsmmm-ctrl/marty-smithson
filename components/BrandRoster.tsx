import { brands, type Brand } from "@/lib/content";

function BrandChip({ brand }: { brand: Brand }) {
  const mark = (
    <>
      {brand.logo ? (
        // Public favicon from the brand site. Initials stay if the file is missing.
        // eslint-disable-next-line @next/next/no-img-element
        <img className="brand-logo" src={brand.logo} alt="" width={20} height={20} />
      ) : (
        <span className="brand-mark" aria-hidden="true">
          {brand.mark}
        </span>
      )}
      <span>{brand.name}</span>
    </>
  );

  if (brand.href) {
    return (
      <a className="brand-chip" href={brand.href} rel="noreferrer" target="_blank">
        {mark}
      </a>
    );
  }

  return <span className="brand-chip brand-chip-plain">{mark}</span>;
}

export function BrandRoster({
  wall = false,
}: {
  wall?: boolean;
}) {
  return (
    <ul className={wall ? "client-rail" : "brand-list"}>
      {brands.map((brand) => (
        <li key={brand.name}>
          <BrandChip brand={brand} />
        </li>
      ))}
    </ul>
  );
}
