"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] overflow-x-hidden">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f1a]/95 backdrop-blur-lg border-b border-[#1e2d47]">
        <div className="max-w-md mx-auto flex items-center justify-between px-4 h-12">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00e68a] to-[#0099ff] rounded-xl flex items-center justify-center shadow-lg shadow-[#00e68a]/20">
              <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <span className="text-xs font-bold text-white">Ekrom</span>
              <span className="text-xs font-bold text-[#00e68a]">Net</span>
              <span className="text-xs font-bold text-white">VPN</span>
            </div>
          </Link>
          <Link href="/login" className="text-[10px] px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00e68a] to-[#0099ff] text-black font-bold shadow-lg shadow-[#00e68a]/20">เข้าสู่ระบบ</Link>
        </div>
      </div>

      <div className="max-w-md mx-auto pt-12">
        {/* Hero */}
        <div className="relative px-4 pt-8 pb-6 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00e68a]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0099ff]/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#00e68a] to-[#0099ff] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#00e68a]/30 mb-4">
              <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h1 className="text-xl font-black text-center leading-snug mb-2">
              VPN ความเร็วสูง<br/>
              <span className="bg-gradient-to-r from-[#00e68a] to-[#0099ff] bg-clip-text text-transparent">เสถียร ไม่หลุด</span>
            </h1>
            <p className="text-xs text-center text-[#64748b] mb-5">รองรับ AIS · True · DTAC เริ่ม 50 บาท</p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/order" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00e68a] to-[#0099ff] text-black font-bold text-xs shadow-lg shadow-[#00e68a]/20 transition hover:shadow-xl">🛒 สั่งซื้อเลย</Link>
              <Link href="/register" className="px-6 py-2.5 rounded-xl border border-[#1e2d47] text-white text-xs transition hover:border-[#00e68a]/50">สมัครสมาชิก</Link>
            </div>
          </div>
        </div>

        {/* Features strip */}
        <div className="px-4 mb-5">
          <div className="flex gap-2">
            {[
              { i: "⚡", t: "ความเร็วสูง" },
              { i: "🛡️", t: "ปลอดภัย" },
              { i: "📱", t: "ใช้งานง่าย" },
            ].map((f, i) => (
              <div key={i} className="flex-1 bg-[#111927] border border-[#1e2d47] rounded-xl py-2.5 text-center">
                <div className="text-lg mb-0.5">{f.i}</div>
                <div className="text-[9px] text-[#64748b] font-medium">{f.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Network */}
        <div className="px-4 mb-5">
          <h2 className="text-xs font-bold mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-[#00e68a] to-[#0099ff] rounded-full" />
            เลือกเครือข่าย
          </h2>
          <div className="space-y-2.5">
            {[
              { n: "AIS", i: "📶", c: "from-green-500/10", b: "border-green-500/20", bg: "bg-green-500/5" },
              { n: "True", i: "📡", c: "from-blue-500/10", b: "border-blue-500/20", bg: "bg-blue-500/5" },
              { n: "DTAC", i: "📱", c: "from-red-500/10", b: "border-red-500/20", bg: "bg-red-500/5" },
            ].map((n, i) => (
              <div key={i} className={`flex items-center gap-3 bg-gradient-to-r ${n.c} bg-[#111927] border ${n.b} rounded-xl p-3.5`}>
                <div className={`w-10 h-10 ${n.bg} border ${n.b} rounded-xl flex items-center justify-center text-lg`}>{n.i}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold">{n.n}</div>
                  <div className="text-[10px] text-[#64748b]">สัญญาณเครือข่าย {n.n}</div>
                </div>
                <Link href="/order" className="shrink-0 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#00e68a] to-[#0099ff] text-black font-bold text-[10px] shadow-md">เลือกเลย</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Packages - 2x2 */}
        <div className="px-4 mb-5">
          <h2 className="text-xs font-bold mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-[#00e68a] to-[#0099ff] rounded-full" />
            แพ็กเกจ
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { d: "1 เดือน", p: "50", hit: false },
              { d: "3 เดือน", p: "130", hit: false },
              { d: "6 เดือน", p: "240", hit: true },
              { d: "12 เดือน", p: "420", hit: false },
            ].map((pkg, i) => (
              <div key={i} className={`relative bg-[#111927] rounded-2xl p-4 text-center border ${pkg.hit ? 'border-[#00e68a] shadow-lg shadow-[#00e68a]/10' : 'border-[#1e2d47]'}`}>
                {pkg.hit && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00e68a] to-[#0099ff] text-black text-[8px] font-bold px-2 py-0.5 rounded-full">🔥 ขายดี</div>}
                <div className="text-2xl font-black bg-gradient-to-r from-[#00e68a] to-[#0099ff] bg-clip-text text-transparent">{pkg.p}</div>
                <div className="text-[8px] text-[#64748b] mb-1">บาท</div>
                <div className="text-xs font-medium text-white/90">{pkg.d}</div>
                <div className="text-[8px] text-[#445566] mb-3">2 อุปกรณ์</div>
                <Link href="/order" className="block py-1.5 rounded-xl bg-gradient-to-r from-[#00e68a] to-[#0099ff] text-black font-bold text-[10px] shadow-sm">เลือก</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Apps */}
        <div className="px-4 mb-5">
          <h2 className="text-xs font-bold mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-[#00e68a] to-[#0099ff] rounded-full" />
            แอปที่รองรับ
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              { i: "🛡️", n: "NPV" },
              { i: "📦", n: "V2Box" },
              { i: "🚀", n: "v2rayNG" },
              { i: "🎵", n: "Streisand" },
              { i: "⚔️", n: "Clash" },
              { i: "🔒", n: "Hiddify" },
            ].map((a, idx) => (
              <div key={idx} className="bg-[#111927] border border-[#1e2d47] rounded-xl py-3 text-center">
                <div className="text-xl mb-1">{a.i}</div>
                <div className="text-[9px] text-[#64748b]">{a.n}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why */}
        <div className="px-4 mb-5">
          <h2 className="text-xs font-bold mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-[#00e68a] to-[#0099ff] rounded-full" />
            ทำไมต้องเลือกเรา?
          </h2>
          <div className="space-y-2">
            {[
              { i: "✅", t: "ใช้ได้ไม่จำกัด GB ไม่มี FUP" },
              { i: "✅", t: "รองรับหลาย Protocol" },
              { i: "✅", t: "แอดมินดูแล 24 ชั่วโมง" },
              { i: "✅", t: "ราคาประหยัด คุณภาพระดับพรีเมียม" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-[#111927] border border-[#1e2d47] rounded-xl px-3.5 py-3">
                <span className="text-sm shrink-0">{item.i}</span>
                <span className="text-xs text-[#c8d0dc]">{item.t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="px-4 pb-24">
          <div className="bg-gradient-to-br from-[#111927] to-[#0b0f1a] border border-[#1e2d47] rounded-2xl p-5 text-center">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="text-sm font-bold mb-1">ติดต่อแอดมิน</h3>
            <p className="text-[10px] text-[#64748b] mb-4">ตอบกลับทุกปัญหา 24 ชั่วโมง</p>
            <a href="https://line.me/R/ti/p/@578infzg" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00e68a] to-[#0099ff] text-black font-bold text-xs shadow-lg shadow-[#00e68a]/20">
              💬 @578infzg
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1e2d47] py-4 text-center text-[9px] text-[#445566]">
          © 2026 EkromNetVPN · LINE: @578infzg
        </div>
      </div>

      {/* Floating */}
      <a href="https://line.me/R/ti/p/@578infzg" className="fixed bottom-5 right-5 w-12 h-12 bg-gradient-to-br from-[#00e68a] to-[#0099ff] rounded-full flex items-center justify-center text-lg shadow-2xl shadow-[#00e68a]/30 z-50">💬</a>
    </div>
  );
}
