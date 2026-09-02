"use client";

import Link from "next/link";
import { useRef } from "react";
import { brands } from "@/lib/content";

export function BrandRoster() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: -1 | 1) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: dir * Math.max(220, node.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <div className="brand-board">
      <div className="brand-toolbar">
        <p className="tape-hint">Complete public roster. No invented ROAS.</p>
        <div className="brand-controls">
          <button type="button" onClick={() => scrollByDir(-1)} aria-label="Previous brands">
            ←
          </button>
          <button type="button" onClick={() => scrollByDir(1)} aria-label="Next brands">
            →
          </button>
        </div>
      </div>
      <div className="brand-grid" ref={scroller}>
        {brands.map((brand) => (
          <Link className="brand-tile" href="/work/mcfly" key={brand.mark}>
            <p className="brand-mark label">{brand.mark}</p>
            <p className="brand-name">{brand.name}</p>
            <p className="brand-cat label">McFly / {brand.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
