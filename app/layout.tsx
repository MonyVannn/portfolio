import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/header";

const roobert = localFont({ src: "../public/fonts/RoobertRegular.ttf" });

export const metadata: Metadata = {
  title: "Monyvann | Homepage",
  description: "Monyvann's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roobert.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
