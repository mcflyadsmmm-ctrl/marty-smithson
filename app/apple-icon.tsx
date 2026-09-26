import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#e4eee7",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            color: "#102018",
            fontSize: 72,
            fontWeight: 500,
            letterSpacing: "-0.04em",
          }}
        >
          MS
        </div>
        <div style={{ display: "flex", height: 14, background: "#1b6b4a" }} />
      </div>
    ),
    { ...size },
  );
}
