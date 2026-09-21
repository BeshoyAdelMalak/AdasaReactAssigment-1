import { Link } from "react-router";

function Footer() {
   return(  
<footer className="bg-[#090909] text-gray-400 border-t border-white/10 w-[85%] mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="rounded-2xl bg-orange-500 flex items-center justify-center text-white text-2xl font-bold w-10 h-13 text-center">
          ع
        </div>
        <h2 className="text-2xl font-bold text-white">عدسة</h2>
      </div>
      <p className="leading-8 text-sm">
        مدونة متخصصة في فن التصوير الفوتوغرافي،
        نشارك معكم أسرار المحترفين ونصائح عملية
        لتطوير مهاراتكم.
      </p>
      <div className="flex gap-3 mt-7">
        <a href="https://www.youtube.com/@adasah" className="w-12 h-12 rounded-xl bg-[#181818] border border-white/10 flex items-center justify-center hover:bg-orange-500 transition">
          ▶
        </a>
        <a href="https://www.linkedin.com/company/adasah" className="w-12 h-12 rounded-xl bg-[#181818] border border-white/10 flex items-center justify-center hover:bg-orange-500 transition">
          in
        </a>
        <a href="https://github.com/adasah" className="w-12 h-12 rounded-xl bg-[#181818] border border-white/10 flex items-center justify-center hover:bg-orange-500 transition">
          ●
        </a>
        <a href="https://twitter.com/adasah" className="w-12 h-12 rounded-xl bg-[#181818] border border-white/10 flex items-center justify-center hover:bg-orange-500 transition">
          𝕏
        </a>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-7">
        استكشف
        <span className="text-orange-500">—</span>
      </h3>
      <div className="flex flex-col gap-5 text-sm">
        <Link to="/home" className="hover:text-orange-500 transition">الرئيسية</Link>
        <Link to="/blog" className="hover:text-orange-500 transition">المدونة</Link>
        <Link to="/aboutus" className="hover:text-orange-500 transition">من نحن</Link>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-7">
        التصنيفات
        <span className="text-orange-500">—</span>
      </h3>
      <div className="flex flex-col gap-5 text-sm">
        <Link to="" className="hover:text-orange-500 transition">إضاءة</Link>
        <Link to="" className="hover:text-orange-500 transition">بورتريه</Link>
        <Link to="" className="hover:text-orange-500 transition">مناظر طبيعية</Link>
        <Link to="" className="hover:text-orange-500 transition">تقنيات</Link>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-7">
        إبقى على اطلاع
        <span className="text-orange-500">—</span>
      </h3>
      <p className="text-sm leading-7 mb-5">
        اشترك للحصول على أحدث المقالات
        والتحديثات.
      </p>
      <input type="email" placeholder="أدخل بريدك الإلكتروني" className="w-full h-14 px-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-orange-500 text-sm" />
      <button className="w-full h-16 mt-4 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition">
        اشترك
      </button>
    </div>
  </div>
  <div className="border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5 text-sm">
      <div className="flex gap-8">
        <Link to="/privacy" className="hover:text-white transition">سياسة الخصوصية</Link>
        <Link to="/terms" className="hover:text-white transition">شروط الخدمة</Link>
      </div>
      <p>
        © 2026 عدسة. صنع بكل
        <span className="text-orange-500">♥</span>
        جميع الحقوق محفوظة.
      </p>
    </div>
  </div>
</footer>
);
}
export default Footer;