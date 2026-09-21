import { Link } from 'react-router'

function privacy(){
    return(

<div dir="rtl" className="min-h-screen bg-[#080808] text-white">
  <div className="min-h-screen bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]">
    <header className="mx-auto max-w-4xl px-6 pt-5 text-center">
      <div className="flex justify-center gap-2 text-[10px] text-gray-600">
        <span>الرئيسية</span>
        <span>/</span>
        <span className="text-orange-500">سياسة الخصوصية</span>
      </div>
      <div className="mx-auto mt-5 flex h-10 w-10 items-center justify-center
         rounded-xl border border-orange-500/30 bg-orange-500/10
         text-orange-500">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x={5} y={10} width={14} height={11} rx={2} />
          <path strokeLinecap="round" d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
      </div>
      <h1 className="mt-4 text-2xl font-extrabold tracking-tight">
        سياسة الخصوصية
      </h1>
      <p className="mt-1 text-[10px] text-gray-600">
        آخر تحديث: 15 مارس 2026
      </p>
    </header>
    
    <main className="mx-auto max-w-4xl px-6 pb-12 pt-16">
      
      <div className="mb-6 rounded-xl border border-orange-500/10
         bg-orange-950/30 px-6 py-4">
        <div className="flex items-center gap-2 text-[11px] font-bold text-orange-500">
          <span>خصوصيتك تهمنا</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z" />
            <path strokeLinecap="round" d="M9 12l2 2 4-4" />
          </svg>
        </div>
        <p className="mt-1 text-[10px] leading-6 text-orange-200/50">
          نحن ملتزمون بحماية معلوماتك الشخصية والحفاظ على خصوصيتك.
        </p>
      </div>
      
      <section className="mb-7">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md
             bg-orange-500 text-[9px] font-bold text-white">
            1
          </span>
          <h2 className="text-sm font-bold">
            مقدمة
          </h2>
        </div>
        <p className="pr-7 text-[10px] leading-6 text-gray-500">
          مرحباً بك في عدسة. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك
          الشخصية. تشرح سياسة الخصوصية هذه كيفية جمع معلوماتك
          واستخدامها وحمايتها عند استخدامك لموقعنا.
        </p>
      </section>
      
      <section className="mb-7">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md
             bg-orange-500 text-[9px] font-bold text-white">
            2
          </span>
          <h2 className="text-sm font-bold">
            المعلومات التي نجمعها
          </h2>
        </div>
        <ul className="space-y-2 pr-7 text-[10px] text-gray-500">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-orange-500">●</span>
            <span>
              <strong className="text-gray-400">بيانات الهوية:</strong>
              الاسم، البريد الإلكتروني أو معرف المستخدم.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-orange-500">●</span>
            <span>
              <strong className="text-gray-400">بيانات الاتصال:</strong>
              مثل البريد الإلكتروني.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-orange-500">●</span>
            <span>
              <strong className="text-gray-400">بيانات تقنية:</strong>
              عنوان IP، نوع المتصفح، المنطقة الزمنية ونظام التشغيل.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-orange-500">●</span>
            <span>
              <strong className="text-gray-400">بيانات الاستخدام:</strong>
              معلومات حول كيفية استخدامك لموقعنا وخدماتنا.
            </span>
          </li>
        </ul>
      </section>
     
      <section className="mb-7">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md
             bg-orange-500 text-[9px] font-bold text-white">
            3
          </span>
          <h2 className="text-sm font-bold">
            كيف نستخدم معلوماتك
          </h2>
        </div>
        <ul className="space-y-2 pr-7 text-[10px] text-gray-500">
          <li className="flex items-start gap-2">
            <span className="text-orange-500">●</span>
            <span>لتقديم خدماتنا وتحسينها.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">●</span>
            <span>لإرسال الإشعارات والتحديثات المهمة.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">●</span>
            <span>لتخصيص تجربة الاستخدام.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">●</span>
            <span>لتحليل استخدام موقعنا وتحسين خدماتنا.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">●</span>
            <span>لاكتشاف ومنع الأنشطة المشبوهة.</span>
          </li>
        </ul>
      </section>
      
      <section className="mb-7">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md
             bg-orange-500 text-[9px] font-bold text-white">
            4
          </span>
          <h2 className="text-sm font-bold">
            ملفات تعريف الارتباط
          </h2>
        </div>
        <p className="pr-7 text-[10px] leading-6 text-gray-500">
          نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتحسين
          تجربتك على موقعنا. تساعدنا هذه الملفات على تذكر تفضيلاتك
          وتحليل استخدام الموقع وتقديم محتوى أكثر ملاءمة.
        </p>
      </section>
     
      <section className="mb-7">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md
             bg-orange-500 text-[9px] font-bold text-white">
            5
          </span>
          <h2 className="text-sm font-bold">
            أمان البيانات
          </h2>
        </div>
        <p className="pr-7 text-[10px] leading-6 text-gray-500">
          نحن نستخدم تدابير أمنية مناسبة لحماية بياناتك الشخصية من
          الوصول غير المصرح به أو التغيير أو الكشف أو الإتلاف.
          ومع ذلك لا يمكن ضمان أمان البيانات بنسبة مئة بالمئة.
        </p>
      </section>
      
      <section className="mb-7">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md
             bg-orange-500 text-[9px] font-bold text-white">
            6
          </span>
          <h2 className="text-sm font-bold">
            حقوقك
          </h2>
        </div>
        <ul className="space-y-2 pr-7 text-[10px] text-gray-500">
          <li className="flex items-start gap-2">
            <span className="text-orange-500">●</span>
            <span>طلب الوصول إلى بياناتك الشخصية.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">●</span>
            <span>طلب تصحيح بياناتك الشخصية.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">●</span>
            <span>طلب حذف بياناتك الشخصية.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">●</span>
            <span>الاعتراض على معالجة بياناتك الشخصية.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">●</span>
            <span>طلب تقييد معالجة بياناتك الشخصية.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">●</span>
            <span>الحق في سحب الموافقة.</span>
          </li>
        </ul>
      </section>
      
      <section className="mb-10">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md
             bg-orange-500 text-[9px] font-bold text-white">
            7
          </span>
          <h2 className="text-sm font-bold">
            تواصل معنا
          </h2>
        </div>
        <p className="pr-7 text-[10px] leading-6 text-gray-500">
          إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا.
        </p>
        <a href="mailto:hello@adasah.com" className="mt-2 block pr-7 text-[10px] font-semibold
           text-orange-500 hover:text-orange-400">
          hello@adasah.com
        </a>
      </section>
      
      <footer className="border-t border-white/[0.06] pt-5 text-center">
        <p className="text-[9px] text-gray-600">
          باستخدامك للموقع، فإنك توافق على سياسة الخصوصية هذه.
          <Link to="/terms" className="text-orange-500 hover:text-orange-400">
            اقرأ شروط الخدمة
          </Link>
        </p>
      </footer>
    </main>
  </div>
</div>

    )
}

export default privacy;