"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-[#0b0f1a]/90 backdrop-blur-md border-b border-[#1e2d47]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#00e68a]">
          Ekrom<span className="text-[#00bcd4]">Net</span>VPN
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-[#00e68a] transition">หน้าแรก</Link>
          <Link href="/order" className="hover:text-[#00e68a] transition">สั่งซื้อ</Link>
          <Link href="/contact" className="hover:text-[#00e68a] transition">ติดต่อ</Link>
          <Link href="/login" className="px-4 py-1.5 rounded-lg bg-[#00e68a] text-black font-semibold hover:bg-[#00bcd4] transition">
            เข้าสู่ระบบ
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-xl">☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-[#111927] border-t border-[#1e2d47] px-4 py-4 space-y-3">
          <Link href="/" className="block" onClick={() => setOpen(false)}>หน้าแรก</Link>
          <Link href="/order" className="block" onClick={() => setOpen(false)}>สั่งซื้อ</Link>
          <Link href="/contact" className="block" onClick={() => setOpen(false)}>ติดต่อ</Link>
          <Link href="/login" className="block" onClick={() => setOpen(false)}>เข้าสู่ระบบ</Link>
        </div>
      )}
    </nav>
  );
}