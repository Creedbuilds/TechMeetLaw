import { NavLink } from "react-router";
import { insightsContent } from "../content/site";

const FEATURED = insightsContent.featured;
const GRID_ARTICLES = insightsContent.articles;
const WIDE_ARTICLE = insightsContent.wide;
const CATEGORIES = insightsContent.categories;

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="mb-8 flex flex-col gap-3 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.16em] text-[#6c6666]">Latest analysis</p>
          <h1 className="mt-2 font-mont text-3xl font-black uppercase tracking-[-0.06em] text-[#111111] sm:text-4xl">
            Insights
          </h1>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-[#4c4546]">
          Expert commentary at the intersection of technology, policy, and legal risk.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="min-w-0 flex-1">
          <article className="group mb-6 overflow-hidden rounded-[30px] border border-black/10 bg-white">
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-52 overflow-hidden sm:h-auto sm:w-64">
                <img
                  src={FEATURED.image}
                  alt={FEATURED.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#f4c949] px-2.5 py-1 font-mono-ui text-[9px] font-black uppercase tracking-[0.12em] text-[#111111]">
                  {FEATURED.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#6c6666]">
                  {FEATURED.date} • {FEATURED.source}
                </p>
                <h2 className="mt-3 font-mont text-2xl font-black leading-tight tracking-[-0.05em] text-[#111111] md:text-[28px]">
                  {FEATURED.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4c4546] md:text-[15px]">{FEATURED.excerpt}</p>
              </div>
            </div>
          </article>

          <div className="mb-6 grid gap-5 sm:grid-cols-2">
            {GRID_ARTICLES.map((article) => (
              <article key={article.title} className="group overflow-hidden rounded-[26px] border border-black/10 bg-white transition-transform duration-200 hover:-translate-y-1">
                <div className="relative h-40 overflow-hidden">
                  <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#6c6666]">{article.date}</p>
                  <h3 className="mt-2 font-mont text-lg font-black leading-snug tracking-[-0.04em] text-[#111111]">{article.title}</h3>
                  <div className="mt-3 border-t border-black/5 pt-3">
                    <span className="font-mono-ui text-[9px] uppercase tracking-[0.12em] text-[#6c6666]">{article.tag}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <article className="group relative h-64 overflow-hidden rounded-[30px] border border-black/10 bg-[#111111] sm:h-72">
            <img src={WIDE_ARTICLE.image} alt={WIDE_ARTICLE.title} className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 font-mono-ui text-[10px] font-black uppercase tracking-[0.12em] text-[#f4c949]">
                {WIDE_ARTICLE.tag}
              </span>
              <h3 className="mt-4 max-w-2xl font-mont text-2xl font-black leading-tight tracking-[-0.06em] text-white sm:text-4xl">
                {WIDE_ARTICLE.title}
              </h3>
              <p className="mt-2 text-sm text-[#e7e0da]">{WIDE_ARTICLE.categories.join(" • ")}</p>
            </div>
          </article>
        </div>

        <aside className="flex w-full flex-col gap-5 lg:w-72 lg:shrink-0">
          <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white">
            <div className="border-b border-black/5 px-4 py-3">
              <h4 className="font-mont text-[11px] font-black uppercase tracking-[0.12em] text-[#111111]">Latest video</h4>
            </div>
            <div className="p-4">
              <div className="relative overflow-hidden rounded-2xl bg-[#111111]">
                <img src={insightsContent.videoImage} alt="Latest video thumbnail" className="h-32 w-full object-cover opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4c949]">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="black">
                      <path d="M0 0L12 7L0 14V0Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white">
            <div className="border-b border-black/5 px-4 py-3">
              <h4 className="font-mont text-[11px] font-black uppercase tracking-[0.12em] text-[#111111]">Categories</h4>
            </div>
            <div className="divide-y divide-black/5">
              {CATEGORIES.map((category) => (
                <NavLink
                  key={category}
                  to="/laws"
                  className="block px-4 py-3 font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#4c4546] transition-colors hover:bg-[#f7f3ee] hover:text-[#111111]"
                >
                  {category}
                </NavLink>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
