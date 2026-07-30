"use client";
import { useState } from "react";

const servers = [
  { id: 1, name: "AIS-VIP", protocol: "VMESS · WS · 80", icon: "📺", color: "from-green-500/20 to-green-500/5", border: "border-green-500/30", popular: true },
  { id: 2, name: "AIS-TCP", protocol: "VMESS · TCP · 8080", icon: "📶", color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/30", popular: false },
  { id: 3, name: "FB-GAMING", protocol: "VMESS · TLS · 8000", icon: "🎮", color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/30", popular: false },
  { id: 4, name: "TRUE VLESS", protocol: "VLESS · WS · 2053", icon: "📱", color: "from-rose-500/20 to-rose-500/5", border: "border-rose-500/30", popular: true },
];
const packages = [
  { key: "1", days: 1, price: 50, label: "1 เดือน" },
  { key: "2", days: 3, price: 130, label: "3 เดือน" },
  { key: "3", days: 6, price: 240, label: "6 เดือน" },
  { key: "4", days: 12, price: 420, label: "12 เดือน" },
];
export default function OrderPage() {
  const [step, setStep] = useState(1);
  const [selectedServer, setSelectedServer] = useState<number | null>(null);
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", slack_id: "" });
  const total = packages.find(p => p.key === selectedPkg)?.price || 0;
  const currentServer = servers.find(s => s.id === selectedServer);
  const currentPkg = packages.find(p => p.key === selectedPkg);

  return (
    <div className="min-h-screen bg-[#0b0f1a] py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">🛒 <span className="text-[#00e68a]">สั่งซื้อ</span></h1>
        {/* Steps */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold ${step >= s ? "bg-[#00e68a] text-black" : "bg-[#111927] text-[#64748b] border border-[#1e2d47]"}`}>
              {s}. {s === 1 ? "เครือข่าย" : s === 2 ? "แพ็กเกจ" : "ชำระเงิน"}
            </div>
          ))}
        </div>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-2xl p-6">
          {/* Step 1 */}
          {step === 1 && (
            <>
              <h2 className="text-lg font-bold mb-4">🌐 เลือกเครือข่าย</h2>
              <div className="space-y-3">
                {servers.map((s) => (
                  <button key={s.id} onClick={() => { setSelectedServer(s.id); setStep(2); }} className={`w-full text-left p-4 rounded-xl border transition ${selectedServer === s.id ? "border-[#00e68a] bg-[#00e68a]/10" : "border-[#1e2d47] bg-[#0b0f1a] hover:border-[#00e68a]/30"}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{s.icon}</span>
                      <div className="flex-1">
                        <div className="font-bold">{s.name}</div>
                        <div className="text-[10px] text-[#64748b]">{s.protocol}</div>
                      </div>
                      {selectedServer === s.id && <span className="text-[#00e68a]">✓</span>}
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
          {/* Step 2 */}
          {step === 2 && (
            <>
              <h2 className="text-lg font-bold mb-4">💳 เลือกแพ็กเกจ</h2>
              <div className="text-xs text-[#94a3b8] mb-4">เซิร์ฟเวอร์: {currentServer?.name}</div>
              <div className="space-y-3">
                {packages.map((p) => (
                  <button key={p.key} onClick={() => { setSelectedPkg(p.key); setStep(3); }} className={`w-full flex items-center justify-between p-4 rounded-xl border transition ${selectedPkg === p.key ? "border-[#00e68a] bg-[#00e68a]/10" : "border-[#1e2d47] bg-[#0b0f1a] hover:border-[#00e68a]/30"}`}>
                    <div>
                      <div className="font-bold text-sm">{p.label}</div>
                      <div className="text-[10px] text-[#64748b]">1-2 อุปกรณ์ · ไม่จำกัด GB</div>
                    </div>
                    <div className="text-xl font-bold text-[#00e68a]">{p.price} บ.</div>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="mt-4 w-full py-3 rounded-xl border border-[#1e2d47] text-sm">← ย้อนกลับ</button>
            </>
          )}
          {/* Step 3 */}
          {step === 3 && (
            <>
              <h2 className="text-lg font-bold mb-4">📝 ข้อมูลชำระเงิน</h2>
              <div className="space-y-4 mb-5">
                <div>
                  <label className="text-xs text-[#94a3b8] block mb-1">ชื่อผู้ใช้</label>
                  <input className="w-full p-3 bg-[#0b0f1a] border border-[#1e2d47] rounded-xl text-white text-sm focus:border-[#00e68a] outline-none" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                </div>
                <div>
                  <label className="text-xs text-[#94a3b8] block mb-1">เบอร์โทร</label>
                  <input className="w-full p-3 bg-[#0b0f1a] border border-[#1e2d47] rounded-xl text-white text-sm focus:border-[#00e68a] outline-none" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
                </div>
                <div className="bg-[#0b0f1a] rounded-xl p-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#64748b]">{currentServer?.name} · {currentPkg?.label}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[#64748b]">รวม</span>
                    <span className="text-2xl font-bold text-[#00e68a]">{total} บาท</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-xl border border-[#1e2d47] text-sm">← ย้อนกลับ</button>
                <button className="flex-1 py-3 rounded-xl bg-[#00e68a] text-black font-bold text-sm hover:bg-[#00bcd4] transition">💳 ชำระเงิน</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}