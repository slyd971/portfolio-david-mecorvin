import "../styles/globals.css";

export const metadata = {
  title: "David Mecorvin — Chef de Projet Digital / Product Owner",
  description: "Portfolio de David Mecorvin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}