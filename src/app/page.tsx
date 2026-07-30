"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080b15] overflow-x-hidden">
      {/* Navbar glass */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#080b15]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-md mx-auto flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-[#00f5a0] to-[#00d9f5] rounded-xl flex items-center justify-center shadow-lg shadow-[#00f5a0]/30">
              <svg className="w-5 h-5 text-[#080b15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div className="leading-tight">
              <div className="text-[13px] font-extrabold text-white">Ekrom<span className="text-[#00f5a0]">Net</span>VPN</div>
              <div className="text-[8px] text-white/30 font-medium">เชื่อมต่อปลอดภัย</div>
            </div>
          </Link>
          <Link href="/login" className="text-[11px] px-5 py-2 rounded-xl bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-[#080b15] font-extrabold tracking-wide shadow-lg shadow-[#00f5a0]/25">เข้าสู่ระบบ</Link>
        </div>
      </div>

      <div className="max-w-md mx-auto pt-14">
        {/* Hero premium */}
        <div className="relative px-4 pt-10 pb-8">
          {/* Glow backgrounds */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00f5a0]/10 rounded-full blur-[80px]" />
          <div className="absolute top-10 right-0 w-32 h-32 bg-[#00d9f5]/10 rounded-full blur-[60px]" />
          
          <div className="relative">
            <div className="flex justify-center mb-5">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00f5a0] to-[#00d9f5] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#00f5a0]/40">
                  <svg className="w-8 h-8 text-[#080b15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#00f5a0] rounded-full flex items-center justify-center text-[9px] font-black text-[#080b15] shadow-lg shadow-[#00f5a0]/50">✦</div>
              </div>
            </div>
            <h1 className="text-[22px] font-black text-center leading-tight mb-2 tracking-tight">
              VPN ความเร็วสูง<br/>
              <span className="bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#a855f7] bg-clip-text text-transparent">เสถียร ปลอดภัย ไม่จำกัด</span>
            </h1>
            <p className="text-xs text-center text-white/40 mb-6">AIS · True · DTAC · เริ่มต้น 50 บาท</p>
            
            {/* CTA buttons premium */}
            <div className="flex flex-col gap-3 px-4">
              <Link href="/order" className="group relative w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-[#080b15] font-extrabold text-sm text-center overflow-hidden shadow-2xl shadow-[#00f5a0]/30 transition-all duration-300 hover:shadow-[#00f5a0]/50">
                <span className="relative z-10">🛒 สั่งซื้อเลย</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link href="/register" className="w-full py-3.5 rounded-2xl border border-white/10 text-white font-bold text-sm text-center backdrop-blur-sm bg-white/[0.02]">สมัครสมาชิก</Link>
            </div>
          </div>
        </div>

        {/* Premium features strip */}
        <div className="px-4 mb-6">
          <div className="grid grid-cols-3 gap-2">
            {[
              { i: "⚡", t: "ความเร็วสูง", s: "5G Ready" },
              { i: "🛡️", t: "ปลอดภัย", s: "AES-256" },
              { i: "📱", t: "ใช้งานง่าย", s: "ทุกอุปกรณ์" },
            ].map((f, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 text-center backdrop-blur-sm">
                <div className="text-2xl mb-1">{f.i}</div>
                <div className="text-[11px] font-bold text-white/90">{f.t}</div>
                <div className="text-[8px] text-white/30 mt-0.5">{f.s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Network premium */}
        <div className="px-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-gradient-to-b from-[#00f5a0] to-[#00d9f5] rounded-full" />
            <h2 className="text-sm font-bold text-white/90">เลือกเครือข่าย</h2>
          </div>
          <div className="space-y-2.5">
            {[
              { n: "AIS", i: "📶", tag: "4G/5G", color: "from-[#00f5a0]/5" },
              { n: "True", i: "📡", tag: "4G/5G", color: "from-[#00d9f5]/5" },
              { n: "DTAC", i: "📱", tag: "4G/5G", color: "from-[#a855f7]/5" },
            ].map((n, i) => (
              <div key={i} className={`group relative bg-gradient-to-r ${n.color} bg-white/[0.02] border border-white/10 rounded-2xl p-4 overflow-hidden transition-all duration-300 hover:border-white/20`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl">{n.i}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{n.n}</span>
                      <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-[#00f5a0]/10 text-[#00f5a0] font-medium">{n.tag}</span>
                    </div>
                    <div className="text-[10px] text-white/40">สัญญาณเครือข่าย {n.n}</div>
                  </div>
                  <Link href="/order" className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-[#080b15] font-extrabold text-[11px] shadow-lg shadow-[#00f5a0]/20">เลือกเลย</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages premium */}
        <div className="px-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-gradient-to-b from-[#00f5a0] to-[#00d9f5] rounded-full" />
            <h2 className="text-sm font-bold text-white/90">แพ็กเกจ</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { d: "1 เดือน", p: "50", u: "2 Users", tag: false },
              { d: "3 เดือน", p: "130", u: "2 Users", tag: false },
              { d: "6 เดือน", p: "240", u: "2 Users", tag: "🔥 BEST" },
              { d: "12 เดือน", p: "420", u: "2 Users", tag: false },
            ].map((pkg, i) => (
              <div key={i} className={`group relative bg-white/[0.03] border rounded-2xl p-4 text-center transition-all duration-300 hover:border-white/20 ${pkg.tag ? 'border-[#00f5a0]/50 shadow-lg shadow-[#00f5a0]/10' : 'border-white/10'}`}>
                {pkg.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-[#080b15] text-[9px] font-extrabold px-3 py-1 rounded-full shadow-lg shadow-[#00f5a0]/30">
                    {pkg.tag}
                  </div>
                )}
                <div className="text-3xl font-black bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] bg-clip-text text-transparent">{pkg.p}</div>
                <div className="text-[8px] text-white/30 mb-1">บาท</div>
                <div className="text-[13px] font-bold text-white/90">{pkg.d}</div>
                <div className="text-[9px] text-white/40 mb-4">{pkg.u}</div>
                <Link href="/order" className="block py-2.5 rounded-xl bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-[#080b15] font-extrabold text-[11px] shadow-lg shadow-[#00f5a0]/20 transition-all duration-300 hover:shadow-[#00f5a0]/40">
                  เลือก
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Apps premium */}
        <div className="px-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-gradient-to-b from-[#00f5a0] to-[#00d9f5] rounded-full" />
            <h2 className="text-sm font-bold text-white/90">แอปที่รองรับ</h2>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { i: "🛡️", n: "NPV", t: "Tunnel" },
              { i: "📦", n: "V2Box", t: "Client" },
              { i: "🚀", n: "v2rayNG", t: "Client" },
              { i: "🎵", n: "Streisand", t: "Client" },
              { i: "⚔️", n: "Clash", t: "Meta" },
              { i: "🔒", n: "Hiddify", t: "Next" },
            ].map((a, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20">
                <div className="text-2xl mb-1">{a.i}</div>
                <div className="text-[11px] font-bold text-white/90">{a.n}</div>
                <div className="text-[8px] text-white/30">{a.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why premium */}
        <div className="px-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-gradient-to-b from-[#00f5a0] to-[#00d9f5] rounded-full" />
            <h2 className="text-sm font-bold text-white/90">ทำไมต้องเลือกเรา?</h2>
          </div>
          <div className="space-y-2">
            {[
              { i: "✓", t: "ใช้ได้ไม่จำกัด GB ไม่มี FUP" },
              { i: "✓", t: "รองรับหลาย Protocol" },
              { i: "✓", t: "แอดมินดูแล 24 ชั่วโมง" },
              { i: "✓", t: "ราคาประหยัด คุณภาพพรีเมียม" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 backdrop-blur-sm">
                <div className="w-6 h-6 bg-gradient-to-br from-[#00f5a0] to-[#00d9f5] rounded-lg flex items-center justify-center text-[10px] font-black text-[#080b15] shadow-sm">{item.i}</div>
                <span className="text-[12px] text-white/70">{item.t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact premium */}
        <div className="px-4 pb-28">
          <div className="relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-6 text-center overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f5a0]/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#00f5a0] to-[#00d9f5] rounded-2xl flex items-center justify-center text-xl shadow-xl shadow-[#00f5a0]/30 mb-3">💬</div>
              <h3 className="text-base font-bold text-white/90 mb-1">ติดต่อแอดมิน</h3>
              <p className="text-[11px] text-white/40 mb-5">ตอบกลับทุกปัญหา 24 ชั่วโมง</p>
              <a href="https://line.me/R/ti/p/@578infzg" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-[#080b15] font-extrabold text-sm shadow-2xl shadow-[#00f5a0]/30 transition-all duration-300 hover:shadow-[#00f5a0]/50">
                <span>💬</span>
                @578infzg
              </a>
            </div>
          </div>
        </div>

        {/* Footer premium */}
        <div className="border-t border-white/5 py-4 px-4">
          <div className="text-center text-[9px] text-white/20 leading-relaxed">
            © 2026 EkromNetVPN<br/>
            LINE: @578infzg · Telegram: @ekrom_support
          </div>
        </div>
      </div>

      {/* Floating premium */}
      <a href="https://line.me/R/ti/p/@578infzg" className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-[#00f5a0] to-[#00d9f5] rounded-2xl flex items-center justify-center text-xl shadow-2xl shadow-[#00f5a0]/30 z-50 transition-all duration-300 hover:shadow-[#00f5a0]/50 hover:scale-105">
        💬
      </a>
    </div>
  );
}
