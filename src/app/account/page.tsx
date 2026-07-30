"use client";
import { useState } from "react";
import Link from "next/link";

const orders = [
  { id: 1, name: "AIS 30 วัน", net: "AIS", date: "20/06/2024", status: "active" },
  { id: 2, name: "True 90 วัน", net: "True", date: "15/07/2024", status: "active" },
  { id: 3, name: "dtac 365 วัน", net: "DTAC", date: "10/01/2025", status: "expired" },
];

export default function AccountPage() {
  const [tab, setTab] = useState("order");
  return (
    <div className="min-h-screen pt-14 pb-20">
      {/* Tabs */}
      <div className="border-b border-[#1a1f35]">
        <div className="max-w-6xl mx-auto px-4 flex">
          <button onClick={() => setTab("order")} className={`px-5 py-3 text-sm font-medium border-b-2 transition ${tab === "order" ? "border-[#22d3ee] text-[#22d3ee]" : "border-transparent text-[#4a5580]"}`}>📦 สั่งซื้อ</button>
          <button onClick={() => setTab("account")} className={`px-5 py-3 text-sm font-medium border-b-2 transition ${tab === "account" ? "border-[#22d3ee] text-[#22d3ee]" : "border-transparent text-[#4a5580]"}`}>👤 บัญชีของฉัน</button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-6">
        {tab === "order" && (
          <div className="max-w-lg mx-auto">
            <h2 className="text-sm font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-[#a855f7] to-[#22d3ee] rounded-full" />
              สั่งซื้อ
            </h2>
            {/* Step bar */}
            <div className="flex items-center gap-2 mb-6">
              {["เลือกเครือข่าย", "ชำระเงิน", "รับ Config"].map((s, i) => (
                <div key={i} className="flex items-center">
                  <div className={`text-xs font-medium px-3 py-1.5 rounded-full ${i === 0 ? 'bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black' : 'bg-[#0f1326] text-[#4a5580] border border-[#1a1f35]'}`}>{s}</div>
                  {i < 2 && <div className="w-4 h-0.5 bg-[#1a1f35] mx-1" />}
                </div>
              ))}
            </div>

            {/* Network cards */}
            <div className="space-y-2.5">
              {[
                { name: "AIS", icon: "📶", color: "green" },
                { name: "True", icon: "📡", color: "purple" },
                { name: "DTAC", icon: "📱", color: "cyan" },
              ].map((n, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#0f1326] border border-[#1a1f35] rounded-xl p-3.5">
                  <div className="w-10 h-10 bg-[#080c1a] rounded-lg flex items-center justify-center text-lg">{n.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-white">{n.name}</div>
                    <div className="text-[10px] text-[#94a3b8]">สัญญาณเครือข่าย {n.name}</div>
                  </div>
                  <Link href="/order" className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-xs">เลือกแพ็กเกจ</Link>
                </div>
              ))}
            </div>
            <Link href="/order" className="block w-full text-center mt-4 py-2.5 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-sm shadow-lg">ต่อไป →</Link>
          </div>
        )}

        {tab === "account" && (
          <div className="grid md:grid-cols-[280px_1fr] gap-6">
            {/* Sidebar */}
            <div>
              <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-5 text-center mb-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-full flex items-center justify-center text-2xl font-bold text-black mb-2">U</div>
                <div className="font-bold text-white">User</div>
                <div className="text-xs text-[#94a3b8]">user@example.com</div>
              </div>
              <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl overflow-hidden">
                {[
                  { icon: "🔔", label: "แจ้งเตือน" },
                  { icon: "📦", label: "ประวัติการสั่งซื้อ", active: true },
                  { icon: "💳", label: "เติมเงิน" },
                  { icon: "📞", label: "ข้อมูลติดต่อ" },
                  { icon: "🚪", label: "ออกจากระบบ", danger: true },
                ].map((item, i) => (
                  <div key={i} className={`px-4 py-3.5 text-sm flex items-center gap-3 border-b border-[#1a1f35] last:border-0 cursor-pointer transition ${item.danger ? 'text-red-400' : item.active ? 'bg-[#a855f7]/10 text-[#22d3ee]' : 'text-[#94a3b8] hover:bg-[#1a1f35]/50'}`}>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main */}
            <div>
              <h2 className="text-sm font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-[#a855f7] to-[#22d3ee] rounded-full" />
                ประวัติการสั่งซื้อ
              </h2>
              <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#1a1f35]">
                      <th className="text-left px-4 py-3 text-[10px] text-[#4a5580] font-medium">แพ็กเกจ</th>
                      <th className="text-left px-4 py-3 text-[10px] text-[#4a5580] font-medium">เครือข่าย</th>
                      <th className="text-left px-4 py-3 text-[10px] text-[#4a5580] font-medium">หมดอายุ</th>
                      <th className="text-left px-4 py-3 text-[10px] text-[#4a5580] font-medium">สถานะ</th>
                      <th className="text-right px-4 py-3 text-[10px] text-[#4a5580] font-medium">ดาวน์โหลด</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((o, i) => (
                      <tr key={o.id} className={`${i < orders.length - 1 ? 'border-b border-[#1a1f35]' : ''}`}>
                        <td className="px-4 py-3 text-xs text-white">{o.name}</td>
                        <td className="px-4 py-3 text-xs text-[#94a3b8]">{o.net}</td>
                        <td className="px-4 py-3 text-xs text-[#94a3b8]">{o.date}</td>
                        <td className="px-4 py-3">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${o.status === 'active' ? 'bg-[#22c55e]/10 text-[#22c55e]' : 'bg-[#4a5580]/10 text-[#4a5580]'}`}>
                            {o.status === 'active' ? '✅ ใช้งาน' : '⏰ หมดอายุ'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          {o.status === 'active' && <button className="text-[10px] text-[#22d3ee] underline">📥</button>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Download section */}
              <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-5 mt-4">
                <h3 className="text-sm font-bold mb-1">⬇️ ดาวน์โหลดไฟล์ V2Box</h3>
                <p className="text-[10px] text-[#94a3b8] mb-3">ไฟล์ Config สำหรับแอปพลิเคชัน V2Box</p>
                <div className="bg-[#080c1a] rounded-xl p-3 flex items-center justify-between">
                  <span className="text-xs text-white">AIS_30days_v2Box.config</span>
                  <button className="text-xs text-[#22d3ee] font-medium">📥 ดาวน์โหลด</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
