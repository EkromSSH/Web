import Link from "next/link";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b0f1a]">
      <nav className="bg-[#0b0f1a]/95 backdrop-blur border-b border-[#1e2d47] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-[#00e68a]">
            Ekrom<span className="text-[#00bcd4]">Net</span>VPN
          </Link>
          <div className="hidden md:flex items-center gap-5 text-sm">
            <Link href="/" className="hover:text-[#00e68a]">หน้าแรก</Link>
            <Link href="/order" className="hover:text-[#00e68a]">สั่งซื้อ</Link>
            <Link href="/contact" className="hover:text-[#00e68a]">ติดต่อ</Link>
            <Link href="/login" className="px-4 py-1.5 rounded bg-[#00e68a] text-black font-bold text-xs">เข้าสู่ระบบ</Link>
          </div>
          <button className="md:hidden text-lg">☰</button>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-[#111927] border-t border-[#1e2d47] mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-xs text-[#64748b] text-center">
          © 2026 EkromNetVPN · @578infzg
        </div>
      </footer>
    </div>
  );
}