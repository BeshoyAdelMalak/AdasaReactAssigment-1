import { Link } from 'react-router'

function terms(){
    return (
        <div dir="rtl" className="min-h-screen bg-[#080808] text-white">
  
  <div className="min-h-screen bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]">
   
    <header className="mx-auto max-w-4xl px-6 pt-8 text-center">
      
      <div className="mb-8 flex justify-center gap-2 text-[11px] text-gray-500">
        <span>الرئيسية</span>
        <span>/</span>
        <span className="text-orange-500">شروط الخدمة</span>
      </div>
      
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl
         border border-orange-500/30 bg-orange-500/10
         text-orange-500 shadow-lg shadow-orange-950/20">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h9l4 4v14H6V3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5M9 13h6M9 17h6" />
        </svg>
      </div>
      
      <h1 className="mt-5 text-3xl font-extrabold tracking-tight">
        شروط الخدمة
      </h1>
      
      <p className="mt-2 text-[11px] text-gray-500">
        آخر تحديث: 15 مارس 2026
      </p>
    </header>
    
    <main className="mx-auto max-w-4xl px-6 pb-16 pt-16">
      
      <div className="mb-7 rounded-xl border border-yellow-500/20
         bg-yellow-500/[0.08] px-6 py-4">
        <div className="flex items-center gap-2 text-xs font-bold text-yellow-500">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4M12 17h.01M10.3 3.7 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z" />
          </svg>
          <span>إشعار مهم</span>
        </div>
        <p className="mt-2 text-[11px] leading-6 text-yellow-500/70">
          يرجى قراءة شروط الخدمة بعناية قبل استخدام الموقع.
          باستخدامك للموقع فإنك توافق على جميع الشروط والأحكام المذكورة.
        </p>
      </div>
      
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center
             rounded-md bg-orange-500 text-[10px] font-bold text-white">
            1
          </span>
          <h2 className="text-base font-bold text-white">
            الموافقة على الشروط
          </h2>
        </div>
        <p className="pr-8 text-[11px] leading-7 text-gray-500">
          بالوصول إلى الموقع واستخدامه، فإنك توافق على الالتزام بجميع
          الشروط والأحكام الواردة هنا. إذا كنت لا توافق على أي من هذه
          الشروط، فيجب عليك عدم استخدام الموقع أو الوصول إليه.
        </p>
      </section>
      
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center
             rounded-md bg-orange-500 text-[10px] font-bold text-white">
            2
          </span>
          <h2 className="text-base font-bold text-white">
            رخصة الاستخدام
          </h2>
        </div>
        <p className="pr-8 text-[11px] leading-7 text-gray-500">
          يُمنح الإذن لك للوصول إلى الموقع والمحتوى المعروض للاستخدام
          الشخصي غير التجاري فقط. هذا الإذن لا يشمل:
        </p>
        <ul className="mt-3 space-y-2 pr-10 text-[11px] text-gray-500">
          <li className="flex items-start gap-2">
            <span className="text-red-500">×</span>
            <span>تعديل أو نسخ المحتوى</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">×</span>
            <span>استخدام المواد لأي غرض تجاري أو عام</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">×</span>
            <span>محاولة فك أو عكس هندسة أي برنامج على الموقع</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">×</span>
            <span>إزالة حقوق الطبع والنشر أو العلامات التجارية</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">×</span>
            <span>نقل المواد إلى شخص آخر أو نسخها على خادم آخر</span>
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center
             rounded-md bg-orange-500 text-[10px] font-bold text-white">
            3
          </span>
          <h2 className="text-base font-bold text-white">
            إخلاء المسؤولية
          </h2>
        </div>
        <p className="pr-8 text-[11px] leading-7 text-gray-500">
          يتم تقديم المحتوى على الموقع على أساس "كما هو". لا نقدم أي
          ضمانات صريحة أو ضمنية بشأن دقة أو موثوقية أو اكتمال المحتوى.
          استخدامك للموقع يكون على مسؤوليتك الخاصة.
        </p>
      </section>
      
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center
             rounded-md bg-orange-500 text-[10px] font-bold text-white">
            4
          </span>
          <h2 className="text-base font-bold text-white">
            القيود
          </h2>
        </div>
        <p className="pr-8 text-[11px] leading-7 text-gray-500">
          في أي حال من الأحوال، لن نكون مسؤولين عن أي أضرار مباشرة أو
          غير مباشرة تنتج عن استخدامك أو عدم القدرة على استخدام الموقع.
        </p>
      </section>
      
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center
             rounded-md bg-orange-500 text-[10px] font-bold text-white">
            5
          </span>
          <h2 className="text-base font-bold text-white">
            محتوى المستخدم
          </h2>
        </div>
        <p className="pr-8 text-[11px] leading-7 text-gray-500">
          إذا قمت بنشر محتوى على موقعنا، فإنك تمنحنا ترخيصاً غير حصري
          وعالمي وغير قابل للاستخدام لهذا المحتوى، شريطة أن يكون
          المحتوى الذي تقدمه مناسباً للاستخدام وغير مخالف للقوانين.
        </p>
        <p className="mt-3 pr-8 text-[11px] font-semibold text-gray-400">
          يجب ألا يكون المحتوى:
        </p>
        <ul className="mt-3 space-y-2 pr-10 text-[11px] text-gray-500">
          <li className="flex items-start gap-2">
            <span className="text-red-500">×</span>
            <span>أن يكون تشهيرياً أو فاحشاً أو مسيئاً</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">×</span>
            <span>أن ينتهك حقوق الملكية الفكرية للغير</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">×</span>
            <span>أن يحتوي على فيروسات أو أكواد ضارة</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">×</span>
            <span>أن يكون مضللاً أو يحتوي على معلومات كاذبة</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500">×</span>
            <span>الإعلان عن منتجات أو خدمات غير مصرح بها</span>
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center
             rounded-md bg-orange-500 text-[10px] font-bold text-white">
            6
          </span>
          <h2 className="text-base font-bold text-white">
            التعديلات
          </h2>
        </div>
        <p className="pr-8 text-[11px] leading-7 text-gray-500">
          نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق.
          استمرارك في استخدام الموقع بعد إجراء التعديلات يعني موافقتك
          على الشروط الجديدة.
        </p>
      </section>
      
      <section className="mb-10">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center
             rounded-md bg-orange-500 text-[10px] font-bold text-white">
            7
          </span>
          <h2 className="text-base font-bold text-white">
            معلومات الاتصال
          </h2>
        </div>
        <p className="pr-8 text-[11px] leading-7 text-gray-500">
          إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا.
        </p>
        <div className="mt-3 pr-8">
          <a href="mailto:hello@adasah.com" className="text-[11px] font-semibold text-orange-500 hover:text-orange-400">
            hello@adasah.com
          </a>
        </div>
      </section>
      
      <footer className="border-t border-white/[0.07] pt-6 text-center">
        <p className="text-[10px] text-gray-600">
          باستخدامك للموقع، فإنك توافق على شروط الخدمة هذه.
          <Link to="/privacy" className="text-orange-500 hover:text-orange-400">
            سياسة الخصوصية
          </Link>
        </p>
      </footer>
    </main>
  </div>
</div>


    )
}

export default terms;