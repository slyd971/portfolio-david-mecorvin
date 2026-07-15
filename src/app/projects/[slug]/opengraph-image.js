import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/data/projects";

export const alt = "Projet — David Mecorvin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const title = project?.title ?? "Projet";
  const category = project?.category ?? "David Mecorvin";

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
          backgroundColor: "#16110C",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(224,146,44,0.30), transparent 45%), radial-gradient(circle at 85% 85%, rgba(194,112,58,0.28), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#F5A94E",
            marginBottom: "24px",
          }}
        >
          Projet
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "84px",
            fontWeight: 600,
            color: "#ffffff",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "32px",
            color: "rgba(255,255,255,0.65)",
            marginTop: "24px",
            maxWidth: "980px",
          }}
        >
          {category}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "rgba(255,255,255,0.45)",
            marginTop: "60px",
          }}
        >
          David Mecorvin — Chef de Projet Digital / Product Owner
        </div>
      </div>
    ),
    { ...size }
  );
}
