"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen bg-[#121826] px-4 pt-16 pb-10">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#a855f7] to-[#22d3ee] rounded-xl flex items-center justify-center text-xl mb-2 shadow-md">
            <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h1 className="text-lg font-bold">เข้าสู่ระบบ</h1>
          <p className="text-[10px] text-[#94a3b8] mt-0.5">EkromNetVPN</p>
        </div>
        <div className="bg-[#1a2235] border border-[#2a3450] rounded-xl p-4">
          <form onSubmit={e => e.preventDefault()}>
            <input className="w-full px-3 py-2.5 mb-3 bg-[#121826] border border-[#2a3450] rounded-lg text-sm text-white placeholder-[#64748b] focus:border-[#a855f7] outline-none" placeholder="ชื่อผู้ใช้" required />
            <div className="relative mb-4">
              <input type={show ? "text" : "password"} className="w-full px-3 py-2.5 bg-[#121826] border border-[#2a3450] rounded-lg text-sm text-white placeholder-[#64748b] pr-10 focus:border-[#a855f7] outline-none" placeholder="รหัสผ่าน" required />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#64748b]">{show ? "🙈" : "👁️"}</button>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-black font-bold text-xs shadow-md">เข้าสู่ระบบ</button>
          </form>
          <div className="mt-3 text-center text-[10px] text-[#64748b]">ยังไม่มีบัญชี? <Link href="/register" className="text-[#22d3ee] font-semibold">สมัครสมาชิก</Link></div>
        </div>
        <div className="text-center mt-4"><Link href="/" className="text-[10px] text-[#64748b]">← กลับหน้าแรก</Link></div>
      </div>
    </div>
  );
}
