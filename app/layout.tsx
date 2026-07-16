import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";

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
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "any" },
      { url: "/favicon-16.png?v=5", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png?v=5", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png?v=5", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=5",
  },
  openGraph: {
    title: "Central do Concreto — Artefatos de Concreto em Ivoti-RS",
    description:
      "Direto da fábrica. Normas técnicas de fabricação. Entrega em Ivoti, Gramado, Canela e Serra Gaúcha.",
    type: "website",
    locale: "pt_BR",
    siteName: "Central do Concreto",
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
        {/* Consent Mode v2 · default DENIED antes do gtag.js (LGPD). Inline cru garante a ordem. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQLQ8E3VRJ"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`gtag('js', new Date()); gtag('config', 'G-DQLQ8E3VRJ');`}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
