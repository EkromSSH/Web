"use client";
import { useState } from "react";
import Link from "next/link";

const servers = [
  { id: 1, name: "AIS-VIP", icon: "📶", badge: "AIS", protocol: "VMESS · WS · 80", desc: "เซิร์ฟเวอร์ทั่วไป AIS 64K-128K" },
  { id: 2, name: "AIS-TCP", icon: "📡", badge: "AIS", protocol: "VMESS · TCP · 8080", desc: "เซิร์ฟเวอร์ TCP เสถียร" },
  { id: 3, name: "FB-GAMING", icon: "🎮", badge: "AIS/FB", protocol: "VMESS · TLS · 8000", desc: "TLS Encryption เล่นเกมได้" },
  { id: 4, name: "TRUE VLESS", icon: "📱", badge: "TRUE", protocol: "VLESS · WS · 2053", desc: "เซิร์ฟเวอร์ TRUE โดยเฉพาะ" },
];
const pkgList = [
  { k: "1", d: "1 เดือน", p: 50, dev: "2 อุปกรณ์" },
  { k: "3", d: "3 เดือน", p: 130, dev: "2 อุปกรณ์" },
  { k: "6", d: "6 เดือน", p: 240, dev: "2 อุปกรณ์" },
  { k: "12", d: "12 เดือน", p: 420, dev: "2 อุปกรณ์" },
];

export default function OrderPage() {
  const [step, setStep] = useState(1);
  const [server, setServer] = useState<number | null>(null);
  const [pkg, setPkg] = useState<string | null>(null);
  const total = pkgList.find(x => x.k === pkg)?.p || 0;

  return (
    <div className="min-h-screen pt-14 pb-20">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="text-xl font-bold text-center mb-1">🛒 สั่งซื้อ</h1>
        <p className="text-xs text-[#94a3b8] text-center mb-6">เลือกเซิร์ฟเวอร์และแพ็กเกจที่ต้องการ</p>

        {/* Steps */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[
            { n: 1, l: "เครือข่าย" },
            { n: 2, l: "แพ็กเกจ" },
            { n: 3, l: "ยืนยัน" },
          ].map((s, i) => (
            <div key={s.n} className="flex items-center">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${step >= s.n ? 'bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black' : 'bg-[#0f1326] text-[#4a5580] border border-[#1a1f35]'}`}>
                <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] ${step >= s.n ? 'bg-black/20' : 'bg-[#1a1f35]'}`}>{s.n}</div>
                {s.l}
              </div>
              {i < 2 && <div className={`w-6 h-0.5 mx-1 ${step > s.n ? 'bg-[#22d3ee]' : 'bg-[#1a1f35]'}`} />}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-5">
            <h2 className="text-sm font-bold mb-1">🌐 เลือกเซิร์ฟเวอร์</h2>
            <p className="text-xs text-[#94a3b8] mb-4">เลือกเซิร์ฟเวอร์ที่ต้องการใช้บริการ</p>
            <div className="space-y-2.5">
              {servers.map(s => (
                <button key={s.id} onClick={() => { setServer(s.id); setStep(2); }} className={`w-full text-left p-3.5 rounded-xl border transition ${server === s.id ? 'border-[#a855f7] bg-[#a855f7]/5' : 'border-[#1a1f35] bg-[#080c1a] hover:border-[#a855f7]/30'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0f1326] rounded-lg flex items-center justify-center text-lg">{s.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{s.name}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#a855f7]/10 text-[#a855f7] font-medium">{s.badge}</span>
                      </div>
                      <div className="text-[10px] text-[#94a3b8]">{s.desc}</div>
                      <div className="text-[9px] text-[#4a5580]">{s.protocol}</div>
                    </div>
                    <div className="text-[#22d3ee]">{server === s.id ? '✓' : '→'}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-5">
            <h2 className="text-sm font-bold mb-1">💳 เลือกแพ็กเกจ</h2>
            <p className="text-xs text-[#94a3b8] mb-4">{servers.find(s => s.id === server)?.name}</p>
            <div className="space-y-2.5">
              {pkgList.map(p => (
                <button key={p.k} onClick={() => { setPkg(p.k); setStep(3); }} className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition ${pkg === p.k ? 'border-[#a855f7] bg-[#a855f7]/5' : 'border-[#1a1f35] bg-[#080c1a] hover:border-[#a855f7]/30'}`}>
                  <div>
                    <div className="font-bold text-sm text-white">{p.d}</div>
                    <div className="text-[10px] text-[#94a3b8]">{p.dev}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#22d3ee]">{p.p}</div>
                    <div className="text-[9px] text-[#4a5580]">บาท</div>
                  </div>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="w-full mt-3 py-2.5 rounded-xl border border-[#1a1f35] text-xs text-[#94a3b8]">← ย้อนกลับ</button>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-5">
            <h2 className="text-sm font-bold mb-1">📄 ยืนยันคำสั่งซื้อ</h2>
            <p className="text-xs text-[#94a3b8] mb-5">ตรวจสอบข้อมูลก่อนชำระเงิน</p>
            <div className="bg-[#080c1a] rounded-xl p-4 space-y-2.5 text-sm">
              <div className="flex justify-between"><span className="text-[#94a3b8]">เซิร์ฟเวอร์</span><span className="font-medium">{servers.find(s => s.id === server)?.name}</span></div>
              <div className="flex justify-between"><span className="text-[#94a3b8]">แพ็กเกจ</span><span className="font-medium">{pkgList.find(x => x.k === pkg)?.d}</span></div>
              <div className="flex justify-between"><span className="text-[#94a3b8]">อุปกรณ์สูงสุด</span><span className="font-medium">2 อุปกรณ์</span></div>
              <div className="flex justify-between pt-3 mt-2 border-t border-[#1a1f35]">
                <span className="text-[#94a3b8]">รวมทั้งสิ้น</span>
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#22d3ee]">{total} <span className="text-sm font-medium text-[#4a5580]">บาท</span></span>
              </div>
            </div>
            <div className="mt-5 flex gap-2.5">
              <button onClick={() => setStep(2)} className="flex-1 py-2.5 rounded-xl border border-[#1a1f35] text-xs text-[#94a3b8]">← ย้อนกลับ</button>
              <button className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-xs shadow-lg">💳 ชำระเงิน</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
