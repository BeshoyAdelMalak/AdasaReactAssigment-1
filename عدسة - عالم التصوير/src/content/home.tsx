import data from '../posts.json'
import { Link } from 'react-router'

function Home() {
   return(
    <div dir="rtl" className="min-h-screen overflow-hidden bg-[#080808] text-white pt-20">
  <section className="relative min-h-[780px] overflow-hidden
     bg-[#090909]
     bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)]
     bg-[size:63px_63px]">
    <div className="pointer-events-none absolute left-1/2 top-32 h-[550px] w-[700px]
       -translate-x-1/2 rounded-full
       bg-[radial-gradient(ellipse,rgba(255,92,0,0.12)_0%,rgba(255,92,0,0.04)_40%,transparent_70%)]
       blur-2xl" />
    <div className="pointer-events-none absolute -left-52 top-0 h-[600px] w-[500px]
       rounded-full
       bg-[radial-gradient(ellipse,rgba(255,94,0,0.07),transparent_68%)]" />
    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="flex justify-center pt-6">
        <div className="inline-flex items-center gap-3 rounded-full
           border border-orange-500/40 bg-orange-950/30
           px-5 py-2 text-sm font-medium text-white">
          <span>مرحباً بك في عدسة</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500/60" />
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="mt-12 text-6xl font-black leading-[1.3] tracking-tight
           md:text-7xl">
          <span className="text-white">اكتشف </span>
          <span className="text-orange-500">فن</span>
          <br />
          <span className="text-white">
            التصوير الفوتوغرافي
          </span>
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-9 text-gray-400 md:text-xl">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في
          <br className="hidden md:block" />
          التصوير
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link to='/Blog' className="group flex h-16 items-center gap-3 rounded-full
             bg-gradient-to-br from-orange-400 to-orange-600
             px-8 text-base font-bold text-white
             shadow-lg shadow-orange-950/30
             transition duration-300 hover:-translate-y-1
             hover:from-orange-300 hover:to-orange-500">
            <span>استكشف المقالات</span>
            <svg className="h-5 w-5 transition-transform duration-300
               group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
          <Link to='/Aboutus' className="flex h-16 items-center gap-3 rounded-full
             border border-white/15 bg-white/[0.01]
             px-8 text-base font-bold text-white
             transition duration-300 hover:border-white/30
             hover:bg-white/[0.04]">
            <span>اعرف المزيد</span>
            <svg className="h-5 w-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx={12} cy={12} r={9} />
              <path strokeLinecap="round" d="M12 11v5" />
              <path strokeLinecap="round" d="M12 8h.01" />
            </svg>
          </Link>
        </div>
        <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-white/[0.07]
             bg-[#151515]/90 px-5 py-5 text-center
             shadow-xl shadow-black/20 transition duration-300
             hover:-translate-y-1 hover:border-orange-500/20">
            <div className="flex justify-center text-orange-500">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.5 4.5 5 5M5 19l3.5-.8L19 7.7a2.12 2.12 0 0 0-3-3L5.5 15.2 5 19Z" />
              </svg>
            </div>
            <div className="mt-2 text-3xl font-black text-orange-500">
              6
            </div>
            <div className="mt-1 text-sm text-gray-500">
              كتاب
            </div>
          </div>
          <div className="rounded-3xl border border-white/[0.07]
             bg-[#151515]/90 px-5 py-5 text-center
             shadow-xl shadow-black/20 transition duration-300
             hover:-translate-y-1 hover:border-orange-500/20">
            <div className="flex justify-center text-orange-500">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h6l2 2h10v10H3V7Z" />
                <path strokeLinecap="round" d="M3 7V5h7l2 2" />
              </svg>
            </div>
            <div className="mt-2 text-3xl font-black text-orange-500">
              4
            </div>
            <div className="mt-1 text-sm text-gray-500">
              تصنيفات
            </div>
          </div>
          <div className="rounded-3xl border border-white/[0.07]
             bg-[#151515]/90 px-5 py-5 text-center
             shadow-xl shadow-black/20 transition duration-300
             hover:-translate-y-1 hover:border-orange-500/20">
            <div className="flex justify-center text-orange-500">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="mt-2 text-2xl font-black text-orange-500">
              110+
            </div>
            <div className="mt-1 text-sm text-gray-500">
              قارئ
            </div>
          </div>
          <div className="rounded-3xl border border-white/[0.07]
             bg-[#151515]/90 px-5 py-5 text-center
             shadow-xl shadow-black/20 transition duration-300
             hover:-translate-y-1 hover:border-orange-500/20">
            <div className="flex justify-center text-orange-500">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x={4} y={4} width={16} height={16} rx={2} />
                <path strokeLinecap="round" d="M8 8h8M8 12h8M8 16h5" />
              </svg>
            </div>
            <div className="mt-2 text-3xl font-black text-orange-500">
              50+
            </div>
            <div className="mt-1 text-sm text-gray-500">
              مقالة
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="relative overflow-hidden bg-[#080808] py-20">
    <div className="pointer-events-none absolute -bottom-40 -right-40
       h-[500px] w-[650px] rounded-full
       bg-[radial-gradient(ellipse,rgba(255,94,0,0.06),transparent_70%)]" />
    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="inline-flex items-center gap-3 rounded-full
         border border-orange-500/30 bg-orange-950/20
         px-5 py-2 text-sm font-semibold text-orange-500">
        <span>مميز</span>
        <span className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500/60" />
        </span>
      </div>
      <div className='flex'>
        <div>
      <h2 className="mt-7 text-5xl font-black tracking-tight text-white
         md:text-6xl">
        مقالات مختارة
      </h2>
      <p className="mt-4 text-lg text-gray-500">
        محتوى منتقى لبدء رحلة تعلمك
      </p>
      </div>
      <div className='items-right'>
     <Link to='/Blog' className="bottom-6 w-fit left-6 z-50 flex items-center gap-3
     rounded-xl bg-orange-600 px-6 py-3
     text-sm font-bold text-white
     shadow-2xl shadow-orange-950/30
     transition duration-300
     hover:-translate-y-1 hover:bg-orange-500">
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
    </svg>
    <span>عرض الكل</span>
      </Link>
      </div>
      </div>

      <div className="mt-12 block">
        {data.posts.slice(0, 3).map((article) => (
        <div 
          key={article.id} 
          className="bg-gray-400 text-white m-5 rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-row justify-between hover:shadow-md transition-shadow"
        >
          
          <div className="h-48 overflow-hidden bg-gray-100">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-6 flex flex-col flex-grow justify-between">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full mb-3">
                {article.category}
              </span>
              <h2 className="text-lg font-bold text-gray-900 leading-snug mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center pt-4 border-t border-gray-100 mt-auto">
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-9 h-9 rounded-full object-cover ml-3"/>
              <div>
                <p className="text-xs font-medium text-gray-900">{article.author.name}</p>
                <p className="text-xs text-gray-500">{article.readTime}</p>
              </div>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  </section>

<section>
  <main className="min-h-screen px-6 md:px-10 lg:px-14 py-8">
    
    <header className="text-center">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />

      
      <div className="inline-flex items-center gap-3
         border border-orange/40
         bg-orangeDark/40
         rounded-full
         px-5 py-2
         text-orange-500
         text-sm font-semibold">
        <span className='text-orange-500'>التصنيفات</span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-orange
             shadow-[0_0_0_3px_rgba(255,106,0,0.12)]" />
          <span className="w-2 h-2 rounded-full bg-orange/50" />
        </span>
      </div>
    
      <h1 className="mt-8
         text-4xl sm:text-5xl lg:text-6xl
         font-extrabold
         tracking-tight">
        استكشف حسب الموضوع
      </h1>
      
      <p className="mt-5
         text-gray-400
         text-base sm:text-lg">
        اعثر على محتوى مصمم حسب اهتماماتك
      </p>
    </header>
   
    <section className="mt-16
       grid grid-cols-1
       sm:grid-cols-2
       lg:grid-cols-4
       gap-6
       items-start">
     
      <div className="group
         h-[188px]
         rounded-2xl
         border border-borderDark
         bg-card
         p-7
         transition-all duration-300
         hover:border-orange/40
         hover:bg-[#191919]">
        <div className="flex justify-start">
          <div className="w-[55px] h-[55px]
             rounded-xl
             border border-orange/30
             bg-orangeDark
             flex items-center justify-center
             text-orange text-2xl
             border-orange-500 bg-orange-950/40">
            <i className="fa-solid fa-sun text-orange-400" />
          </div>
        </div>
        <div className="mt-5 text-right">
          <h2 className="text-lg font-bold">
            إضاءة
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            3 مقالة
          </p>
        </div>
      </div>
      
      <div className="group
         h-[188px]
         rounded-2xl
         border border-borderDark
         bg-card
         p-7
         transition-all duration-300
         hover:border-orange/40
         hover:bg-[#191919]">
        <div className="flex justify-start">
          <div className="w-[55px] h-[55px]
             rounded-xl
             border border-orange/30
             bg-orangeDark
             flex items-center justify-center
             text-orange text-2xl
             border-orange-500 bg-orange-950/40">
            <i className="fa-solid fa-user text-orange-400" />
          </div>
        </div>
        <div className="mt-5 text-right">
          <h2 className="text-lg font-bold">
            بورتريه
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            3 مقالة
          </p>
        </div>
      </div>
      
      <div className="group
         h-[188px]
         rounded-2xl
         border border-borderDark
         bg-card
         p-7
         transition-all duration-300
         hover:border-orange/40
         hover:bg-[#191919]">
        <div className="flex justify-start">
          <div className="w-[55px] h-[55px]
             rounded-xl
             border border-orange/30
             bg-orangeDark
             flex items-center justify-center
             text-orange text-2xl
             border-orange-500 bg-orange-950/40">
            <i className="fa-solid fa-mountain-sun text-orange-400" />
          </div>
        </div>
        <div className="mt-5 text-right">
          <h2 className="text-lg font-bold">
            مناظر طبيعية
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            2 مقالة
          </p>
        </div>
      </div>
      
      <div className="group
         h-[188px]
         rounded-2xl
         border border-borderDark
         bg-card
         p-7
         transition-all duration-300
         hover:border-orange/40
         hover:bg-[#191919]">
        <div className="flex justify-start">
          <div className="w-[55px] h-[55px]
             rounded-xl
             border border-orange/30
             bg-orangeDark
             flex items-center justify-center
             text-orange text-2xl
             border-orange-500 bg-orange-950/40">
            <i className="fa-solid fa-sliders text-orange-400" />
          </div>
        </div>
        <div className="mt-5 text-right">
          <h2 className="text-lg font-bold">
            تقنيات
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            5 مقالة
          </p>
        </div>
      </div>
    
      <div className="group
         h-[188px]
         rounded-2xl
         border border-borderDark
         bg-card
         p-7
         transition-all duration-300
         hover:border-orange/40
         hover:bg-[#191919]
         lg:col-start-1">
        <div className="flex justify-start">
          <div className="w-[55px] h-[55px]
             rounded-xl
             border border-orange/30
             bg-orangeDark
             flex items-center justify-center
             text-orange text-2xl
             border-orange-500 bg-orange-950/40">
            <i className="fa-solid fa-sun text-orange-400" />
          </div>
        </div>
        <div className="mt-5 text-right">
          <h2 className="text-lg font-bold">
            معدات
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            3 مقالة
          </p>
        </div>
      </div>
    </section>
  </main>
</section>

  
      <section>
  <section className="w-full px-6 sm:px-10 lg:px-16 py-5">
    <div className="max-w-[1400px] mx-auto">
      
      <div className="flex justify-start">
        <div className="
      inline-flex items-center gap-3
      rounded-full
      border border-[#71350d]
      bg-[#25170e]
      px-4 py-2
      text-sm font-semibold
      text-[#ff6a00]
    ">
          <span>الأحدث</span>
          <span className="flex items-center gap-2">
            <span className="
          block w-3 h-3 rounded-full
          bg-[#ff6a00]
          shadow-[0_0_0_3px_rgba(255,106,0,0.10)]
        " />
            <span className="block w-2 h-2 rounded-full bg-[#a8420b]" />
          </span>
        </div>
      </div>
      
      <div className="mt-4 text-right">
        <h1 className="
      text-4xl
      sm:text-5xl
      lg:text-[52px]
      leading-tight
      font-extrabold
      tracking-tight
    ">
          أحدث المقالات
        </h1>
        <p className="
      mt-5
      text-base
      sm:text-lg
      text-[#8f8f8f]
      font-normal
    ">
          محتوى جديد طازج من المطبعة
        </p>
      </div>
      
      <div className="
    mt-[-8px]
    flex
    items-center
    justify-end
  ">
        <Link to="/Blog" className="
      inline-flex
      items-center
      gap-2
      text-[#ff6a00]
      text-base
      font-bold
      transition
      hover:text-[#ff8533]
    ">
          <span>عرض جميع المقالات</span>
          <i className="fa-solid fa-arrow-left text-sm" />
        </Link>
      </div>
    </div>
  </section>
</section>



     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6" dir="rtl">
      {data.posts.slice(3, 6).map((article) => (
        <div 
          key={article.id} 
          className="bg-gray-400 rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          
          <div className="h-48 overflow-hidden bg-gray-100">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-6 flex flex-col flex-grow justify-between">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full mb-3">
                {article.category}
              </span>
              <h2 className="text-lg font-bold text-gray-900 leading-snug mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center pt-4 border-t border-gray-100 mt-auto">
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-9 h-9 rounded-full object-cover ml-3"/>
              <div>
                <p className="text-xs font-medium text-gray-900">{article.author.name}</p>
                <p className="text-xs text-gray-500">{article.readTime}</p>
              </div>
            </div>
          </div>
        </div>))}
        </div>

       <section dir="rtl" className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6 py-12">

  <div className="w-full max-w-[936px] min-h-[504px] rounded-[26px]
     border border-[#292929] bg-[#171717]
     flex flex-col items-center justify-center
     px-6 sm:px-10 py-12">
    
    <div className="w-[72px] h-[72px] rounded-[17px]
       bg-[#ff6500] flex items-center justify-center
       text-white text-[28px]">
      <i className="fa-regular fa-envelope" />
    </div>
   
    <h2 className="mt-7 text-center text-3xl sm:text-4xl
       font-extrabold leading-tight">
       اشترك في
      <span> </span>
      <span className="text-[#ff7200]">
        نشرتنا الإخبارية  
      </span>
    </h2>
    
    <p className="mt-4 text-center text-[#969696]
       text-base sm:text-lg leading-8">
      احصل على نصائح التصوير العصرية ودروس جديدة مباشرة في بريدك الإلكتروني
    </p>
  
    <div className="mt-8 w-full max-w-[576px]
       flex flex-col-reverse sm:flex-row gap-3">
      <input type="email" placeholder="أدخل بريدك الإلكتروني" className="flex-1 h-[65px] rounded-[14px]
         border border-[#292929]
         bg-[#0d0d0d]
         px-5 text-right text-white
         placeholder:text-[#676767]
         outline-none
         focus:border-[#ff6a00]" />
      <Link to='/' className="h-[55px] w-full sm:w-[161px]
         rounded-[14px]
         bg-[#ff6500]
         text-white font-bold
         hover:bg-[#ff7518]
         transition
         text-center">
        اشترك الآن
      </Link>
    </div>
   
    <div className="mt-7 flex flex-wrap items-center
       justify-center gap-x-7 gap-y-4
       text-sm text-[#666666]">
      
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2 rtl:space-x-reverse">

         {data.posts.slice(0, 3).map((article) => (
          
              <div>
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-[34px] h-[34px] rounded-full
             object-cover border-2 border-[#171717]"/></div>

         ))}
           
        
        </div>
        <span>
          انضم لـ
          <strong className="text-white mr-1">
            10,000+
          </strong>
          مصور
        </span>
      </div>
      <span className="hidden sm:block text-[#3c3c3c]">•</span>
      <span>بدون إزعاج</span>
      <span className="hidden sm:block text-[#3c3c3c]">•</span>
      <span>إلغاء الاشتراك في أي وقت</span>
    </div>
  </div>
</section>

</div>
)}

export default Home;