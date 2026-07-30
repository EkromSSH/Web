import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "EkromNetVPN",
  description: "VPN ความเร็วสูง เสถียร ไม่หลุด",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-[#0b0f1a] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
