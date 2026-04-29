import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Central do Concreto — Artefatos de Concreto em Ivoti-RS",
  description:
    "Fabricante de artefatos de concreto em Ivoti-RS. Tubos, PAVS, fossas, muros, postes e mais. Direto da fábrica, com normas técnicas e entrega na Serra Gaúcha.",
  keywords: [
    "artefatos de concreto",
    "tubos de concreto",
    "muros de concreto",
    "pavs",
    "fossas sépticas",
    "Ivoti",
    "Serra Gaúcha",
    "Central do Concreto",
  ],
  authors: [{ name: "Central do Concreto" }],
  openGraph: {
    title: "Central do Concreto — Artefatos de Concreto em Ivoti-RS",
    description:
      "Direto da fábrica. Normas técnicas de fabricação. Entrega em Ivoti, Gramado, Canela e Serra Gaúcha.",
    type: "website",
    locale: "pt_BR",
    siteName: "Central do Concreto",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
