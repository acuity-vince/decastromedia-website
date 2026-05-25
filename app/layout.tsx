import type { Metadata } from "next";
import { Bebas_Neue, Noto_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const notoSans = Noto_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "De Castro Media — AI Marketing Systems for B2B Teams",
  description:
    "AI audits, Claude team trainings, and fast B2B websites. Built for fintech and B2B teams that want to move faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${notoSans.variable} font-body antialiased bg-brand-black text-brand-white`}
      >
        {children}
      </body>
    </html>
  );
}
