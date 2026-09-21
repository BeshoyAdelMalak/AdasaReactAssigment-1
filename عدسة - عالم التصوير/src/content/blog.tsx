
import data from '../posts.json';
import { useState } from "react";
import { Link } from "react-router";

export default function Blog() {
  const [view, setView] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "جميع المقالات" },
    { value: "إضاءة", label: "إضاءة" },
    { value: "بورتريه", label: "بورتريه" },
    { value: "مناظر طبيعية", label: "مناظر طبيعية" },
    { value: "تقنيات", label: "تقنيات" },
    { value: "معدات", label: "معدات" },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? data.posts
      : data.posts.filter(
          (article) => article.category === selectedCategory
        );

  return (
    <div className="block" dir="rtl">
      <div className="min-h-screen bg-[#080808] text-white pt-30">
        <div className="relative h-[330px] overflow-hidden border-b border-white/[0.10]">
          <div className="grid-bg absolute inset-0 opacity-80" />

          <div className="hero-glow absolute inset-0" />
          <div className="hero-glow-right absolute inset-0" />

          <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col items-center justify-center px-6 pb-4">
            <div className="mb-6 flex h-[44px] items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/[0.07] px-5 text-[15px] font-semibold text-orange-500 shadow-[0_0_25px_rgba(255,100,0,0.06)]">
              <span>مدونتنا</span>

              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M8 13h8" />
                <path d="M8 17h5" />
              </svg>

              <span className="h-2 w-2 rounded-full bg-orange-500" />
            </div>

            <h1 className="text-center text-[48px] font-extrabold leading-none tracking-[-1.5px] sm:text-[54px]">
              <span className="text-white">استكشف </span>
              <span className="text-orange-500">مقالاتنا</span>
            </h1>

            <p className="mt-7 text-center text-[18px] font-normal text-gray-400">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>

        <section className="border-b border-white/[0.10] bg-[#090909]">
          <div className="mx-auto flex min-h-[94px] max-w-[1400px] items-center justify-between gap-8 px-6">
            <div className="relative w-full max-w-[360px]">
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                className="h-[57px] w-full rounded-[14px] border border-white/[0.10] bg-[#171717] px-14 pl-5 text-[15px] text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500/50"
              />

              <svg
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx={11} cy={11} r={7} />
                <path d="m20 20-4-4" />
              </svg>
            </div>

            <nav className="flex items-center gap-2">
              {categories.map((category) => {
                const isActive = selectedCategory === category.value;

                return (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`h-[45px] rounded-[14px] px-6 text-[14px] transition ${
                      isActive
                        ? "bg-orange-500 font-bold text-black hover:bg-orange-400"
                        : "border border-white/[0.09] bg-[#181818] font-medium text-gray-400 hover:border-orange-500/30 hover:text-white"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </section>

        <main className="mx-auto max-w-[1400px] px-6">
          <div className="flex min-h-[126px] items-center justify-between">
            <div className="text-[15px] text-gray-400">
              <p>
                عرض{" "}
                <span className="font-bold text-white">
                  {Math.min(filteredPosts.length, 28)}
                </span>{" "}
                مقالات
              </p>
            </div>

            <div>
              <div className="flex h-[52px] items-center rounded-[13px] border border-white/[0.10] bg-[#151515] p-1">
                <button
                  onClick={() => setView("grid")}
                  className={`flex h-[42px] w-[42px] items-center justify-center rounded-[11px] transition ${
                    view === "grid"
                      ? "bg-orange-500 text-black"
                      : "text-gray-500 hover:text-white"
                  }`}
                  aria-label="عرض شبكي"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x={3} y={3} width={7} height={7} rx={1} />
                    <rect x={14} y={3} width={7} height={7} rx={1} />
                    <rect x={3} y={14} width={7} height={7} rx={1} />
                    <rect x={14} y={14} width={7} height={7} rx={1} />
                  </svg>
                </button>

                <button
                  onClick={() => setView("list")}
                  className={`flex h-[42px] w-[42px] items-center justify-center rounded-[11px] transition ${
                    view === "list"
                      ? "bg-orange-500 text-black"
                      : "text-gray-500 hover:text-white"
                  }`}
                  aria-label="عرض قائمة"
                >
                  <svg
                    width={21}
                    height={21}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <line x1={8} y1={6} x2={21} y2={6} />
                    <line x1={8} y1={12} x2={21} y2={12} />
                    <line x1={8} y1={18} x2={21} y2={18} />
                    <line x1={3} y1={6} x2="3.01" y2={6} />
                    <line x1={3} y1={12} x2="3.01" y2={12} />
                    <line x1={3} y1={18} x2="3.01" y2={18} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <section
        className={`max-w-6xl mx-auto p-6 ${
          view === "grid"
            ? "grid grid-cols-1 md:grid-cols-3 gap-6"
            : "flex flex-col gap-4"
        }`}
      >
        {filteredPosts.slice(0, 28).map((article) => (
          <Link
            key={article.id}
            to={`/blog/${article.slug}`}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
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
                  className="w-9 h-9 rounded-full object-cover ml-3"
                />

                <div>
                  <p className="text-xs font-medium text-gray-900">
                    {article.author.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {article.readTime}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {filteredPosts.length === 0 && (
          <div className="col-span-full py-20 text-center text-gray-400">
            لا توجد مقالات في هذا التصنيف
          </div>
        )}
      </section>
    </div>
  );
}
