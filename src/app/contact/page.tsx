import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-xl shadow-[#a855f7]/20">
            💬
          </div>
          <h1 className="text-xl font-bold text-white">ติดต่อแอดมิน</h1>
          <p className="text-xs text-[#94a3b8] mt-1.5">แอดมินให้บริการทุก 24 ชั่วโมง</p>
        </div>

        <div className="space-y-3">
          {/* LINE */}
          <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#06c755]/10 rounded-xl flex items-center justify-center text-xl">💬</div>
            <div className="flex-1">
              <div className="text-sm font-bold text-white">LINE</div>
              <div className="text-xs text-[#94a3b8]">@578infzg</div>
            </div>
            <a href="https://line.me/R/ti/p/@578infzg" className="px-4 py-2 rounded-xl bg-[#06c755] text-white font-bold text-xs">Add</a>
          </div>

          {/* Telegram */}
          <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#229ed9]/10 rounded-xl flex items-center justify-center text-xl">✈️</div>
            <div className="flex-1">
              <div className="text-sm font-bold text-white">Telegram</div>
              <div className="text-xs text-[#94a3b8]">@ekrom_support</div>
            </div>
            <a href="https://t.me/ekrom_support" className="px-4 py-2 rounded-xl bg-[#229ed9] text-white font-bold text-xs">Add</a>
          </div>

          {/* Facebook */}
          <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1877f2]/10 rounded-xl flex items-center justify-center text-xl">👍</div>
            <div className="flex-1">
              <div className="text-sm font-bold text-white">Facebook</div>
              <div className="text-xs text-[#94a3b8]">EkromVPN</div>
            </div>
            <a href="https://facebook.com/EkromVPN" className="px-4 py-2 rounded-xl bg-[#1877f2] text-white font-bold text-xs">Add</a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-6 bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-5">
          <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-gradient-to-b from-[#a855f7] to-[#22d3ee] rounded-full" />
            คำถามที่พบบ่อย
          </h3>
          <div className="space-y-2">
            {[
              { q: "สั่งซื้อแล้วไม่ได้ Config?", a: "แจ้งแอดมินทาง LINE พร้อมแคปหน้าจอการโอน" },
              { q: "ใช้งานไม่ได้ เน็ตช้า?", a: "ลองเปลี่ยน Protocol หรือติดต่อแอดมิน" },
              { q: "ลืมรหัสผ่าน?", a: <span>กด <Link href="/login" className="text-[#22d3ee]">ตั้งรหัสผ่านใหม่</Link></span> },
            ].map((faq, i) => (
              <details key={i} className="bg-[#080c1a] rounded-xl">
                <summary className="px-4 py-3 text-xs text-white font-medium cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#4a5580]">+</span>
                </summary>
                <div className="px-4 pb-3 text-[10px] text-[#94a3b8]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-xs text-[#4a5580] hover:text-[#22d3ee]">← กลับหน้าแรก</Link>
        </div>
      </div>
    </div>
  );
}
