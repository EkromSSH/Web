"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] pt-12 pb-20">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f1a]/95 backdrop-blur border-b border-[#1e2d47]">
        <div className="flex items-center justify-between px-4 h-12">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00e68a] to-[#00bcd4] rounded-lg flex items-center justify-center text-sm font-bold text-black">E</div>
            <span className="text-sm font-bold text-white">EkromNetVPN</span>
          </Link>
          <Link href="/login" className="text-xs px-4 py-1.5 rounded-full bg-[#00e68a] text-black font-bold">เข้าสู่ระบบ</Link>
        </div>
      </div>

      {/* Hero */}
      <div className="px-4 pt-10 pb-6 text-center">
        <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#00e68a] to-[#00bcd4] rounded-2xl flex items-center justify-center text-xl font-bold text-black mb-3">E</div>
        <h1 className="text-xl font-black mb-2">VPN ความเร็วสูง <span className="text-[#00e68a]">เสถียร ไม่หลุด</span></h1>
        <p className="text-xs text-[#64748b] mb-5">รองรับ AIS, True, DTAC เริ่ม 50 บาท</p>
        <div className="flex justify-center gap-2">
          <Link href="/order" className="px-5 py-2 rounded-xl bg-[#00e68a] text-black font-bold text-xs">🛒 สั่งซื้อเลย</Link>
          <Link href="/register" className="px-5 py-2 rounded-xl border border-[#1e2d47] text-white text-xs">สมัครสมาชิก</Link>
        </div>
      </div>

      {/* Network */}
      <div className="px-4 mb-5">
        <h2 className="text-sm font-bold mb-3">เลือกเครือข่าย</h2>
        <div className="space-y-2">
          {[
            { n: "AIS", i: "📶", c: "from-green-500/10", b: "border-green-500/20" },
            { n: "True", i: "📡", c: "from-blue-500/10", b: "border-blue-500/20" },
            { n: "DTAC", i: "📱", c: "from-red-500/10", b: "border-red-500/20" },
          ].map((n, i) => (
            <div key={i} className={`flex items-center gap-3 bg-gradient-to-r ${n.c} bg-[#111927] border ${n.b} rounded-xl p-3`}>
              <div className="w-10 h-10 bg-[#0b0f1a] rounded-lg flex items-center justify-center text-xl">{n.i}</div>
              <div className="flex-1"><div className="text-sm font-bold">{n.n}</div><div className="text-xs text-[#64748b]">สัญญาณเครือข่าย {n.n}</div></div>
              <Link href="/order" className="px-3 py-1.5 rounded-lg bg-[#00e68a] text-black font-bold text-[10px]">เลือกเลย</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="px-4 mb-5">
        <h2 className="text-sm font-bold mb-3">แพ็กเกจ</h2>
        <div className="grid grid-cols-4 gap-2">
          {[
            { d: "1 เดือน", p: "50" },
            { d: "3 เดือน", p: "130" },
            { d: "6 เดือน", p: "240", hit: true },
            { d: "12 เดือน", p: "420" },
          ].map((pkg, i) => (
            <div key={i} className={`bg-[#111927] rounded-xl p-3 text-center border ${pkg.hit ? 'border-[#00e68a]' : 'border-[#1e2d47]'}`}>
              {pkg.hit && <div className="text-[8px] text-[#00e68a] font-bold mb-0.5">🔥 ขายดี</div>}
              <div className="text-xl font-bold text-[#00e68a]">{pkg.p}</div>
              <div className="text-[8px] text-[#64748b]">บาท</div>
              <div className="text-[10px] text-white/80 mt-0.5">{pkg.d}</div>
              <Link href="/order" className="block mt-2 py-1.5 rounded-lg bg-[#00e68a] text-black font-bold text-[10px]">เลือก</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Apps */}
      <div className="px-4 mb-5">
        <h2 className="text-sm font-bold mb-3">แอปที่รองรับ</h2>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {["🛡️ NPV", "📦 V2Box", "🚀 v2rayNG", "🎵 Streisand", "⚔️ Clash", "🔒 Hiddify"].map((a, i) => (
            <div key={i} className="shrink-0 bg-[#111927] border border-[#1e2d47] rounded-xl px-4 py-3 text-center min-w-[80px]">
              <div className="text-xl mb-1">{a.split(" ")[0]}</div>
              <div className="text-[10px] text-[#64748b]">{a.split(" ")[1]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why */}
      <div className="px-4 mb-5">
        <h2 className="text-sm font-bold mb-3">ทำไมต้องเลือกเรา?</h2>
        <div className="space-y-2">
          {["ใช้ได้ไม่จำกัด GB", "รองรับหลาย Protocol", "แอดมินดูแล 24 ชม.", "ราคาประหยัด คุณภาพสูง"].map((t, i) => (
            <div key={i} className="flex items-center gap-2 bg-[#111927] border border-[#1e2d47] rounded-lg px-3 py-2.5">
              <span className="text-[#00e68a] text-sm">✅</span>
              <span className="text-xs text-[#c8d0dc]">{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="px-4 pb-24">
        <div className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4 text-center">
          <div className="text-2xl mb-1">💬</div>
          <h3 className="text-sm font-bold mb-1">ติดต่อแอดมิน</h3>
          <p className="text-[10px] text-[#64748b] mb-3">ตอบกลับ 24 ชม.</p>
          <a href="https://line.me/R/ti/p/@578infzg" className="inline-block px-4 py-2 rounded-lg bg-[#00e68a] text-black font-bold text-xs">💬 @578infzg</a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1e2d47] py-3 text-center text-[10px] text-[#445566]">
        © 2026 EkromNetVPN · LINE: @578infzg
      </div>

      {/* Floating */}
      <a href="https://line.me/R/ti/p/@578infzg" className="fixed bottom-4 right-4 w-12 h-12 bg-[#00e68a] rounded-full flex items-center justify-center text-xl shadow-lg z-50">💬</a>
    </div>
  );
}
