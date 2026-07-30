const apps = [
  { name: "NPV Tunnel", icon: "🛡️", desc: "Netch / NekoRay" },
  { name: "V2Box", icon: "📦", desc: "V2Box VPN Client" },
  { name: "v2rayNG", icon: "🚀", desc: "v2rayNG / v2rayX" },
  { name: "Streisand", icon: "🎵", desc: "Streisand" },
  { name: "Clash Meta", icon: "⚔️", desc: "Clash Meta / Flado" },
  { name: "Hiddify", icon: "🔒", desc: "Hiddify Next" },
];
export default function SupportedApps() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-2">แอปที่<span className="text-[#00e68a]">รองรับ</span></h2>
      <p className="text-[#64748b] text-center mb-10">ใช้งานได้ทุก VPN Client ยอดนิยม</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {apps.map((a, i) => (
          <div key={i} className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4 text-center hover:border-[#00e68a]/30 transition">
            <div className="text-3xl mb-2">{a.icon}</div>
            <div className="text-sm font-semibold">{a.name}</div>
            <div className="text-[10px] text-[#64748b]">{a.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}