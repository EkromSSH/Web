"use client";
import Link from "next/link";
export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#121826] px-4 pt-16 pb-10">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-xl flex items-center justify-center text-xl mb-2 shadow-md">📝</div>
          <h1 className="text-lg font-bold">สมัครสมาชิก</h1>
          <p className="text-[10px] text-[#94a3b8] mt-0.5">EkromNetVPN</p>
        </div>
        <div className="bg-[#1a2235] border border-[#2a3450] rounded-xl p-4">
          <form onSubmit={e => e.preventDefault()}>
            <input className="w-full px-3 py-2.5 mb-2.5 bg-[#121826] border border-[#2a3450] rounded-lg text-sm text-white placeholder-[#64748b] focus:border-[#a855f7] outline-none" placeholder="ชื่อผู้ใช้" required />
            <input type="tel" className="w-full px-3 py-2.5 mb-2.5 bg-[#121826] border border-[#2a3450] rounded-lg text-sm text-white placeholder-[#64748b] focus:border-[#a855f7] outline-none" placeholder="เบอร์โทร" required />
            <input type="password" className="w-full px-3 py-2.5 mb-2.5 bg-[#121826] border border-[#2a3450] rounded-lg text-sm text-white placeholder-[#64748b] focus:border-[#a855f7] outline-none" placeholder="รหัสผ่าน" required />
            <input type="password" className="w-full px-3 py-2.5 mb-4 bg-[#121826] border border-[#2a3450] rounded-lg text-sm text-white placeholder-[#64748b] focus:border-[#a855f7] outline-none" placeholder="ยืนยันรหัสผ่าน" required />
            <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-xs shadow-md">สมัครสมาชิก</button>
          </form>
          <div className="mt-3 text-center text-[10px] text-[#64748b]">มีบัญชีแล้ว? <Link href="/login" className="text-[#22d3ee] font-semibold">เข้าสู่ระบบ</Link></div>
        </div>
      </div>
    </div>
  );
}
