import { ImageResponse } from "next/og";
import { hero, proof } from "@/lib/content";
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
          padding: "68px 76px 56px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 1020,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#3d4f45",
              letterSpacing: "-0.02em",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 46,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.18,
            }}
          >
            {hero.role}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 1, background: "#102018" }} />
          <div style={{ display: "flex", height: 3 }} />
          <div style={{ display: "flex", height: 1, background: "#102018" }} />
          <div
            style={{
              display: "flex",
              paddingTop: 22,
            }}
          >
          {proof.map((item, index) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                flex: 1,
                padding: "0 18px",
                borderLeft: index === 0 ? "none" : "1px solid #c5d4cb",
                color: "#1b6b4a",
                fontSize: 26,
                fontWeight: 500,
                letterSpacing: "-0.03em",
              }}
            >
              {item.label}
            </div>
          ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
