import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HelpDesk + Parque Informático — Maqueta UI",
  description: "Mesa de ayuda con inventario IT y actas PDF con firma digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
