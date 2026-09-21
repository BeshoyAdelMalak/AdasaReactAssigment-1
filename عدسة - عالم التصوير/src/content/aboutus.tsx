import { Link } from 'react-router'
import data from '../posts.json'

function Aboutus() {
   return(
     
   
<div lang="ar" dir="rtl">
  <div className="min-h-screen bg-[#090909] text-white font-sans pt-20">
    
    <section className="relative overflow-hidden border-b border-white/5 bg-[#0b0b0b]">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)', backgroundSize: '45px 45px'}}>
      </div>
      <div className="relative mx-auto max-w-5xl px-5 py-10 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-1 text-[10px] text-orange-400">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
        من نحن
        </div>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          مهمتنا هي 
          <span></span>
          <span className="text-orange-500">الإعلام والإلهام</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-[11px] leading-6 text-zinc-500">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.        
        </p>
        
        <div className="mx-auto mt-7 grid max-w-2xl grid-cols-4 gap-2">
          <div className="rounded-lg border border-white/5 bg-[#111111] px-3 py-3">
            <div className="text-lg font-black text-orange-500">15</div>
            <div className="mt-1 text-[9px] text-zinc-500">برنامجاً</div>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#111111] px-3 py-3">
            <div className="text-lg font-black text-orange-500">50+</div>
            <div className="mt-1 text-[9px] text-zinc-500">محتوى</div>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#111111] px-3 py-3">
            <div className="text-lg font-black text-orange-500">500+</div>
            <div className="mt-1 text-[9px] text-zinc-500">حلقة ومشاركة</div>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#111111] px-3 py-3">
            <div className="text-lg font-black text-orange-500">25+</div>
            <div className="mt-1 text-[9px] text-zinc-500">إعلامياً</div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="mx-auto max-w-4xl px-5 py-9">
      <div className="mb-7 text-center">
        <h2 className="text-xl font-black">
          <span className="text-orange-500">|</span>
          قيمتنا
        </h2>
        <p className="mt-2 text-[10px] text-zinc-600">
          المبادئ التي نعمل من خلالها كل يوم
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-white/5 bg-[#111111] p-5 text-center transition hover:border-orange-500/30">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
            ↗
          </div>
          <h3 className="text-xs font-bold">التطوير</h3>
          <p className="mt-2 text-[9px] leading-5 text-zinc-600">
            نسعى دائماً إلى التطور والنمو
          </p>
        </div>
        <div className="rounded-xl border border-white/5 bg-[#111111] p-5 text-center transition hover:border-orange-500/30">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
            ◈
          </div>
          <h3 className="text-xs font-bold">الإبداع</h3>
          <p className="mt-2 text-[9px] leading-5 text-zinc-600">
            أفكار جديدة ومحتوى مختلف
          </p>
        </div>
        <div className="rounded-xl border border-white/5 bg-[#111111] p-5 text-center transition hover:border-orange-500/30">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
            ⚡
          </div>
          <h3 className="text-xs font-bold">التأثير</h3>
          <p className="mt-2 text-[9px] leading-5 text-zinc-600">
            صناعة محتوى يصنع فرقاً
          </p>
        </div>
        <div className="rounded-xl border border-white/5 bg-[#111111] p-5 text-center transition hover:border-orange-500/30">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
            ◎
          </div>
          <h3 className="text-xs font-bold">الجودة</h3>
          <p className="mt-2 text-[9px] leading-5 text-zinc-600">
            نحرص على أعلى معايير الجودة
          </p>
        </div>
      </div>
    </section>
   
    <section className="mx-auto max-w-4xl px-5 pb-14">
      <div className="mb-7 text-center">
        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-[9px] text-orange-500">
          فريق العمل
        </span>
        <h2 className="mt-3 text-xl font-black">
          تعرف على <span className="text-orange-500">كتيبتنا</span>
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-[10px] leading-5 text-zinc-600">
          مجموعة من الإعلاميين والمبدعين الذين يعملون معاً لصناعة
          محتوى مميز ومؤثر.
        </p>
      </div>
     
      <div className="gap-2 sm:gap-3 justify-items-center flex flex-col">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.posts.map((post) => (
        <div 
          key={post.id} 
          className="group items-center rounded-xl border border-white/5 bg-[#111111] p-6 text-center transition hover:-translate-y-1 hover:border-orange-500/30"
        >
          <div className="relative mx-auto mb-2 h-14 w-14">
            <img 
              src={post.author.avatar} 
              className="h-14 w-14 rounded-full object-cover grayscale-[15%]" 
              alt={post.author.name} 
            />
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#111] bg-orange-500" />
          </div>
          
          
          <h3 className="text-[10px] font-bold text-white">{post.author.name}</h3>
          
          
          <p className="mt-1 text-[8px] text-zinc-600">{post.author.role}</p>
          
          <div className="mt-2 flex justify-center gap-1">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-black text-[7px] text-zinc-500">f</span>
            <span className="flex h-5 w-5 items-center justify-center rounded bg-black text-[7px] text-zinc-500">𝕏</span>
            <span className="flex h-5 w-5 items-center justify-center rounded bg-black text-[7px] text-zinc-500">◎</span>
          </div>
        </div>
      ))}
    </div>
        
        
      </div>
    </section>
    
    <section className="relative overflow-hidden bg-gradient-to-l from-orange-500 via-orange-500 to-[#ff6a00] px-5 py-9 text-center">
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="relative">
        <h2 className="text-lg font-black">
        لديك أسئلة؟ دعنا نتحدث!
        </h2>
        <p className="mx-auto mt-2 max-w-md text-[9px] leading-5 text-orange-100/80">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>
        <div className="mt-5 flex justify-center gap-2">
          <Link to='mailto:hello@adasah.com' className="rounded-md bg-black px-5 py-2 text-[9px] font-bold text-white shadow-lg transition hover:bg-zinc-900">
            تواصل معنا
          </Link>
          <Link to='/Blog' className="rounded-md border border-white/30 bg-white/10 px-5 py-2 text-[9px] font-bold text-white backdrop-blur transition hover:bg-white/20">
          تصفح المقالات
          </Link>
        </div>
      </div>
    </section>
  </div>
</div>
   );
}
export default Aboutus;