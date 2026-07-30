import Link from "next/link";

export default function HistoryPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-xl shadow-[#a855f7]/20">📦</div>
          <h1 className="text-xl font-bold text-white">ประวัติการสั่งซื้อ</h1>
          <p className="text-xs text-[#94a3b8] mt-1.5">รายการสั่งซื้อทั้งหมดของคุณ</p>
        </div>
        <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-8 text-center">
          <div className="text-5xl mb-4 opacity-20">📋</div>
          <p className="text-sm text-[#94a3b8] mb-4">ยังไม่มีประวัติการสั่งซื้อ</p>
          <Link href="/order" className="inline-block px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-sm shadow-lg">🛒 สั่งซื้อเลย</Link>
        </div>
      </div>
    </div>
  );
}
