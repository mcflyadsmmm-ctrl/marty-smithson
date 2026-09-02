"use client";

import { useEffect, useState } from "react";

function formatMountain(now: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Denver",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);
}

export function StatusBar() {
  const [clock, setClock] = useState("——:——:——");

  useEffect(() => {
    const tick = () => setClock(formatMountain(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="status-bar" aria-hidden="true">
      <span className="status-name">Marty Smithson · Portfolio</span>
      <span className="status-mid">
        <span className="chip">06 years</span>
        <span className="chip">US remote</span>
        <span className="chip">EST</span>
      </span>
      <span className="status-clock">Local {clock} MT</span>
    </div>
  );
}
