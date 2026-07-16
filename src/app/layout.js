import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "../styles/globals.css";
import { siteUrl, siteName, siteTitle, siteDescription, siteKeywords } from "@/lib/site";

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

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | David Mecorvin",
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "David Mecorvin", url: siteUrl }],
  creator: "David Mecorvin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${grotesk.variable} ${plexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
