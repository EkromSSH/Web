import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EkromNetVPN — VPN ความเร็วสูง เสถียร ไม่หลุด",
  description: "บริการ VPN คุณภาพสูง รองรับ AIS, True, DTAC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-[#080c1a] text-white font-sans antialiased">
        {/* Top navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#080c1a]/90 backdrop-blur-md border-b border-[#1a1f35]">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-xl flex items-center justify-center shadow-lg shadow-[#a855f7]/30">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <span className="text-base font-extrabold text-white">Ekrom</span>
                <span className="text-base font-extrabold text-[#22d3ee]">Net</span>
                <span className="text-base font-extrabold text-white">VPN</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm text-[#94a3b8] hover:text-[#22d3ee] transition">หน้าแรก</Link>
              <Link href="/order" className="text-sm text-[#94a3b8] hover:text-[#22d3ee] transition">สั่งซื้อ</Link>
              <Link href="/contact" className="text-sm text-[#94a3b8] hover:text-[#22d3ee] transition">ติดต่อเรา</Link>
              <Link href="/login" className="px-5 py-1.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-xs shadow-lg shadow-[#a855f7]/20">
                เข้าสู่ระบบ
              </Link>
            </nav>

            <Link href="/login" className="md:hidden px-4 py-1.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-xs">
              เข้าสู่ระบบ
            </Link>
          </div>
        </header>

        <main className="pt-14">{children}</main>

        {/* Footer */}
        <footer className="bg-[#080c1a] border-t border-[#1a1f35] py-6 text-center text-xs text-[#4a5580]">
          <div className="max-w-6xl mx-auto px-4">
            <p>© 2026 EkromNetVPN. สงวนลิขสิทธิ์</p>
            <p className="mt-1">LINE: @578infzg · Telegram: @ekrom_support</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
