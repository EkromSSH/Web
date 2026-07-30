"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen bg-[#0b0f1a] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#00e68a] to-[#00bcd4] rounded-2xl flex items-center justify-center text-2xl font-bold text-black mb-3">E</div>
          <h1 className="text-2xl font-bold text-[#00e68a]">Ekrom<span className="text-[#00bcd4]">Net</span>VPN</h1>
          <p className="text-xs text-[#64748b] mt-2">สมัครสมาชิก</p>
        </div>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-5">📝 สมัครสมาชิก</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label className="text-xs text-[#94a3b8] block mb-1">ชื่อผู้ใช้</label>
              <input className="w-full p-3 bg-[#0b0f1a] border border-[#1e2d47] rounded-xl text-white text-sm focus:border-[#00e68a] outline-none" placeholder="ชื่อผู้ใช้ 3 ตัวขึ้นไป" required />
            </div>
            <div className="mb-4">
              <label className="text-xs text-[#94a3b8] block mb-1">เบอร์โทร</label>
              <input type="tel" className="w-full p-3 bg-[#0b0f1a] border border-[#1e2d47] rounded-xl text-white text-sm focus:border-[#00e68a] outline-none" placeholder="เบอร์โทร" required />
            </div>
            <div className="mb-4">
              <label className="text-xs text-[#94a3b8] block mb-1">รหัสผ่าน</label>
              <input type={show ? "text" : "password"} className="w-full p-3 bg-[#0b0f1a] border border-[#1e2d47] rounded-xl text-white text-sm focus:border-[#00e68a] outline-none pr-10" placeholder="รหัสผ่าน 4 ตัวขึ้นไป" required />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-[300px] text-xs text-[#64748b]">{show ? "🙈" : "👁️"}</button>
            </div>
            <div className="mb-5">
              <label className="text-xs text-[#94a3b8] block mb-2">ยืนยันรหัสผ่าน</label>
              <input type="password" className="w-full p-3 bg-[#0b0f1a] border border-[#1e2d47] rounded-xl text-white text-sm focus:border-[#00e68a] outline-none" placeholder="ยืนยันรหัสผ่าน" required />
            </div>
            <div className="flex items-start gap-2 mb-5">
              <input type="checkbox" id="terms" className="accent-[#00e68a] mt-1" required />
              <label htmlFor="terms" className="text-xs text-[#94a3b8]">ยอมรับ <a href="#" className="text-[#00e68a]">ข้อกำหนดการใช้งาน</a></label>
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-[#00e68a] text-black font-bold text-sm hover:bg-[#00bcd4] transition">สมัครสมาชิก</button>
          </form>
          <div className="mt-4 text-center text-xs text-[#64748b]">มีบัญชีแล้ว? <Link href="/login" className="text-[#00e68a]">เข้าสู่ระบบ</Link></div>
        </div>
      </div>
    </div>
  );
}