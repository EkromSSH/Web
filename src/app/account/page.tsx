"use client";
import { useState } from "react";
import Link from "next/link";

const orders = [
  { id: 1, server: "AIS-VIP", pkg: "1 เดือน", price: 50, status: "completed", date: "25/ก.ค./2569" },
  { id: 2, server: "TRUE VLESS", pkg: "3 เดือน", price: 130, status: "pending" },
];

export default function AccountPage() {
  const [tab, setTab] = useState("orders");
  return (
    <div className="min-h-screen bg-[#0b0f1a] pt-16 px-4 pb-20">
      <div className="max-w-sm mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-bold">👋 บัญชี</h1>
          <button className="text-xs text-red-400">🚪 ออกจากระบบ</button>
        </div>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4 mb-3">
          <div className="text-[10px] text-[#64748b]">ยอดเงินคงเหลือ</div>
          <div className="text-2xl font-bold text-[#00e68a]">฿0.00</div>
        </div>
        <div className="flex gap-2 mb-3">
          <button onClick={() => setTab("orders")} className={`px-3 py-1.5 rounded-lg text-xs font-bold ${tab === "orders" ? "bg-[#00e68a] text-black" : "bg-[#111927] text-[#64748b] border border-[#1e2d47]"}`}>📦 คำสั่งซื้อ</button>
          <button onClick={() => setTab("topup")} className={`px-3 py-1.5 rounded-lg text-xs font-bold ${tab === "topup" ? "bg-[#00e68a] text-black" : "bg-[#111927] text-[#64748b] border border-[#1e2d47]"}`}>💳 เติมเงิน</button>
        </div>
        {tab === "orders" && (
          <div className="space-y-2">
            {orders.map(o => (
              <div key={o.id} className="bg-[#111927] border border-[#1e2d47] rounded-xl p-3">
                <div className="flex justify-between items-start mb-1">
                  <div><div className="text-sm font-bold">{o.server}</div><div className="text-[10px] text-[#64748b]">{o.pkg} · {o.price} บาท</div></div>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${o.status === "completed" ? "bg-[#00e68a]/20 text-[#00e68a]" : "bg-[#ffc107]/20 text-[#ffc107]"}`}>{o.status === "completed" ? "✅ พร้อมใช้" : "⏳ รอตรวจ"}</span>
                </div>
                {o.date && <div className="text-[9px] text-[#64748b]">หมดอายุ: {o.date}</div>}
              </div>
            ))}
            <Link href="/order" className="block text-center py-2.5 rounded-lg bg-[#00e68a] text-black font-bold text-xs mt-3">🛒 สั่งซื้อเพิ่ม</Link>
          </div>
        )}
        {tab === "topup" && (
          <div className="bg-[#111927] border border-[#1e2d47] rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">💳</div>
            <p className="text-xs text-[#64748b]">กำลังพัฒนา</p>
          </div>
        )}
      </div>
    </div>
  );
}
