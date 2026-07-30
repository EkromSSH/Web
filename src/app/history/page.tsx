export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] py-20 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-8">📦 <span className="text-[#00e68a]">ประวัติการสั่งซื้อ</span></h1>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-2xl p-6 text-center">
          <div className="text-5xl mb-4 text-[#445566]">📋</div>
          <p className="text-sm text-[#64748b]">ยังไม่มีประวัติการสั่งซื้อ</p>
          <a href="/order" className="inline-block mt-4 px-8 py-3 rounded-xl bg-[#00e68a] text-black font-bold text-sm">🛒 สั่งซื้อเลย</a>
        </div>
      </div>
    </div>
  );
}