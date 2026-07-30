"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f1a]/95 backdrop-blur-md border-b border-[#1e2d47]">
      <div className="flex items-center justify-between px-4 h-14">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#00e68a] to-[#00bcd4] rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">E</span>
          </div>
          <span className="font-bold text-sm">EkromNetVPN</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/login" className="text-xs px-4 py-1.5 rounded-full bg-[#00e68a] text-black font-bold">เข้าสู่ระบบ</Link>
          <button onClick={() => setOpen(!open)} className="text-lg w-8 h-8 flex items-center justify-center">☰</button>
        </div>
      </div>
      {open && (
        <div className="bg-[#111927] border-t border-[#1e2d47] px-4 py-3 text-sm space-y-3">
          <Link href="/" className="block py-1" onClick={() => setOpen(false)}>หน้าแรก</Link>
          <Link href="/order" className="block py-1" onClick={() => setOpen(false)}>สั่งซื้อ</Link>
          <Link href="/account" className="block py-1" onClick={() => setOpen(false)}>บัญชีของฉัน</Link>
          <Link href="/contact" className="block py-1" onClick={() => setOpen(false)}>ติดต่อเรา</Link>
          <Link href="/login" className="block py-1" onClick={() => setOpen(false)}>เข้าสู่ระบบ</Link>
          <Link href="/register" className="block py-1" onClick={() => setOpen(false)}>สมัครสมาชิก</Link>
        </div>
      )}
    </nav>
  );
}
