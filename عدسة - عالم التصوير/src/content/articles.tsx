
import data from '../posts.json';
import { Link, useParams } from "react-router";

export default function Article() {
  const { slug } = useParams();

  const article = data.posts.find(
    (post) => post.slug === slug
  );

  if (!article) {
    return (
      <div
        dir="rtl"
        className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center px-6"
      >
        <h1 className="text-3xl font-bold mb-4">
          المقال غير موجود
        </h1>

        <Link
          to="/blog"
          className="rounded-[14px] bg-orange-500 px-6 py-3 font-bold text-black transition hover:bg-orange-400"
        >
          العودة إلى المقالات
        </Link>
      </div>
    );
  }

  return (
    <article
      dir="rtl"
      className="min-h-screen bg-[#080808] text-white"
    >
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mb-8 text-orange-500 hover:text-orange-400 transition"
        >
          <span>→</span>
          العودة إلى المقالات
        </Link>

        <div className="overflow-hidden rounded-2xl mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full max-h-[500px] object-cover"
          />
        </div>

        <div className="mb-6">
          <span className="inline-block text-sm font-semibold text-orange-500 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-5">
            {article.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="flex items-center gap-4 py-6 border-y border-white/[0.10] mb-10">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <p className="font-bold text-white">
              {article.author.name}
            </p>

            <p className="text-sm text-gray-500">
              {article.author.role}
            </p>
          </div>

          <div className="mr-auto text-left">
            <p className="text-sm text-gray-400">
              {article.date}
            </p>

            <p className="text-sm text-gray-500">
              {article.readTime}
            </p>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-white mt-10 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }

            return (
              <p
                key={index}
                className="text-gray-300 leading-9 mb-6 whitespace-pre-line"
              >
                {paragraph}
              </p>
            );
          })}
        </div>

        {article.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/[0.10]">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#181818] border border-white/[0.10] px-4 py-2 text-sm text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
