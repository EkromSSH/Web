"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-14 pb-10">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-xl shadow-[#a855f7]/20">
            <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h1 className="text-xl font-bold text-white">เข้าสู่ระบบ</h1>
          <p className="text-xs text-[#94a3b8] mt-1.5">EkromNetVPN</p>
        </div>

        <div className="bg-[#0f1326] border border-[#1a1f35] rounded-2xl p-6">
          <form onSubmit={e => e.preventDefault()}>
            <div className="mb-4">
              <label className="text-xs text-[#94a3b8] block mb-1.5">ชื่อผู้ใช้ / เบอร์โทร</label>
              <input className="w-full px-4 py-3 bg-[#080c1a] border border-[#1a1f35] rounded-xl text-sm text-white placeholder-[#4a5580] focus:border-[#a855f7] outline-none transition" placeholder="ชื่อผู้ใช้" required />
            </div>
            <div className="mb-5">
              <label className="text-xs text-[#94a3b8] block mb-1.5">รหัสผ่าน</label>
              <div className="relative">
                <input type={show ? "text" : "password"} className="w-full px-4 py-3 bg-[#080c1a] border border-[#1a1f35] rounded-xl text-sm text-white placeholder-[#4a5580] pr-10 focus:border-[#a855f7] outline-none transition" placeholder="รหัสผ่าน" required />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#4a5580]">{show ? "🙈" : "👁️"}</button>
              </div>
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-sm shadow-lg shadow-[#a855f7]/20">
              เข้าสู่ระบบ
            </button>
          </form>
          <div className="mt-4 text-center text-xs text-[#4a5580]">
            ยังไม่มีบัญชี? <Link href="/register" className="text-[#22d3ee] font-semibold">สมัครสมาชิก</Link>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-xs text-[#4a5580] hover:text-[#22d3ee]">← กลับหน้าแรก</Link>
        </div>
      </div>
    </div>
  );
}
