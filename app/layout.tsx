import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "custain – Nachhaltig Kunden binden",
  description: "custain unterstützt Unternehmen beim Aufbau moderner Kundenbeziehungen: mit Strategie, Erfahrung und KI.",
  openGraph: {
    title: "custain – Nachhaltig Kunden binden",
    description: "custain unterstützt Unternehmen beim Aufbau moderner Kundenbeziehungen: mit Strategie, Erfahrung und KI.",
    url: "https://www.custain.de",
    siteName: "custain",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
