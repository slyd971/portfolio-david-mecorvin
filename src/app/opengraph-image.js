import { ImageResponse } from "next/og";

export const alt = "David Mecorvin — Chef de Projet Digital / Product Owner Senior";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
            "radial-gradient(circle at 15% 15%, rgba(224,146,44,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(194,112,58,0.30), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "#F5A94E",
              fontSize: "28px",
              fontWeight: 600,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            DM
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "32px", color: "#ffffff", fontWeight: 600 }}>
              David Mecorvin
            </div>
            <div style={{ fontSize: "22px", color: "rgba(255,255,255,0.55)" }}>
              Chef de Projet Digital / Product Owner
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "56px",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: "980px",
          }}
        >
          Je pilote les projets digitaux avec une logique produit, business et delivery
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "44px",
          }}
        >
          {["12+ ans", "Product Owner", "Banque · Retail · E-commerce"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "12px 22px",
                borderRadius: "999px",
                border: "1px solid rgba(245,169,78,0.35)",
                backgroundColor: "rgba(194,112,58,0.15)",
                color: "#FBD9A8",
                fontSize: "22px",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
