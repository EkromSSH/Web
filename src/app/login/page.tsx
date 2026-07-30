"use client";
import { useState } from "react";
import Link from "next/link";
export default function LoginPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen bg-[#080b15] overflow-x-hidden">
      <div className="max-w-md mx-auto px-4 pt-20 pb-10">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#00f5a0] to-[#00d9f5] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#00f5a0]/30 mb-3">
            <svg className="w-7 h-7 text-[#080b15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h1 className="text-xl font-black text-white">เข้าสู่ระบบ</h1>
          <p className="text-xs text-white/40 mt-1">EkromNetVPN</p>
        </div>
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
          <form onSubmit={e => e.preventDefault()}>
            <div className="mb-3.5">
              <label className="text-[10px] text-white/40 block mb-1.5 font-medium">ชื่อผู้ใช้</label>
              <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/20 focus:border-[#00f5a0]/50 focus:outline-none transition" placeholder="ชื่อผู้ใช้" required />
            </div>
            <div className="mb-5">
              <label className="text-[10px] text-white/40 block mb-1.5 font-medium">รหัสผ่าน</label>
              <div className="relative">
                <input type={show ? "text" : "password"} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white pr-12 placeholder-white/20 focus:border-[#00f5a0]/50 focus:outline-none transition" placeholder="รหัสผ่าน" required />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-white/30">{show ? "🙈" : "👁️"}</button>
              </div>
            </div>
            <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] text-[#080b15] font-extrabold text-sm shadow-xl shadow-[#00f5a0]/25">เข้าสู่ระบบ</button>
          </form>
          <div className="mt-4 text-center text-[11px] text-white/30">
            ยังไม่มีบัญชี? <Link href="/register" className="text-[#00f5a0] font-bold">สมัครสมาชิก</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
