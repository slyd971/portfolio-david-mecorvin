import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "../styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "David Mecorvin — Chef de Projet Digital / Product Owner",
  description: "Portfolio de David Mecorvin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${plexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
