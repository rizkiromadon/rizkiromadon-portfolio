import { ImageResponse } from "next/og";
import site from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0B0E14",
          backgroundImage:
            "linear-gradient(160deg, #0B0E14 0%, #141922 100%)",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-100px",
            width: "420px",
            height: "420px",
            borderRadius: "9999px",
            backgroundImage:
              "radial-gradient(circle, rgba(180,140,242,0.35) 0%, rgba(180,140,242,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-140px",
            left: "-80px",
            width: "480px",
            height: "480px",
            borderRadius: "9999px",
            backgroundImage:
              "radial-gradient(circle, rgba(242,103,158,0.28) 0%, rgba(242,103,158,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#E8A84E",
            fontSize: 24,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#E8A84E",
            }}
          />
          Log entry · Signal acquired
        </div>
        <div
          style={{
            display: "flex",
            color: "#F4F1E8",
            fontSize: 80,
            fontWeight: 700,
            marginTop: "28px",
            lineHeight: 1.1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            width: "240px",
            height: "6px",
            borderRadius: "9999px",
            marginTop: "18px",
            backgroundImage:
              "linear-gradient(90deg, #8FE3CF 0%, #5FD9F5 45%, #B48CF2 75%, #F2679E 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            color: "#5FD9F5",
            fontSize: 34,
            marginTop: "22px",
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            display: "flex",
            color: "#5A6472",
            fontSize: 26,
            marginTop: "36px",
            maxWidth: "900px",
            lineHeight: 1.5,
          }}
        >
          {site.bio}
        </div>
        <div
          style={{
            display: "flex",
            color: "#5A6472",
            fontSize: 24,
            marginTop: "48px",
            letterSpacing: "0.04em",
          }}
        >
          {site.websiteLabel}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
