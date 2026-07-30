"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] pt-12 pb-20">
      {/* Hero */}
      <div className="px-4 py-10 text-center">
        <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#00e68a] to-[#00bcd4] rounded-2xl flex items-center justify-center text-2xl font-bold text-black mb-3">E</div>
        <h1 className="text-2xl font-black mb-2">VPN ความเร็วสูง <span className="text-[#00e68a]">เสถียร ไม่หลุด</span></h1>
        <p className="text-xs text-[#64748b] mb-6">รองรับ AIS, True, DTAC ราคาเริ่ม 50 บาท</p>
        <Link href="/order" className="inline-block px-8 py-3 rounded-xl bg-[#00e68a] text-black font-bold text-sm">🛒 สั่งซื้อเลย</Link>
      </div>

      {/* Network Cards */}
      <div className="px-4 mb-6">
        <h2 className="text-sm font-bold mb-3">เลือกเครือข่าย</h2>
        <div className="space-y-2">
          {[
            { name: "AIS", icon: "📺", desc: "AIS 4G/5G", color: "from-green-500/20 to-green-500/5", border: "border-green-500/30" },
            { name: "True", icon: "📶", desc: "True 4G/5G", color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/30" },
            { name: "DTAC", icon: "📱", desc: "DTAC 4G/5G", color: "from-red-500/20 to-red-500/5", border: "border-red-500/30" },
          ].map((n, i) => (
            <div key={i} className={`flex items-center gap-3 bg-gradient-to-r ${n.color} border ${n.border} rounded-xl p-3`}>
              <span className="text-2xl">{n.icon}</span>
              <div className="flex-1">
                <div className="font-bold text-sm">{n.name}</div>
                <div className="text-xs text-[#94a3b8]">{n.desc} · เริ่ม 50 บ.</div>
              </div>
              <Link href="/order" className="text-xs px-4 py-1.5 rounded-lg bg-[#00e68a] text-black font-bold">เลือกเลย</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="px-4 mb-6">
        <h2 className="text-sm font-bold mb-3">แพ็กเกจ</h2>
        <div className="grid grid-cols-4 gap-2">
          {[
            { d: "1 เดือน", p: "50" },
            { d: "3 เดือน", p: "130" },
            { d: "6 เดือน", p: "240", hit: true },
            { d: "12 เดือน", p: "420" },
          ].map((pkg, i) => (
            <div key={i} className={`bg-[#111927] rounded-xl p-3 text-center border ${pkg.hit ? 'border-[#00e68a]' : 'border-[#1e2d47]'}`}>
              {pkg.hit && <div className="text-[8px] text-[#00e68a] font-bold mb-1">🔥 ขายดี</div>}
              <div className="text-lg font-bold text-[#00e68a]">{pkg.p}</div>
              <div className="text-[9px] text-[#64748b]">บาท</div>
              <div className="text-[9px] text-[#94a3b8] mt-1">{pkg.d}</div>
            </div>
          ))}
        </div>
        <Link href="/order" className="block text-center mt-3 text-xs text-[#00e68a]">ดูทั้งหมด →</Link>
      </div>

      {/* Supported Apps */}
      <div className="px-4 mb-6">
        <h2 className="text-sm font-bold mb-3">แอปที่รองรับ</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["🛡️ NPV", "📦 V2Box", "🚀 v2rayNG", "🎵 Streisand", "⚔️ Clash", "🔒 Hiddify"].map((a, i) => (
            <div key={i} className="shrink-0 bg-[#111927] border border-[#1e2d47] rounded-xl px-4 py-3 text-center text-xs">
              <div className="text-lg mb-1">{a.split(" ")[0]}</div>
              <div className="text-[10px] text-[#64748b]">{a.split(" ")[1]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="px-4">
        <h2 className="text-sm font-bold mb-3">รีวิวลูกค้า</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[
            { n: "สมชาย", t: "ใช้มา 6 เดือน เสถียรมาก", s: 5 },
            { n: "อนันต์", t: "ราคาถูก เน็ตแรง ใช้ True", s: 5 },
            { n: "นารา", t: "สมัครง่าย ได้ config ทันที", s: 5 },
          ].map((r, i) => (
            <div key={i} className="shrink-0 w-56 bg-[#111927] border border-[#1e2d47] rounded-xl p-3">
              <div className="flex gap-0.5 mb-2">
                {Array.from({length: r.s}).map((_, j) => <span key={j} className="text-[#ffc107] text-xs">★</span>)}
              </div>
              <p className="text-xs text-[#94a3b8] mb-2">"{r.t}"</p>
              <div className="text-[10px] text-[#64748b]">— {r.n}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 px-4 text-center text-[10px] text-[#445566]">
        EkromNetVPN · LINE: @578infzg<br />
        © 2026
      </div>

      {/* Contact FAB */}
      <a href="https://line.me/R/ti/p/@578infzg" className="fixed bottom-4 right-4 w-12 h-12 bg-[#00e68a] rounded-full flex items-center justify-center text-xl shadow-lg shadow-[#00e68a]/30">💬</a>
    </div>
  );
}
