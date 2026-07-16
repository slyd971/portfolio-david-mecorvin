import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "../styles/globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://portfolio-david-mecorvin.vercel.app";
const title = "David Mecorvin — Chef de Projet Digital & Product Owner Senior";
const description =
  "Portfolio de David Mecorvin, Chef de Projet Digital et Product Owner Senior spécialisé en banque, retail, e-commerce, delivery et projets digitaux complexes.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "David Mecorvin — Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${grotesk.variable} ${plexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
