"use client";

export function PrintButton({ label = "Print / save PDF" }: { label?: string }) {
  return (
    <button className="btn btn-solid" type="button" onClick={() => window.print()}>
      {label}
    </button>
  );
}
