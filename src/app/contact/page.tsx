export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] py-20 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">💬 <span className="text-[#00e68a]">ติดต่อแอดมิน</span></h1>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-2xl p-6 text-center">
          <div className="text-5xl mb-4">💬</div>
          <p className="text-sm text-[#94a3b8] mb-6">มีปัญหาหรือสอบถามเพิ่มเติม ทักแอดมินผ่าน LINE ได้เลย</p>
          <a href="https://line.me/R/ti/p/@578infzg" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#00e68a] text-black font-bold text-sm hover:bg-[#00bcd4] transition">💬 @578infzg</a>
          <div className="mt-6 text-xs text-[#64748b]">ตอบกลับภายใน 24 ชั่วโมง</div>
        </div>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-2xl p-6 mt-4">
          <h3 className="text-sm font-bold mb-3">📋 คำถามที่พบบ่อย</h3>
          <div className="space-y-3 text-xs text-[#94a3b8]">
            <details className="bg-[#0b0f1a] rounded-lg p-3">
              <summary className="cursor-pointer font-medium text-white/80">สั่งซื้อแล้วไม่ได้ Config?</summary>
              <p className="mt-2 text-[#64748b]">แจ้งแอดมินผ่าน LINE พร้อมแคปหน้าจอการโอน</p>
            </details>
            <details className="bg-[#0b0f1a] rounded-lg p-3">
              <summary className="cursor-pointer font-medium text-white/80">ใช้งานไม่ได้ เน็ตช้า?</summary>
              <p className="mt-2 text-[#64748b]">ลองเปลี่ยน Protocol หรือติดต่อแอดมิน</p>
            </details>
            <details className="bg-[#0b0f1a] rounded-lg p-3">
              <summary className="cursor-pointer font-medium text-white/80">ลืมรหัสผ่าน?</summary>
              <p className="mt-2 text-[#64748b]"><a href="/login" className="text-[#00e68a]">กดที่นี่</a> เพื่อตั้งรหัสผ่านใหม่</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}