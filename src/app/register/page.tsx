"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-14 pb-10">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-xl shadow-[#a855f7]/20">
            <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <h1 className="text-xl font-bold text-white">สมัครสมาชิก</h1>
          <p className="text-xs text-[#94a3b8] mt-1.5">เริ่มต้นใช้งาน EkromNetVPN</p>
        </div>

        <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-6">
          <form onSubmit={e => e.preventDefault()}>
            <div className="mb-3.5">
              <label className="text-xs text-[#94a3b8] block mb-1.5">ชื่อผู้ใช้</label>
              <input className="w-full px-4 py-3 bg-[#080c1a] border border-[#1a1f35] rounded-xl text-sm text-white placeholder-[#4a5580] focus:border-[#a855f7] outline-none transition" placeholder="ชื่อผู้ใช้ 3 ตัวขึ้นไป" required />
            </div>
            <div className="mb-3.5">
              <label className="text-xs text-[#94a3b8] block mb-1.5">เบอร์โทร</label>
              <input type="tel" className="w-full px-4 py-3 bg-[#080c1a] border border-[#1a1f35] rounded-xl text-sm text-white placeholder-[#4a5580] focus:border-[#a855f7] outline-none transition" placeholder="เบอร์โทรศัพท์" required />
            </div>
            <div className="mb-3.5">
              <label className="text-xs text-[#94a3b8] block mb-1.5">รหัสผ่าน</label>
              <input type={show ? "text" : "password"} className="w-full px-4 py-3 bg-[#080c1a] border border-[#1a1f35] rounded-xl text-sm text-white placeholder-[#4a5580] focus:border-[#a855f7] outline-none transition" placeholder="รหัสผ่าน 4 ตัวขึ้นไป" required />
            </div>
            <div className="mb-5">
              <label className="text-xs text-[#94a3b8] block mb-1.5">ยืนยันรหัสผ่าน</label>
              <input type="password" className="w-full px-4 py-3 bg-[#080c1a] border border-[#1a1f35] rounded-xl text-sm text-white placeholder-[#4a5580] focus:border-[#a855f7] outline-none transition" placeholder="ยืนยันรหัสผ่าน" required />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-sm shadow-lg shadow-[#a855f7]/20">
              สมัครสมาชิก
            </button>
          </form>
          <div className="mt-4 text-center text-xs text-[#4a5580]">
            มีบัญชีแล้ว? <Link href="/login" className="text-[#22d3ee] font-semibold">เข้าสู่ระบบ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
