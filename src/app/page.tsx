"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121826]">
      {/* ===== Navbar ===== */}
      <div className="sticky top-0 z-50 bg-[#121826]/95 backdrop-blur border-b border-[#2a3450]">
        <div className="max-w-lg mx-auto px-3 h-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-lg flex items-center justify-center shadow-sm">
              <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <span className="text-sm font-bold">Ekrom<span className="text-[#22d3ee]">Net</span>VPN</span>
          </Link>
          <Link href="/login" className="text-xs px-4 py-1.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold">เข้าสู่ระบบ</Link>
        </div>
      </div>

      {/* ===== Hero ===== */}
      <div className="text-center pt-8 pb-6 px-3">
        <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#22c55e] to-[#22d3ee] rounded-xl flex items-center justify-center text-xl mb-3 shadow-md">
          🛡️
        </div>
        <h1 className="text-xl font-black mb-1">VPN ความเร็วสูง <span className="bg-gradient-to-r from-[#22c55e] via-[#22d3ee] to-[#a855f7] bg-clip-text text-transparent">เสถียร ไม่หลุด</span></h1>
        <p className="text-xs text-[#94a3b8] mb-4">รองรับ AIS · True · DTAC เริ่ม 50 บ.</p>
        <div className="flex justify-center gap-2 mb-5">
          {[
            { i: "⚡", t: "ความเร็วสูง" },
            { i: "🛡️", t: "ปลอดภัย" },
            { i: "📱", t: "ใช้งานง่าย" },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-[#1a2235] border border-[#2a3450] rounded-lg px-3 py-1.5">
              <span className="text-base">{f.i}</span>
              <span className="text-[10px] text-[#94a3b8]">{f.t}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2 justify-center">
          <Link href="/order" className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-xs shadow-md">🛒 สั่งซื้อเลย</Link>
          <Link href="/register" className="px-5 py-2 rounded-xl border border-[#2a3450] text-white text-xs">สมัครสมาชิก</Link>
        </div>
      </div>

      {/* ===== Network ===== */}
      <div className="px-3 py-4">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-1 h-4 bg-gradient-to-b from-[#a855f7] to-[#22d3ee] rounded-full" />
          <h2 className="text-sm font-bold">เลือกเครือข่าย</h2>
        </div>
        <div className="space-y-2">
          {[
            { n: "AIS", i: "📶", c: "from-[#22c55e]/10", b: "border-[#22c55e]/20" },
            { n: "True", i: "📡", c: "from-[#a855f7]/10", b: "border-[#a855f7]/20" },
            { n: "DTAC", i: "📱", c: "from-[#22d3ee]/10", b: "border-[#22d3ee]/20" },
          ].map((n, i) => (
            <div key={i} className={`flex items-center gap-3 bg-gradient-to-r ${n.c} bg-[#1a2235] border ${n.b} rounded-xl p-3`}>
              <div className="w-10 h-10 bg-[#121826] rounded-lg flex items-center justify-center text-xl">{n.i}</div>
              <div className="flex-1">
                <div className="text-sm font-bold">{n.n}</div>
                <div className="text-[10px] text-[#94a3b8]">สัญญาณเครือข่าย {n.n}</div>
              </div>
              <Link href="/order" className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-[10px]">เลือกแพ็กเกจ</Link>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Packages ===== */}
      <div className="px-3 py-4">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-1 h-4 bg-gradient-to-b from-[#a855f7] to-[#22d3ee] rounded-full" />
          <h2 className="text-sm font-bold">แพ็กเกจ</h2>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { d: "1 เดือน", p: "50", hit: false },
            { d: "3 เดือน", p: "130", hit: false },
            { d: "6 เดือน", p: "240", hit: true },
            { d: "12 เดือน", p: "420", hit: false },
          ].map((pkg, i) => (
            <div key={i} className={`relative bg-[#1a2235] rounded-xl p-3 text-center border ${pkg.hit ? 'border-[#a855f7] shadow-sm' : 'border-[#2a3450]'}`}>
              {pkg.hit && <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black text-[8px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">🔥 ขายดี</div>}
              <div className="text-xl font-black bg-gradient-to-r from-[#22c55e] to-[#22d3ee] bg-clip-text text-transparent">{pkg.p}</div>
              <div className="text-[8px] text-[#64748b]">บาท</div>
              <div className="text-[11px] font-bold">{pkg.d}</div>
              <Link href="/order" className="block mt-2 py-1.5 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-[10px]">เลือก</Link>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Apps ===== */}
      <div className="px-3 py-4">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-1 h-4 bg-gradient-to-b from-[#a855f7] to-[#22d3ee] rounded-full" />
          <h2 className="text-sm font-bold">แอปที่รองรับ</h2>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {["🛡️ NPV", "📦 V2Box", "🚀 v2rayNG", "🎵 Streisand", "⚔️ Clash", "🔒 Hiddify"].map((a, i) => (
            <div key={i} className="shrink-0 bg-[#1a2235] border border-[#2a3450] rounded-xl px-4 py-3 text-center min-w-[75px]">
              <div className="text-xl mb-1">{a.split(" ")[0]}</div>
              <div className="text-[10px] text-[#94a3b8]">{a.split(" ")[1]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Why Choose Us ===== */}
      <div className="px-3 py-4">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-1 h-4 bg-gradient-to-b from-[#a855f7] to-[#22d3ee] rounded-full" />
          <h2 className="text-sm font-bold">ทำไมต้องเลือกเรา?</h2>
        </div>
        <div className="space-y-1.5">
          {["ใช้ได้ไม่จำกัด GB", "รองรับหลาย Protocol", "แอดมินดูแล 24 ชม.", "ราคาประหยัด คุณภาพสูง"].map((t, i) => (
            <div key={i} className="flex items-center gap-2 bg-[#1a2235] border border-[#2a3450] rounded-lg px-3 py-2.5">
              <span className="text-[#22c55e] text-sm">✅</span>
              <span className="text-xs text-[#c8d0dc]">{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Contact ===== */}
      <div className="px-3 py-4 pb-24">
        <div className="bg-[#1a2235] border border-[#2a3450] rounded-xl p-4 text-center">
          <div className="text-2xl mb-1">💬</div>
          <h3 className="text-sm font-bold mb-1">ติดต่อแอดมิน</h3>
          <p className="text-[10px] text-[#94a3b8] mb-3">ตอบกลับ 24 ชม.</p>
          <a href="https://line.me/R/ti/p/@578infzg" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-xs shadow-md">💬 @578infzg</a>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <div className="border-t border-[#2a3450] py-3 text-center text-[10px] text-[#64748b]">
        © 2026 EkromNetVPN · LINE: @578infzg
      </div>

      {/* Floating button */}
      <a href="https://line.me/R/ti/p/@578infzg" className="fixed bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-full flex items-center justify-center text-xl shadow-lg z-50">💬</a>
    </div>
  );
}
