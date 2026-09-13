import { useState } from "react";
import { videosContent } from "../content/site";

const FILTERS = videosContent.filters;
const VIDEOS = videosContent.items;

export default function VideosPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredVideos = VIDEOS.filter((video) => {
    const matchesFilter = activeFilter === "All" || video.tag === activeFilter;
    const matchesSearch = !search || video.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_left,_rgba(244,201,73,0.18),_transparent_28%),_#f6f3ee] py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-[#111111]">
            <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <img
                src={videosContent.featured.image}
                alt="Featured video"
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border-4 border-[#111111] bg-[#f4c949] transition-transform duration-200 hover:scale-105">
                  <svg width="22" height="26" viewBox="0 0 18.333 23.333" fill="black">
                    <path d="M0 0L18.333 11.667L0 23.333V0Z" />
                  </svg>
                </div>
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-[#f4c949] px-3 py-1.5 font-mono-ui text-[10px] font-black uppercase tracking-[0.12em] text-[#111111]">
                Featured
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h2 className="font-mont text-2xl font-black leading-tight tracking-[-0.05em] text-white sm:text-3xl">
                  {videosContent.featured.title}
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[30px] border border-black/10 bg-white p-6 sm:p-8">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-[#6c6666]">YouTube channel</p>
            <h2 className="mt-3 font-mont text-3xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-[#111111] sm:text-4xl">
              Latest from the channel
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4c4546] md:text-base">
              Expert breakdowns on AI policy, digital rights, IP risk, and the legal tensions shaping tomorrow’s technology market.
            </p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#111111] px-5 py-3 font-mont text-[10px] font-black uppercase tracking-[0.12em] text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Watch now
              <svg width="12" height="12" viewBox="0 0 13.333 13.333" fill="currentColor" className="text-white">
                <path d="M13.333 6.667L6.667 13.333L5.2 11.867L9.4 7.667H0V5.667H9.4L5.2 1.467L6.667 0L13.333 6.667Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-mont text-3xl font-black uppercase tracking-[-0.06em] text-[#111111]">Video library</h2>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center overflow-hidden rounded-full border border-black/10 bg-white">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search videos..."
                className="w-56 border-0 bg-transparent px-4 py-2.5 text-sm text-[#2e2a2a] outline-none placeholder:text-[#746d6d]"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-3 py-1.5 font-mono-ui text-[9px] font-black uppercase tracking-[0.12em] transition-colors ${
                    activeFilter === filter ? "border-[#111111] bg-[#111111] text-white" : "border-black/10 bg-white text-[#111111] hover:border-black/20"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <article key={video.title} className="group overflow-hidden rounded-[26px] border border-black/10 bg-white transition-transform duration-200 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <img src={video.image} alt={video.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#f4c949]">
                      <svg width="16" height="19" viewBox="0 0 14.667 18.667" fill="black">
                        <path d="M0 0L14.667 9.333L0 18.667V0Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-[#111111]/80 px-2 py-1 font-mono-ui text-[9px] font-black uppercase tracking-[0.12em] text-white">
                    {video.duration}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="font-mono-ui text-[9px] font-black uppercase tracking-[0.12em] text-[#6c6666]">{video.tag}</span>
                  <span className="font-mono-ui text-[9px] uppercase tracking-[0.12em] text-[#6c6666]">{video.date}</span>
                </div>
                <h3 className="font-mont text-xl font-black leading-tight tracking-[-0.05em] text-[#111111]">{video.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full border border-black/10 bg-white px-6 py-3 font-mont text-[10px] font-black uppercase tracking-[0.12em] text-[#111111] transition-colors hover:border-black/20 hover:bg-[#f7f3ee]">
            Load more videos
          </button>
        </div>
      </section>

      <section className="bg-[#111111] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 text-center sm:px-6 lg:flex-row lg:text-left lg:px-10">
          <div className="max-w-2xl">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-[#f4c949]">Never miss an update</p>
            <h2 className="mt-3 font-mont text-3xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-white sm:text-4xl">
              Join the conversation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#d7d0ca] md:text-base">
              Subscribe for weekly explainers, legal breakdowns, and practical analysis on the issues shaping digital governance.
            </p>
          </div>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#f4c949] px-6 py-3.5 font-mont text-[10px] font-black uppercase tracking-[0.12em] text-[#111111] transition-colors hover:bg-[#f0b700]"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="black">
              <path d="M19.582 5.153a2.484 2.484 0 00-1.748-1.748C16.254 3 10 3 10 3s-6.254 0-7.834.405A2.484 2.484 0 00.418 5.153 25.99 25.99 0 000 10a25.99 25.99 0 00.418 4.847 2.484 2.484 0 001.748 1.748C3.746 17 10 17 10 17s6.254 0 7.834-.405a2.484 2.484 0 001.748-1.748A25.989 25.989 0 0020 10a25.989 25.989 0 00-.418-4.847z" />
              <path d="M8 13l5-3-5-3v6z" fill="white" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
