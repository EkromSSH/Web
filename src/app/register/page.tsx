"use client";
import Link from "next/link";
export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] px-3 pt-14 pb-8">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-5">
          <div className="w-10 h-10 mx-auto bg-gradient-to-br from-[#00e68a] to-[#00bcd4] rounded-xl flex items-center justify-center text-base font-bold text-black mb-2">E</div>
          <h1 className="text-base font-bold">สมัครสมาชิก</h1>
        </div>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-lg p-3">
          <form onSubmit={e => e.preventDefault()}>
            <input className="w-full px-2.5 py-2 mb-2 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-xs text-white placeholder-[#64748b] focus:border-[#00e68a] outline-none" placeholder="ชื่อผู้ใช้" required />
            <input type="tel" className="w-full px-2.5 py-2 mb-2 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-xs text-white placeholder-[#64748b] focus:border-[#00e68a] outline-none" placeholder="เบอร์โทร" required />
            <input type="password" className="w-full px-2.5 py-2 mb-2 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-xs text-white placeholder-[#64748b] focus:border-[#00e68a] outline-none" placeholder="รหัสผ่าน" required />
            <input type="password" className="w-full px-2.5 py-2 mb-3 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-xs text-white placeholder-[#64748b] focus:border-[#00e68a] outline-none" placeholder="ยืนยันรหัสผ่าน" required />
            <button className="w-full py-2 rounded-lg bg-[#00e68a] text-black font-bold text-[10px]">สมัครสมาชิก</button>
          </form>
          <div className="mt-2.5 text-center text-[9px] text-[#64748b]">มีบัญชีแล้ว? <Link href="/login" className="text-[#00e68a] font-semibold">เข้าสู่ระบบ</Link></div>
        </div>
      </div>
    </div>
  );
}
