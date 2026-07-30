"use client";
import { useState } from "react";
import Link from "next/link";

const servers = [
  { id: 1, name: "AIS-VIP", icon: "📶", badge: "AIS", desc: "เซิร์ฟเวอร์ทั่วไป AIS" },
  { id: 2, name: "AIS-TCP", icon: "📡", badge: "AIS", desc: "เซิร์ฟเวอร์ TCP เสถียร" },
  { id: 3, name: "FB-GAMING", icon: "🎮", badge: "AIS/FB", desc: "TLS Encryption" },
  { id: 4, name: "TRUE VLESS", icon: "📱", badge: "TRUE", desc: "เซิร์ฟเวอร์ TRUE" },
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
    <div className="min-h-screen bg-[#121826] px-4 pt-14 pb-20">
      <div className="max-w-sm mx-auto">
        <h1 className="text-lg font-bold text-center mb-1">🛒 สั่งซื้อ</h1>
        <p className="text-[10px] text-[#94a3b8] text-center mb-4">เลือกเซิร์ฟเวอร์และแพ็กเกจ</p>
        {/* Steps */}
        <div className="flex justify-center gap-3 mb-5">
          {["เลือกเครือข่าย", "เลือกแพ็กเกจ", "ยืนยัน"].map((s, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold ${step > i ? 'bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black' : step === i+1 ? 'bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black' : 'bg-[#2a3450] text-[#64748b]'}`}>{i+1}</div>
              <span className={`text-[8px] ${step > i ? 'text-[#22d3ee]' : step === i+1 ? 'text-white' : 'text-[#64748b]'}`}>{s}</span>
              {i < 2 && <div className={`w-4 h-px ${step > i+1 ? 'bg-[#22d3ee]' : 'bg-[#2a3450]'}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="bg-[#1a2235] border border-[#2a3450] rounded-xl p-4">
            <h2 className="text-sm font-bold mb-3">🌐 เลือกเซิร์ฟเวอร์</h2>
            <div className="space-y-2">
              {servers.map(s => (
                <button key={s.id} onClick={() => { setServer(s.id); setStep(2); }} className={`w-full text-left p-3 rounded-lg border ${server === s.id ? 'border-[#a855f7] bg-[#a855f7]/5' : 'border-[#2a3450] bg-[#121826]'}`}>
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{s.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold">{s.name}</span>
                        <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-[#a855f7]/10 text-[#a855f7]">{s.badge}</span>
                      </div>
                      <div className="text-[10px] text-[#94a3b8]">{s.desc}</div>
                    </div>
                    <span className="text-[#22d3ee] text-xs">→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-[#1a2235] border border-[#2a3450] rounded-xl p-4">
            <h2 className="text-sm font-bold mb-1">💳 เลือกแพ็กเกจ</h2>
            <p className="text-[10px] text-[#94a3b8] mb-3">{servers.find(s => s.id === server)?.name}</p>
            <div className="space-y-2">
              {pkgList.map(p => (
                <button key={p.k} onClick={() => { setPkg(p.k); setStep(3); }} className={`w-full flex items-center justify-between p-3 rounded-lg border ${pkg === p.k ? 'border-[#a855f7] bg-[#a855f7]/5' : 'border-[#2a3450] bg-[#121826]'}`}>
                  <div><div className="text-sm font-bold">{p.d}</div><div className="text-[10px] text-[#94a3b8]">{p.dev}</div></div>
                  <div className="text-right"><div className="text-lg font-black bg-gradient-to-r from-[#22c55e] to-[#22d3ee] bg-clip-text text-transparent">{p.p}</div><div className="text-[8px] text-[#64748b]">บาท</div></div>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="w-full mt-2.5 py-2 rounded-lg border border-[#2a3450] text-[10px] text-[#94a3b8]">← ย้อนกลับ</button>
          </div>
        )}

        {step === 3 && (
          <div className="bg-[#1a2235] border border-[#2a3450] rounded-xl p-4">
            <h2 className="text-sm font-bold mb-1">📄 ยืนยันคำสั่งซื้อ</h2>
            <p className="text-[10px] text-[#94a3b8] mb-3">ตรวจสอบข้อมูลก่อนชำระเงิน</p>
            <div className="bg-[#121826] rounded-lg p-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-[#94a3b8]">เซิร์ฟเวอร์</span><span>{servers.find(s => s.id === server)?.name}</span></div>
              <div className="flex justify-between"><span className="text-[#94a3b8]">แพ็กเกจ</span><span>{pkgList.find(x => x.k === pkg)?.d}</span></div>
              <div className="flex justify-between pt-2 border-t border-[#2a3450]">
                <span className="text-[#94a3b8]">รวม</span>
                <span className="text-xl font-black bg-gradient-to-r from-[#22c55e] to-[#22d3ee] bg-clip-text text-transparent">{total} <span className="text-xs font-medium text-[#64748b]">บาท</span></span>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <button onClick={() => setStep(2)} className="flex-1 py-2 rounded-lg border border-[#2a3450] text-[10px] text-[#94a3b8]">← ย้อน</button>
              <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-[10px] shadow-md">💳 ชำระเงิน</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
