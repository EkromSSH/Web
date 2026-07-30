const reviews = [
  { name: "สมชาย", star: 5, text: "ใช้มา 6 เดือน เสถียรมาก แนะนำ!", speed: "เร็วมาก" },
  { name: "อนันต์", star: 5, text: "ราคาถูก เน็ตแรง ใช้ True ได้ดี", speed: "ปานกลาง" },
  { name: "นารา", star: 5, text: "สมัครง่าย ได้ config ทันที", speed: "เร็ว" },
  { name: "ประกิต", star: 4, text: "AIS VIP ไม่มีสะดุด เล่นเกมลื่น", speed: "เร็วมาก" },
];
export default function Reviews() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-[#0d1321]">
      <h2 className="text-2xl font-bold text-center mb-2">รีวิวจาก<span className="text-[#00e68a]">ลูกค้า</span></h2>
      <p className="text-[#64748b] text-center mb-10">เสียงจริงจากผู้ใช้บริการ</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reviews.map((r, i) => (
          <div key={i} className="bg-[#111927] border border-[#1e2d47] rounded-2xl p-5">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: r.star }).map((_, j) => (
                <span key={j} className="text-[#ffc107]">★</span>
              ))}
            </div>
            <p className="text-sm text-[#94a3b8] mb-3">"{r.text}"</p>
            <div className="flex justify-between text-xs">
              <span className="text-[#64748b]">— {r.name}</span>
              <span className="text-[#00e68a]">{r.speed}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}