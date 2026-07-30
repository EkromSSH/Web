export default function Footer() {
  return (
    <section className="bg-[#111927] border-t border-[#1e2d47] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h4 className="text-[#00e68a] font-bold mb-3">EkromNetVPN</h4>
            <p className="text-[#64748b]">บริการ VPN คุณภาพสูง ราคาเข้าถึง</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">ลิงก์</h4>
            <ul className="space-y-2 text-[#94a3b8]">
              <li><a href="/">หน้าแรก</a></li>
              <li><a href="/order">สั่งซื้อ</a></li>
              <li><a href="/register">สมัครสมาชิก</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">เซิร์ฟเวอร์</h4>
            <ul className="space-y-2 text-[#94a3b8]">
              <li>AIS-VIP</li>
              <li>AIS-TCP</li>
              <li>FB-GAMING</li>
              <li>TRUE VLESS</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">ติดต่อ</h4>
            <ul className="space-y-2 text-[#94a3b8]">
              <li>LINE: @578infzg</li>
              <li>Telegram: @ekrom_support</li>
              <li>Facebook: EkromVPN</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1e2d47] mt-8 pt-6 text-center text-[#64748b]">
          © 2026 EkromNetVPN
        </div>
      </div>
    </section>
  );
}