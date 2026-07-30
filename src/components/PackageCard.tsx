import Link from "next/link";
const packages = [
  { days: 1, price: 50, label: "1 เดือน", popular: false },
  { days: 3, price: 130, label: "3 เดือน", popular: false },
  { days: 6, price: 240, label: "6 เดือน", popular: true },
  { days: 12, price: 420, label: "12 เดือน", popular: false },
];
export default function PackageCard() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-[#0d1321]">
      <h2 className="text-2xl font-bold text-center mb-2">แพ็กเกจ<span className="text-[#00e68a]">ราคาประหยัด</span></h2>
      <p className="text-[#64748b] text-center mb-10">เลือกแพ็กเกจที่เหมาะกับคุณ</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {packages.map((p, i) => (
          <div key={i} className={`relative bg-[#111927] border rounded-2xl p-5 text-center ${p.popular ? 'border-[#00e68a]' : 'border-[#1e2d47]'}`}>
            {p.popular && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#00e68a] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">ขายดี</div>}
            <div className="text-3xl font-bold text-[#00e68a] mb-1">{p.price}</div>
            <div className="text-[10px] text-[#64748b] mb-3">บาท / {p.label}</div>
            <ul className="space-y-2 text-xs text-[#94a3b8] mb-5">
              <li>✅ 1-2 อุปกรณ์</li>
              <li>✅ ไม่จำกัด GB</li>
              <li>✅ ไม่หลุด</li>
            </ul>
            <Link href="/order" className="block py-2 rounded-xl bg-[#00e68a] text-black font-bold text-xs hover:bg-[#00bcd4] transition">เลือก</Link>
          </div>
        ))}
      </div>
    </section>
  );
}