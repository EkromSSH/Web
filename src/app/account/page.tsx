"use client";
import { useState } from "react";

const orders = [
  { id: 1, server: "AIS-VIP", pkg: "1 เดือน", price: 50, status: "completed", date: "27/ก.ค./2569", config: "vless://..." },
  { id: 2, server: "TRUE VLESS", pkg: "3 เดือน", price: 130, status: "pending", date: "", config: "" },
];
export default function AccountPage() {
  const [tab, setTab] = useState("orders");
  return (
    <div className="min-h-screen bg-[#0b0f1a] py-20 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">👋 <span className="text-[#00e68a]">บัญชีของฉัน</span></h1>
          <button className="text-sm text-red-400">🚪 ออกจากระบบ</button>
        </div>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-2xl p-6 mb-4 bg-gradient-to-br from-[#00e68a]/10 to-[#7c4dff]/10">
          <div className="text-xs text-[#64748b] mb-1">ยอดเงินคงเหลือ</div>
          <div className="text-3xl font-bold text-[#00e68a]">0.00 <span className="text-base text-[#64748b]">บาท</span></div>
          <button className="mt-3 text-sm text-[#00e68a]">💳 เติมเงิน</button>
        </div>
        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab("orders")} className={`px-4 py-2 rounded-lg text-xs font-bold ${tab === "orders" ? "bg-[#00e68a] text-black" : "bg-[#111927] text-[#64748b] border border-[#1e2d47]"}`}>📦 สั่งซื้อ</button>
          <button onClick={() => setTab("topup")} className={`px-4 py-2 rounded-lg text-xs font-bold ${tab === "topup" ? "bg-[#00e68a] text-black" : "bg-[#111927] text-[#64748b] border border-[#1e2d47]"}`}>💳 เติมเงิน</button>
        </div>
        {tab === "orders" && (
          <div className="space-y-3">
            {orders.map((o) => (
              <div key={o.id} className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <div><div className="font-bold text-sm">{o.server}</div><div className="text-xs text-[#64748b]">{o.pkg} · {o.price} บาท</div></div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${o.status === "completed" ? "bg-[#00e68a]/20 text-[#00e68a]" : "bg-[#ffc107]/20 text-[#ffc107]"}`}>{o.status === "completed" ? "✅ พร้อมใช้" : "⏳ รอตรวจ"}</span>
                </div>
                {o.date && <div className="text-[10px] text-[#64748b] mb-2">หมดอายุ: {o.date}</div>}
                {o.config && <div className="bg-[#0b0f1a] rounded-lg p-2 text-[10px] text-[#00e68a] font-mono break-all">{o.config.substring(0, 50)}... <button className="text-[#64748b] ml-2">📋</button></div>}
              </div>
            ))}
            <div className="text-center mt-6"><a href="/order" className="inline-block px-8 py-3 rounded-xl bg-[#00e68a] text-black font-bold text-sm hover:bg-[#00bcd4] transition">🛒 สั่งซื้อเพิ่ม</a></div>
          </div>
        )}
        {tab === "topup" && (
          <div className="bg-[#111927] border border-[#1e2d47] rounded-xl p-6 text-center">
            <div className="text-5xl mb-3">💳</div>
            <p className="text-sm text-[#94a3b8]">ฟังก์ชั่นเติมเงิน กำลังพัฒนา</p>
          </div>
        )}
      </div>
    </div>
  );
}