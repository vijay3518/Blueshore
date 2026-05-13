import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "BlueShore Overseas - Study Abroad Consultancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#07111f",
        }}
      >
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#F4A800",
            letterSpacing: 0,
            textAlign: "center",
            paddingLeft: 48,
            paddingRight: 48,
          }}
        >
          BlueShore Overseas
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "white",
            textAlign: "center",
            maxWidth: 920,
            lineHeight: 1.4,
            paddingLeft: 48,
            paddingRight: 48,
          }}
        >
          Your Dream. Our Guidance. Global Future.
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 20,
            color: "rgba(255,255,255,0.88)",
            textAlign: "center",
          }}
        >
          Study Abroad / Visa & University Guidance
        </div>
      </div>
    ),
    { ...size },
  );
}
