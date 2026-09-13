import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";
import { homeContent } from "../content/site";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_left,_rgba(244,201,73,0.18),_transparent_28%),_#f6f3ee] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#111111] px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#f4c949]" />
                <span className="font-mono-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  Intersection of Code &amp; Law
                </span>
              </div>

              <h1 className="font-mont text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#111111] sm:text-5xl md:text-6xl">
                <span className="block">Decoding the Legal</span>
                <span className="block">Landscape of</span>
                <span className="relative inline-block pt-1">
                  <span className="relative z-10">Technology.</span>
                  <span className="absolute -bottom-1 left-0 z-0 h-4 w-full -skew-x-6 rounded-sm bg-[#f4c949]" />
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4c4546] md:text-lg">
                Navigate the complexities of technology law with expert analysis, comprehensive databases, and cutting-edge legal intelligence designed for the modern era.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <NavLink
                  to="/laws"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f4c949] px-6 py-3.5 font-mont text-[11px] font-black uppercase tracking-[0.12em] text-[#111111] transition-colors duration-200 hover:bg-[#f0b700]"
                >
                  Explore Law Database
                  <ArrowRight width={14} height={14} className="text-[#111111]" />
                </NavLink>
                <NavLink
                  to="/insights"
                  className="inline-flex items-center rounded-full border border-black/10 bg-white px-6 py-3.5 font-mont text-[11px] font-black uppercase tracking-[0.12em] text-[#111111] transition-colors hover:border-black/20 hover:bg-[#f7f3ee]"
                >
                  View Latest Insights
                </NavLink>
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
                {[
                  ["3.4k+", "Readers"],
                  ["120+", "Legal briefs"],
                  ["24/7", "Updates"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-black/5 bg-white/70 p-3 backdrop-blur-sm">
                    <div className="font-mont text-xl font-black tracking-[-0.06em] text-[#111111]">{value}</div>
                    <div className="font-mono-ui text-[9px] uppercase tracking-[0.12em] text-[#6c6666]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[30px] bg-[#111111]" />
              <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white">
                <div className="overflow-hidden">
                  <img src={homeContent.heroImage} alt="Tech Meets Law" className="h-[560px] w-full object-cover grayscale-[0.12] contrast-125" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/35 via-transparent to-[#ffffff]/10" />
              </div>

              <div className="absolute -left-5 top-10 hidden rounded-2xl border border-black/10 bg-white px-4 py-3 sm:block">
                <p className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#6c6666]">Data Compliance</p>
                <p className="font-mont text-2xl font-black tracking-[-0.06em] text-[#111111]">ISO 27001</p>
              </div>

              <div className="absolute -right-6 bottom-12 hidden rounded-2xl border border-black/10 bg-[#f4c949] px-4 py-3 sm:block">
                <p className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#2a261d]">Latest Ruling</p>
                <p className="font-mont text-2xl font-black tracking-[-0.06em] text-[#111111]">AI &amp; IP Law</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="mb-8 flex flex-col gap-3 border-b border-black/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-mont text-2xl font-black uppercase tracking-[-0.05em] text-[#111111] sm:text-3xl">
                Latest Insights
              </h2>
              <p className="mt-2 text-[15px] text-[#4c4546]">Critical analysis on emerging legal tech trends.</p>
            </div>
            <NavLink to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] transition-colors hover:text-[#756b20]">
              View All
              <ArrowRight width={12} height={12} />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <article className="group overflow-hidden rounded-[28px] border border-black/10 bg-white lg:col-span-8 lg:flex">
              <div className="relative h-64 overflow-hidden bg-[#e8e3dc] sm:h-auto sm:w-72 lg:h-auto">
                <img src={homeContent.featured.image} alt={homeContent.featured.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-[#f4c949] px-3 py-1.5">
                  <span className="font-mono-ui text-[10px] font-bold uppercase tracking-[0.12em] text-[#111111]">
                    {homeContent.featured.tag}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center p-6 md:p-7">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.12em] text-[#6c6666]">
                  <span className="font-mono-ui">📅 {homeContent.featured.date}</span>
                  <span className="font-mono-ui">{homeContent.featured.source}</span>
                </div>
                <h3 className="font-mont text-[22px] font-black leading-tight tracking-[-0.05em] text-[#111111] md:text-[26px]">
                  {homeContent.featured.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4c4546] md:text-[15px]">
                  {homeContent.featured.excerpt}
                </p>
              </div>
            </article>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              {homeContent.secondary.map((a) => (
                <a key={a.title} href="#" className="group overflow-hidden rounded-[22px] border border-black/10 bg-white transition-transform duration-200 hover:-translate-y-1">
                  <div className="relative h-40 overflow-hidden bg-[#e8e3dc]">
                    <img src={a.image} alt={a.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/10 to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="mb-2 font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#6c6666]">{a.date}</p>
                    <h4 className="font-mont text-base font-bold leading-snug tracking-[-0.03em] text-[#111111]">{a.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="group relative mt-6 h-64 overflow-hidden rounded-[30px] border border-black/10 bg-[#111111] sm:h-72">
            <img src={homeContent.opinion.image} alt={homeContent.opinion.title} className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/65 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono-ui text-[10px] font-bold uppercase tracking-[0.12em] text-[#f4c949]">
                {homeContent.opinion.tag}
              </span>
              <h3 className="mt-4 max-w-2xl font-mont text-2xl font-black leading-tight tracking-[-0.06em] text-white sm:text-4xl">
                {homeContent.opinion.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#dfd9d4] sm:text-base">
                {homeContent.opinion.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 font-mont text-[11px] font-black uppercase tracking-[0.12em] text-[#f4c949]">
                Read Article
                <ArrowRight width={10} height={10} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
