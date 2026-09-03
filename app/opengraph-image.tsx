import { ImageResponse } from "next/og";

export const alt =
  "Marty Smithson. Head of BI and Performance Marketing at Black Clover.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#dfe6e2",
          color: "#141a17",
          padding: "72px 80px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Marty Smithson
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#141a17",
            }}
          >
            I run BI and performance marketing at Black Clover, and I report to
            the CEO.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#465049",
            borderTop: "2px solid #141a17",
            paddingTop: 22,
          }}
        >
          Isolated books. One writer. The field cannot rewrite the fact.
        </div>
      </div>
    ),
    size,
  );
}
