"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { nav, site } from "@/lib/site";

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
          Marty Smithson
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
        <div className="header-cta nav-desktop">
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <Link href="/resume">Resume / PDF</Link>
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={overlayId}
          onClick={() => setOpen(true)}
        >
          Menu
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
            Marty Smithson
          </Link>
          <button className="nav-toggle" type="button" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
        <ul className="nav-overlay-list">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={site.linkedin} rel="noreferrer" target="_blank" onClick={() => setOpen(false)}>
              LinkedIn
            </a>
          </li>
          <li>
            <Link href="/resume" onClick={() => setOpen(false)}>
              Resume / PDF
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
