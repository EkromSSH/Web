"use client";
import Link from "next/link";
export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] px-4 pt-16 pb-10">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#00e68a] to-[#00bcd4] rounded-2xl flex items-center justify-center text-2xl font-bold text-black mb-2">E</div>
          <h1 className="text-lg font-bold">สมัครสมาชิก</h1>
        </div>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4">
          <form onSubmit={e => e.preventDefault()}>
            <input className="w-full px-3 py-2.5 mb-2.5 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-sm text-white placeholder-[#64748b] focus:border-[#00e68a] outline-none" placeholder="ชื่อผู้ใช้" required />
            <input type="tel" className="w-full px-3 py-2.5 mb-2.5 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-sm text-white placeholder-[#64748b] focus:border-[#00e68a] outline-none" placeholder="เบอร์โทร" required />
            <input type="password" className="w-full px-3 py-2.5 mb-2.5 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-sm text-white placeholder-[#64748b] focus:border-[#00e68a] outline-none" placeholder="รหัสผ่าน" required />
            <input type="password" className="w-full px-3 py-2.5 mb-4 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-sm text-white placeholder-[#64748b] focus:border-[#00e68a] outline-none" placeholder="ยืนยันรหัสผ่าน" required />
            <button className="w-full py-2.5 rounded-lg bg-[#00e68a] text-black font-bold text-xs">สมัครสมาชิก</button>
          </form>
          <div className="mt-3 text-center text-[10px] text-[#64748b]">มีบัญชีแล้ว? <Link href="/login" className="text-[#00e68a] font-semibold">เข้าสู่ระบบ</Link></div>
        </div>
      </div>
    </div>
  );
}
