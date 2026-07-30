"use client";
import { useState } from "react";
import Link from "next/link";
export default function LoginPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen bg-[#0b0f1a] px-3 pt-14 pb-8">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-5">
          <div className="w-9 h-9 mx-auto bg-gradient-to-br from-[#00e68a] to-[#00bcd4] rounded-xl flex items-center justify-center text-sm font-bold text-black mb-2">E</div>
          <h1 className="text-sm font-bold">เข้าสู่ระบบ</h1>
          <p className="text-[8px] text-[#64748b] mt-0.5">EkromNetVPN</p>
        </div>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-lg p-3">
          <form onSubmit={e => e.preventDefault()}>
            <input className="w-full px-2.5 py-2 mb-2 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-xs text-white placeholder-[#64748b] focus:border-[#00e68a] outline-none" placeholder="ชื่อผู้ใช้" required />
            <div className="relative mb-3">
              <input type={show ? "text" : "password"} className="w-full px-2.5 py-2 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-xs text-white pr-8 placeholder-[#64748b] focus:border-[#00e68a] outline-none" placeholder="รหัสผ่าน" required />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[8px] text-[#64748b]">{show ? "🙈" : "👁️"}</button>
            </div>
            <button className="w-full py-2 rounded-lg bg-[#00e68a] text-black font-bold text-[9px]">เข้าสู่ระบบ</button>
          </form>
          <div className="mt-2.5 text-center text-[9px] text-[#64748b]">ยังไม่มีบัญชี? <Link href="/register" className="text-[#00e68a] font-semibold">สมัคร</Link></div>
        </div>
      </div>
    </div>
  );
}
