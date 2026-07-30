"use client";
import Link from "next/link";
export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#080b15] overflow-x-hidden">
      <div className="max-w-md mx-auto px-4 pt-20 pb-10">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#00f5a0] to-[#00d9f5] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#00f5a0]/30 mb-3">
            <svg className="w-7 h-7 text-[#080b15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <h1 className="text-xl font-black text-white">สมัครสมาชิก</h1>
          <p className="text-xs text-white/40 mt-1">เริ่มต้นใช้งาน EkromNetVPN</p>
        </div>
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
          <form onSubmit={e => e.preventDefault()}>
            <div className="mb-3">
              <label className="text-[10px] text-white/40 block mb-1.5 font-medium">ชื่อผู้ใช้</label>
              <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/20 focus:border-[#00f5a0]/50 focus:outline-none transition" placeholder="ชื่อผู้ใช้ 3 ตัวขึ้นไป" required />
            </div>
            <div className="mb-3">
              <label className="text-[10px] text-white/40 block mb-1.5 font-medium">เบอร์โทร</label>
              <input type="tel" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/20 focus:border-[#00f5a0]/50 focus:outline-none transition" placeholder="เบอร์โทรศัพท์" required />
            </div>
            <div className="mb-3">
              <label className="text-[10px] text-white/40 block mb-1.5 font-medium">รหัสผ่าน</label>
              <input type="password" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/20 focus:border-[#00f5a0]/50 focus:outline-none transition" placeholder="รหัสผ่าน 4 ตัวขึ้นไป" required />
            </div>
            <div className="mb-5">
              <label className="text-[10px] text-white/40 block mb-1.5 font-medium">ยืนยันรหัสผ่าน</label>
              <input type="password" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/20 focus:border-[#00f5a0]/50 focus:outline-none transition" placeholder="ยืนยันรหัสผ่าน" required />
            </div>
            <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-[#080b15] font-extrabold text-sm shadow-xl shadow-[#00f5a0]/25">สมัครสมาชิก</button>
          </form>
          <div className="mt-4 text-center text-[11px] text-white/30">
            มีบัญชีแล้ว? <Link href="/login" className="text-[#00f5a0] font-bold">เข้าสู่ระบบ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
