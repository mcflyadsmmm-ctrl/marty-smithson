import { ImageResponse } from "next/og";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";

export const alt = site.title;
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
          backgroundColor: "#e4eee7",
          color: "#102018",
          padding: "72px 80px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 980,
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
            {site.name}
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.35,
              color: "#102018",
            }}
          >
            {hero.role}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#1b6b4a",
            borderTop: "2px solid #102018",
            paddingTop: 22,
          }}
        >
          Black Clover · Nutricost · {site.mcflyProduct}
        </div>
      </div>
    ),
    size,
  );
}
