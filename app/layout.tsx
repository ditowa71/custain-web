import type { Metadata } from "next";
import { Spectral, Hanken_Grotesk, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const serif = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "custain – Customer Management & KI-Produkte",
  description:
    "custain verbindet strategische Kundenmanagement-Beratung mit eigener KI-Produktentwicklung. Köln.",
  openGraph: {
    title: "custain – Customer Management & KI-Produkte",
    description:
      "Strategische Kundenmanagement-Beratung und KI-Produktentwicklung aus Köln.",
    url: "https://www.custain.de",
    siteName: "custain",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
