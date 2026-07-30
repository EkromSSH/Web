"use client";
import { useState } from "react";
import Link from "next/link";

const servers = [
  { id: 1, name: "AIS-VIP", icon: "📺", badge: "AIS", protocol: "VMESS · WS · 80" },
  { id: 2, name: "AIS-TCP", icon: "📶", badge: "AIS", protocol: "VMESS · TCP · 8080" },
  { id: 3, name: "FB-GAMING", icon: "🎮", badge: "AIS/FB", protocol: "VMESS · TLS · 8000" },
  { id: 4, name: "TRUE VLESS", icon: "📱", badge: "TRUE", protocol: "VLESS · WS · 2053" },
];
const pkgList = [
  { k: "1", d: "1 เดือน", p: 50 },
  { k: "3", d: "3 เดือน", p: 130 },
  { k: "6", d: "6 เดือน", p: 240 },
  { k: "12", d: "12 เดือน", p: 420 },
];

export default function OrderPage() {
  const [step, setStep] = useState(1);
  const [server, setServer] = useState<number | null>(null);
  const [pkg, setPkg] = useState<string | null>(null);
  const total = pkgList.find(x => x.k === pkg)?.p || 0;

  return (
    <div className="min-h-screen bg-[#0b0f1a] pt-16 px-4 pb-20">
      <div className="max-w-sm mx-auto">
        <h1 className="text-lg font-bold text-center mb-4">🛒 สั่งซื้อ</h1>
        {/* Steps bar */}
        <div className="flex justify-center gap-1 mb-5">
          {[1,2,3].map(s => (
            <div key={s} className={`w-8 h-1.5 rounded-full ${step >= s ? 'bg-[#00e68a]' : 'bg-[#1e2d47]'}`} />
          ))}
        </div>

        {step === 1 && (
          <div className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4">
            <h2 className="text-sm font-bold mb-4">🌐 เลือกเซิร์ฟเวอร์</h2>
            <div className="space-y-2">
              {servers.map(s => (
                <button key={s.id} onClick={() => { setServer(s.id); setStep(2); }} className={`w-full flex items-center gap-3 p-3 rounded-lg border ${server === s.id ? 'border-[#00e68a] bg-[#00e68a]/10' : 'border-[#1e2d47] bg-[#0b0f1a]'}`}>
                  <span className="text-xl">{s.icon}</span>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-bold">{s.name}</div>
                    <div className="text-[10px] text-[#64748b]">{s.protocol}</div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#00e68a]/20 text-[#00e68a]">{s.badge}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4">
            <h2 className="text-sm font-bold mb-1">💳 เลือกแพ็กเกจ</h2>
            <div className="text-xs text-[#64748b] mb-4">{servers.find(s => s.id === server)?.name}</div>
            <div className="space-y-2">
              {pkgList.map(p => (
                <button key={p.k} onClick={() => { setPkg(p.k); setStep(3); }} className={`w-full flex items-center justify-between p-3 rounded-lg border ${pkg === p.k ? 'border-[#00e68a] bg-[#00e68a]/10' : 'border-[#1e2d47] bg-[#0b0f1a]'}`}>
                  <span className="text-sm font-bold">{p.d}</span>
                  <span className="text-sm font-bold text-[#00e68a]">{p.p} บ.</span>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="w-full mt-3 py-2.5 rounded-lg border border-[#1e2d47] text-xs">← ย้อน</button>
          </div>
        )}

        {step === 3 && (
          <div className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4">
            <h2 className="text-sm font-bold mb-4">📝 ยืนยัน</h2>
            <div className="bg-[#0b0f1a] rounded-lg p-3 mb-4 text-xs">
              <div className="flex justify-between mb-1"><span className="text-[#64748b]">เซิร์ฟเวอร์</span><span>{servers.find(s => s.id === server)?.name}</span></div>
              <div className="flex justify-between"><span className="text-[#64748b]">แพ็กเกจ</span><span>{pkgList.find(x => x.k === pkg)?.d}</span></div>
              <div className="flex justify-between mt-2 pt-2 border-t border-[#1e2d47]"><span className="text-[#64748b]">รวม</span><span className="text-lg font-bold text-[#00e68a]">{total} บาท</span></div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStep(2)} className="flex-1 py-2.5 rounded-lg border border-[#1e2d47] text-xs">← ย้อน</button>
              <button className="flex-1 py-2.5 rounded-lg bg-[#00e68a] text-black font-bold text-xs">💳 ชำระเงิน</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
