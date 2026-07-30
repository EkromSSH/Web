"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden bg-[#080c1a]">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-12 grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-xs font-medium mb-5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              VPN คุณภาพสูง
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              VPN ความเร็วสูง<br/>
              <span className="bg-gradient-to-r from-[#22c55e] via-[#22d3ee] to-[#a855f7] bg-clip-text text-transparent">เสถียร ไม่หลุด</span>
            </h1>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-8">
              รองรับทุกการใช้งาน ปลอดภัย ไม่เก็บบันทึก<br/>
              AIS · True · DTAC ราคาเริ่มต้น 50 บาท
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: "⚡", label: "ความเร็วสูง", desc: "เน็ตแรง ดูชัด" },
                { icon: "🛡️", label: "ปลอดภัย", desc: "น่าเชื่อถือ" },
                { icon: "📱", label: "ใช้งานง่าย", desc: "ทุกอุปกรณ์" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-[#0f1326] border border-[#1a1f35] rounded-xl px-4 py-2.5">
                  <span className="text-xl">{f.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-white">{f.label}</div>
                    <div className="text-[10px] text-[#4a5580]">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href="/order" className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-sm shadow-lg shadow-[#a855f7]/20">
                🛒 สั่งซื้อเลย
              </Link>
              <Link href="/register" className="px-7 py-3 rounded-xl border border-[#1a1f35] text-white text-sm font-medium hover:border-[#a855f7]/30 transition">
                สมัครสมาชิก
              </Link>
            </div>
          </div>

          {/* Right: Shield illustration */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-[#a855f7]/20 to-[#22d3ee]/20 rounded-full blur-2xl absolute" />
              <div className="relative w-60 h-60 bg-gradient-to-br from-[#0f1326] to-[#1a1f35] rounded-3xl flex items-center justify-center border border-[#1a1f35] shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#22c55e] to-[#22d3ee] rounded-2xl flex items-center justify-center mb-3 shadow-xl shadow-[#22c55e]/30">
                    <svg className="w-14 h-14 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div className="text-xs text-[#4a5580]">การเชื่อมต่อที่ปลอดภัย</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Network Selection ===== */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-[#a855f7] to-[#22d3ee] rounded-full" />
          <h2 className="text-lg font-bold">เลือกเครือข่ายที่ใช้งาน</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "AIS", icon: "📶", color: "from-[#22c55e]/10", border: "border-[#22c55e]/20", badge: "text-[#22c55e]", desc: "สัญญาณเครือข่าย AIS" },
            { name: "True", icon: "📡", color: "from-[#a855f7]/10", border: "border-[#a855f7]/20", badge: "text-[#a855f7]", desc: "สัญญาณเครือข่าย True" },
            { name: "DTAC", icon: "📱", color: "from-[#22d3ee]/10", border: "border-[#22d3ee]/20", badge: "text-[#22d3ee]", desc: "สัญญาณเครือข่าย DTAC" },
          ].map((n, i) => (
            <div key={i} className={`bg-gradient-to-br ${n.color} bg-[#0f1326] border ${n.border} rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition`}>
              <div className="w-14 h-14 bg-[#080c1a] rounded-xl flex items-center justify-center text-3xl">{n.icon}</div>
              <div className="flex-1">
                <div className="font-bold text-white text-base">{n.name}</div>
                <div className="text-xs text-[#94a3b8]">{n.desc}</div>
              </div>
              <Link href="/order" className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-xs shadow-lg">
                เลือกแพ็กเกจ
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Packages ===== */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-[#a855f7] to-[#22d3ee] rounded-full" />
          <h2 className="text-lg font-bold">แพ็กเกจ</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { d: "1 เดือน", p: "50", dev: "2 อุปกรณ์", hit: false },
            { d: "3 เดือน", p: "130", dev: "2 อุปกรณ์", hit: false },
            { d: "6 เดือน", p: "240", dev: "2 อุปกรณ์", hit: true },
            { d: "12 เดือน", p: "420", dev: "2 อุปกรณ์", hit: false },
          ].map((pkg, i) => (
            <div key={i} className={`relative bg-[#0f1326] rounded-2xl p-5 text-center border ${pkg.hit ? 'border-[#a855f7] shadow-lg shadow-[#a855f7]/10' : 'border-[#1a1f35]'}`}>
              {pkg.hit && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black text-[9px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  ขายดี 🔥
                </div>
              )}
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#22d3ee]">{pkg.p}</div>
              <div className="text-[9px] text-[#4a5580] mb-3">บาท</div>
              <div className="text-sm font-bold text-white">{pkg.d}</div>
              <div className="text-[9px] text-[#94a3b8] mt-1">{pkg.dev}</div>
              <Link href="/order" className="block mt-3 py-2 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-xs shadow-lg">
                เลือก
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Supported Apps ===== */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-[#a855f7] to-[#22d3ee] rounded-full" />
          <h2 className="text-lg font-bold">แอปที่รองรับ</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { icon: "🛡️", name: "NPV Tunnel" },
            { icon: "📦", name: "V2Box" },
            { icon: "🚀", name: "v2rayNG" },
            { icon: "🎵", name: "Streisand" },
            { icon: "⚔️", name: "Clash Meta" },
            { icon: "🔒", name: "Hiddify" },
          ].map((a, i) => (
            <div key={i} className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-4 text-center hover:border-[#a855f7]/30 transition">
              <div className="text-2xl mb-1.5">{a.icon}</div>
              <div className="text-xs font-medium text-white/80">{a.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-[#a855f7] to-[#22d3ee] rounded-full" />
          <h2 className="text-lg font-bold">ทำไมต้องเลือกเรา?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: "✅", text: "ใช้ได้ไม่จำกัด GB ไม่มี FUP" },
            { icon: "✅", text: "รองรับหลาย Protocol (VMESS, VLESS)" },
            { icon: "✅", text: "แอดมินดูแล 24 ชั่วโมง" },
            { icon: "✅", text: "ราคาประหยัด คุณภาพระดับพรีเมียม" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#0f1326] border border-[#1a1f35] rounded-xl px-4 py-3.5">
              <span className="text-[#22c55e] text-base">{item.icon}</span>
              <span className="text-sm text-[#c8d0dc]">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Contact CTA ===== */}
      <section className="px-4 py-12">
        <div className="max-w-md mx-auto bg-gradient-to-br from-[#0f1326] to-[#080c1a] border border-[#1a1f35] rounded-2xl p-6 text-center">
          <div className="text-4xl mb-3">💬</div>
          <h3 className="font-bold text-white text-lg mb-1">ติดต่อแอดมิน</h3>
          <p className="text-xs text-[#94a3b8] mb-5">ตอบกลับทุกปัญหา 24 ชั่วโมง</p>
          <div className="flex flex-col gap-2.5">
            <a href="https://line.me/R/ti/p/@578infzg" className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#06c755] text-white font-bold text-sm">
              💬 LINE: @578infzg
            </a>
          </div>
        </div>
      </section>

      {/* Floating contact */}
      <Link href="https://line.me/R/ti/p/@578infzg" className="fixed bottom-5 right-5 w-14 h-14 bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-full flex items-center justify-center text-2xl shadow-xl shadow-[#a855f7]/30 z-50">
        💬
      </Link>
    </div>
  );
}
