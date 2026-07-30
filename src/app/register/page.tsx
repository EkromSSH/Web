"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen bg-[#0b0f1a] pt-16 px-4">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#00e68a] to-[#00bcd4] rounded-xl flex items-center justify-center text-xl font-bold text-black mb-2">E</div>
          <h1 className="text-lg font-bold text-[#00e68a]">Ekrom<span className="text-[#00bcd4]">Net</span>VPN</h1>
        </div>
        <div className="bg-[#111927] border border-[#1e2d47] rounded-xl p-4">
          <h2 className="text-sm font-bold mb-4">📝 สมัครสมาชิก</h2>
          <form onSubmit={e => e.preventDefault()}>
            <input className="w-full p-3 mb-3 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-sm text-white focus:border-[#00e68a] outline-none" placeholder="ชื่อผู้ใช้" required />
            <input type="tel" className="w-full p-3 mb-3 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-sm text-white focus:border-[#00e68a] outline-none" placeholder="เบอร์โทร" required />
            <input type={show ? "text" : "password"} className="w-full p-3 mb-3 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-sm text-white focus:border-[#00e68a] outline-none" placeholder="รหัสผ่าน" required />
            <input type="password" className="w-full p-3 mb-4 bg-[#0b0f1a] border border-[#1e2d47] rounded-lg text-sm text-white focus:border-[#00e68a] outline-none" placeholder="ยืนยันรหัสผ่าน" required />
            <button type="submit" className="w-full py-3 rounded-lg bg-[#00e68a] text-black font-bold text-sm">สมัครสมาชิก</button>
          </form>
          <div className="mt-3 text-center text-xs text-[#64748b]">มีบัญชีแล้ว? <Link href="/login" className="text-[#00e68a]">เข้าสู่ระบบ</Link></div>
        </div>
      </div>
    </div>
  );
}
