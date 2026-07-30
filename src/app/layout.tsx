import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "EkromNetVPN",
  description: "VPN ความเร็วสูง ราคาเข้าถึง",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${inter.variable} bg-[#0b0f1a] text-[#e2e8f0]`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}