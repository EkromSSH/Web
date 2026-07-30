import Link from "next/link";
const networks = [
  { name: "AIS", logo: "📺", desc: "AIS 4G/5G", price: "เริ่ม 50 บ.", color: "from-green-500/20 to-green-500/5", border: "border-green-500/30" },
  { name: "True", logo: "📶", desc: "True 4G/5G", price: "เริ่ม 50 บ.", color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/30" },
  { name: "DTAC", logo: "📱", desc: "DTAC 4G/5G", price: "เริ่ม 50 บ.", color: "from-red-500/20 to-red-500/5", border: "border-red-500/30" },
];
export default function NetworkCard() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-2">เลือก<span className="text-[#00e68a]">เครือข่าย</span></h2>
      <p className="text-[#64748b] text-center mb-10">รองรับทุกเครือข่ายอันดับ 1 ของไทย</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {networks.map((n, i) => (
          <div key={i} className={`bg-gradient-to-b ${n.color} border ${n.border} rounded-2xl p-6 hover:scale-[1.02] transition`}>
            <div className="text-4xl mb-3">{n.logo}</div>
            <h3 className="text-xl font-bold mb-1">{n.name}</h3>
            <p className="text-sm text-[#94a3b8] mb-3">{n.desc}</p>
            <div className="text-sm text-[#00e68a] mb-4">{n.price}</div>
            <Link href="/order" className="block text-center py-2 rounded-xl bg-[#00e68a] text-black font-bold text-sm hover:bg-[#00bcd4] transition">เลือกเลย →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}