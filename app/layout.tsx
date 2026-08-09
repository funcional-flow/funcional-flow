import type { Metadata } from "next";
import {
  Geist,
  Teko,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Funcional Flow",
  description: "Core - À Prova de Balas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${teko.variable} h-full antialiased`}
    >
      <body className="flex flex-col font-teko text-lg tracking-wide">{children}</body>
    </html>
  );
}
