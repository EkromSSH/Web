export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] pt-16 px-4">
      <div className="max-w-sm mx-auto">
        <h1 className="text-lg font-bold text-center mb-5">💬 ติดต่อแอดมิน</h1>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4 text-center mb-3">
          <div className="text-3xl mb-2">💬</div>
          <p className="text-xs text-[#94a3b8] mb-4">ทักแอดมินผ่าน LINE</p>
          <a href="https://line.me/R/ti/p/@578infzg" className="inline-block px-6 py-2.5 rounded-lg bg-[#00e68a] text-black font-bold text-xs">💬 @578infzg</a>
          <div className="text-[10px] text-[#64748b] mt-3">ตอบกลับ 24 ชม.</div>
        </div>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4">
          <h3 className="text-sm font-bold mb-3">📋 FAQ</h3>
          <div className="space-y-2 text-xs">
            <details className="bg-[#0b0f1a] rounded-lg p-3">
              <summary className="cursor-pointer font-medium">สั่งซื้อแล้วไม่ได้ Config?</summary>
              <p className="mt-2 text-[#64748b]">แจ้งแอดมิน LINE พร้อมแคปหน้าจอ</p>
            </details>
            <details className="bg-[#0b0f1a] rounded-lg p-3">
              <summary className="cursor-pointer font-medium">ลืมรหัสผ่าน?</summary>
              <p className="mt-2 text-[#64748b]"><a href="/login" className="text-[#00e68a]">กดตั้งรหัสใหม่</a></p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
