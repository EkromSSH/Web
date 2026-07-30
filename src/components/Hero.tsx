"use client";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [show, setShow] = useState(false);
  return (
    <section className="relative overflow-hidden bg-[#0d1321]">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00e68a]/10 rounded-full blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e68a]/10 text-[#00e68a] text-xs font-medium mb-6">
            ⚡ VPN คุณภาพสูง
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
            VPN ความเร็วสูง <br/>
            <span className="text-[#00e68a]">เสถียร ไม่หลุด</span>
          </h1>
          <p className="text-[#94a3b8] mb-8">
            รองรับทุกการใช้งาน ไม่มีการบันทึก log ปลอดภัยทุกครั้ง<br/>
            รองรับ AIS, True, DTAC ทุกรูปแบบ
          </p>
          <div className="flex gap-4 mb-8">
            <Link href="/order" className="px-6 py-3 rounded-xl bg-[#00e68a] text-black font-bold text-sm hover:bg-[#00bcd4] transition">
              สั่งซื้อเลย
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-xl border border-[#1e2d47] text-sm hover:border-[#00e68a] transition">
              ติดต่อแอดมิน
            </Link>
          </div>
          {/* Features */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: "⚡", t: "ความเร็วสูง" },
              { icon: "🔗", t: "ไม่หลุด" },
              { icon: "📱", t: "ใช้ง่าย" },
            ].map((f, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-1">{f.icon}</div>
                <div className="text-xs text-[#94a3b8]">{f.t}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00e68a]/5 to-[#7c4dff]/5 rounded-3xl rotate-3" />
          <div className="relative bg-[#111927] border border-[#1e2d47] rounded-2xl p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00e68a] to-[#00bcd4] rounded-2xl flex items-center justify-center text-2xl font-bold text-black mb-2">
                E
              </div>
              <h3 className="font-bold">EkromNetVPN</h3>
              <p className="text-xs text-[#64748b]">เชื่อมต่อปลอดภัย ไม่จำกัด GB</p>
            </div>
            {/* Fake server status */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between bg-[#0b0f1a] rounded-lg p-3">
                <span>🟢 AIS Server</span>
                <span className="text-[#00e68a]">Online</span>
              </div>
              <div className="flex justify-between bg-[#0b0f1a] rounded-lg p-3">
                <span>🟢 TRUE Server</span>
                <span className="text-[#00e68a]">Online</span>
              </div>
              <div className="flex justify-between bg-[#0b0f1a] rounded-lg p-3">
                <span>🟢 DTAC Server</span>
                <span className="text-[#00e68a]">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}