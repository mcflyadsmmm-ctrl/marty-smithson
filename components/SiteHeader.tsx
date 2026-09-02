"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overlayId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="wordmark" href="/">
          MS /
        </Link>
        <nav className="nav nav-desktop" aria-label="Primary">
          {nav.map((item) => {
            const current =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={overlayId}
          onClick={() => setOpen(true)}
        >
          Index
        </button>
      </div>
      <div
        className="nav-overlay"
        id={overlayId}
        data-open={open ? "true" : "false"}
        hidden={!open}
      >
        <div className="nav-overlay-bar">
          <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
            MS /
          </Link>
          <button
            className="nav-toggle"
            type="button"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <ul className="nav-overlay-list">
          {nav.map((item, index) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
