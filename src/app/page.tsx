"use client";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-[#0d1321]">
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
              รองรับทุกการใช้งาน ไม่มีการบันทึก log ปลอดภัยทุกครั้ง< br/>
              รองรับ AIS, True, DTAC ทุกรูปแบบ
            </p>
            <div className="flex gap-4 mb-8">
              <a href="/order" className="px-6 py-3 rounded-xl bg-[#00e68a] text-black font-bold text-sm hover:bg-[#00bcd4] transition">สั่งซื้อเลย</a>
              <a href="/contact" className="px-6 py-3 rounded-xl border border-[#1e2d47] text-sm hover:border-[#00e68a] transition">ติดต่อแอดมิน</a>
            </div>
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
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00e68a] to-[#00bcd4] rounded-2xl flex items-center justify-center text-2xl font-bold text-black mb-2">E</div>
                <h3 className="font-bold">EkromNetVPN</h3>
                <p className="text-xs text-[#64748b]">เชื่อมต่อปลอดภัย ไม่จำกัด GB</p>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between bg-[#0b0f1a] rounded-lg p-3"><span>🟢 AIS Server</span><span className="text-[#00e68a]">Online</span></div>
                <div className="flex justify-between bg-[#0b0f1a] rounded-lg p-3"><span>🟢 TRUE Server</span><span className="text-[#00e68a]">Online</span></div>
                <div className="flex justify-between bg-[#0b0f1a] rounded-lg p-3"><span>🟢 DTAC Server</span><span className="text-[#00e68a]">Online</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Network Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-2">เลือก<span className="text-[#00e68a]">เครือข่าย</span></h2>
        <p className="text-[#64748b] text-center mb-10">รองรับทุกเครือข่ายอันดับ 1 ของไทย</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "AIS", logo: "📺", desc: "AIS 4G/5G", price: "เริ่ม 50 บ.", color: "from-green-500/20 to-green-500/5", border: "border-green-500/30" },
            { name: "True", logo: "📶", desc: "True 4G/5G", price: "เริ่ม 50 บ.", color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/30" },
            { name: "DTAC", logo: "📱", desc: "DTAC 4G/5G", price: "เริ่ม 50 บ.", color: "from-red-500/20 to-red-500/5", border: "border-red-500/30" },
          ].map((n, i) => (
            <div key={i} className={`bg-gradient-to-b ${n.color} border ${n.border} rounded-2xl p-6 hover:scale-[1.02] transition`}>
              <div className="text-4xl mb-3">{n.logo}</div>
              <h3 className="text-xl font-bold mb-1">{n.name}</h3>
              <p className="text-sm text-[#94a3b8] mb-3">{n.desc}</p>
              <div className="text-sm text-[#00e68a] mb-4">{n.price}</div>
              <a href="/order" className="block text-center py-2 rounded-xl bg-[#00e68a] text-black font-bold text-sm hover:bg-[#00bcd4] transition">เลือกเลย →</a>
            </div>
          ))}
        </div>
      </section>
      {/* Packages */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-2">แพ็กเกจ<span className="text-[#00e68a]">ราคาประหยัด</span></h2>
        <p className="text-[#64748b] text-center mb-10">เลือกแพ็กเกจที่เหมาะกับคุณ</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { days: 1, price: 50, label: "1 เดือน", popular: false },
            { days: 3, price: 130, label: "3 เดือน", popular: false },
            { days: 6, price: 240, label: "6 เดือน", popular: true },
            { days: 12, price: 420, label: "12 เดือน", popular: false },
          ].map((p, i) => (
            <div key={i} className={`bg-[#111927] border rounded-2xl p-5 text-center ${p.popular ? 'border-[#00e68a]' : 'border-[#1e2d47]'}`}>
              {p.popular && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#00e68a] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">ขายดี</div>}
              <div className="text-3xl font-bold text-[#00e68a] mb-1">{p.price}</div>
              <div className="text-[10px] text-[#64748b] mb-3">บาท / {p.label}</div>
              <ul className="space-y-2 text-xs text-[#94a3b8] mb-5">
                <li>✅ 1-2 อุปกรณ์</li>
                <li>✅ ไม่จำกัด GB</li>
                <li>✅ ไม่หลุด</li>
              </ul>
              <a href="/order" className="block py-2 rounded-xl bg-[#00e68a] text-black font-bold text-xs hover:bg-[#00bcd4] transition">เลือก</a>
            </div>
          ))}
        </div>
      </section>
      {/* Supported Apps */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-[#0d1321]">
        <h2 className="text-2xl font-bold text-center mb-2">แอปที่<span className="text-[#00e68a]">รองรับ</span></h2>
        <p className="text-[#64748b] text-center mb-10">ใช้งานได้ทุก VPN Client</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { name: "NPV Tunnel", icon: "🛡️" },
            { name: "V2Box", icon: "📦" },
            { name: "v2rayNG", icon: "🚀" },
            { name: "Streisand", icon: "🎵" },
            { name: "Clash Meta", icon: "⚔️" },
            { name: "Hiddify", icon: "🔒" },
          ].map((a, i) => (
            <div key={i} className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4 text-center hover:border-[#00e68a]/30 transition">
              <div className="text-3xl mb-2">{a.icon}</div>
              <div className="text-sm font-semibold">{a.name}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Reviews */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-2">รีวิวจาก<span className="text-[#00e68a]">ลูกค้า</span></h2>
        <p className="text-[#64748b] text-center mb-10">เสียงจริงจากผู้ใช้บริการ</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "สมชาย", text: "ใช้มา 6 เดือนแล้ว เสถียรมาก แนะนำ!", stars: 5 },
            { name: "อนันต์", text: "ราคาถูก เน็ตแรง ใช้ True ได้ดี", stars: 5 },
            { name: "นารา", text: "สมัครง่าย ได้ config ทันที ประทับใจ", stars: 5 },
            { name: "ประกิต", text: "AIS VIP ไม่มีสะดุด เล่นเกมลื่น", stars: 4 },
          ].map((r, i) => (
            <div key={i} className="bg-[#111927] border border-[#1e2d47] rounded-2xl p-5">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.stars }).map((_, j) => <span key={j} className="text-[#ffc107] text-sm">★</span>)}
                {Array.from({ length: 5 - r.stars }).map((_, j) => <span key={j} className="text-[#333] text-sm">★</span>)}
              </div>
              <p className="text-sm text-[#94a3b8] mb-3">"{r.text}"</p>
              <div className="text-xs text-[#64748b]">— {r.name}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}