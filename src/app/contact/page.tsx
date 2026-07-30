import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#121826] px-4 pt-20 pb-10">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-xl flex items-center justify-center text-xl mb-2 shadow-md">💬</div>
          <h1 className="text-lg font-bold">ติดต่อแอดมิน</h1>
          <p className="text-[10px] text-[#94a3b8] mt-0.5">แอดมินให้บริการ 24 ชม.</p>
        </div>
        <div className="space-y-2">
          {[
            { icon: "💬", name: "LINE", id: "@578infzg", url: "https://line.me/R/ti/p/@578infzg", color: "bg-[#06c755]" },
            { icon: "✈️", name: "Telegram", id: "@ekrom_support", url: "https://t.me/ekrom_support", color: "bg-[#229ed9]" },
            { icon: "👍", name: "Facebook", id: "EkromVPN", url: "https://facebook.com/EkromVPN", color: "bg-[#1877f2]" },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#1a2235] border border-[#2a3450] rounded-xl p-3">
              <div className={`w-10 h-10 ${c.color}/10 rounded-lg flex items-center justify-center text-lg`}>{c.icon}</div>
              <div className="flex-1"><div className="text-sm font-bold">{c.name}</div><div className="text-[10px] text-[#94a3b8]">{c.id}</div></div>
              <a href={c.url} className={`px-3 py-1.5 rounded-lg ${c.color} text-white font-bold text-[10px]`}>Add</a>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-[#1a2235] border border-[#2a3450] rounded-xl p-4">
          <h3 className="text-sm font-bold mb-3">📋 FAQ</h3>
          <div className="space-y-1.5">
            {[
              { q: "สั่งซื้อแล้วไม่ได้ Config?", a: "แจ้งแอดมิน LINE พร้อมแคปหน้าจอ" },
              { q: "ใช้งานไม่ได้ เน็ตช้า?", a: "ลองเปลี่ยน Protocol หรือติดต่อแอดมิน" },
              { q: "ลืมรหัสผ่าน?", a: <span>กด <Link href="/login" className="text-[#22d3ee]">ตั้งรหัสใหม่</Link></span> },
            ].map((faq, i) => (
              <details key={i} className="bg-[#121826] rounded-lg">
                <summary className="px-3 py-2.5 text-xs font-medium cursor-pointer">{faq.q}</summary>
                <div className="px-3 pb-2.5 text-[10px] text-[#94a3b8]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
        <div className="text-center mt-4"><Link href="/" className="text-[10px] text-[#64748b]">← กลับหน้าแรก</Link></div>
      </div>
    </div>
  );
}
