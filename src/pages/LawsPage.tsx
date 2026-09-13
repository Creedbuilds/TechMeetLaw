import { useState } from "react";

const LAWS = [
  {
    id: 1,
    tag: "Data Protection",
    tagStyle: "bg-[#f4c949] text-[#111111]",
    year: 2023,
    jurisdiction: "Nigeria",
    title: "Nigeria Data Protection Act, 2023",
    description:
      "Comprehensive legislation establishing the legal framework for the protection of personal information and the regulation of processing of personal information in Nigeria.",
    primaryAction: "READ LAW",
    hasPdf: true,
  },
  {
    id: 2,
    tag: "Cybersecurity",
    tagStyle: "bg-[#111111] text-white",
    year: 2015,
    jurisdiction: "Nigeria",
    title: "Cybercrimes (Prohibition, Prevention, etc) Act, 2015",
    description:
      "Provides an effective, unified and comprehensive legal, regulatory and institutional framework for the prohibition, prevention, detection, prosecution and punishment of...",
    primaryAction: "READ LAW",
    hasPdf: true,
  },
  {
    id: 3,
    tag: "Draft / Pending",
    tagStyle: "border border-black/10 bg-white text-[#111111]",
    year: 2024,
    jurisdiction: "Nigeria",
    title: "National Artificial Intelligence Policy (Draft)",
    description:
      "Proposed framework guiding the ethical development, deployment, and adoption of Artificial Intelligence technologies across various sectors in Nigeria.",
    primaryAction: "REVIEW DRAFT",
    hasPdf: true,
  },
];

const JURISDICTIONS = ["Nigeria", "Global / International", "Other Regions"];
const CATEGORY_FILTERS = ["Data Protection", "Cybersecurity", "Artificial Intelligence", "Intellectual Property", "E-Commerce"];

export default function LawsPage() {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("Nigeria");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Data Protection", "Artificial Intelligence"]);
  const [sortBy, setSortBy] = useState("Most Recent");
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeFilters = [selectedJurisdiction, ...selectedCategories].filter(Boolean);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const removeFilter = (filter: string) => {
    if (filter === selectedJurisdiction) setSelectedJurisdiction("");
    else setSelectedCategories((prev) => prev.filter((c) => c !== filter));
  };

  const FilterPanel = () => (
    <div className="space-y-7">
      <div>
        <h4 className="mb-3 font-mont text-sm font-black uppercase tracking-[0.12em] text-[#111111]">
          Jurisdiction
        </h4>
        {JURISDICTIONS.map((j) => (
          <label key={j} className="group mb-2.5 flex cursor-pointer items-center gap-2.5" onClick={() => setSelectedJurisdiction(j)}>
            <div
              className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors ${
                selectedJurisdiction === j ? "border-[#f4c949]" : "border-[#7b7373]"
              }`}
            >
              {selectedJurisdiction === j && <div className="h-2 w-2 rounded-full bg-[#f4c949]" />}
            </div>
            <span
              className={`text-sm transition-colors ${
                selectedJurisdiction === j ? "font-medium text-[#111111]" : "text-[#4c4546]"
              }`}
            >
              {j}
            </span>
          </label>
        ))}
      </div>

      <div>
        <h4 className="mb-3 font-mont text-sm font-black uppercase tracking-[0.12em] text-[#111111]">
          Categories
        </h4>
        {CATEGORY_FILTERS.map((cat) => {
          const checked = selectedCategories.includes(cat);
          return (
            <label key={cat} className="group mb-2.5 flex cursor-pointer items-center gap-2.5" onClick={() => toggleCategory(cat)}>
              <div
                className={`flex h-4 w-4 items-center justify-center border-2 transition-colors ${
                  checked ? "border-[#f4c949] bg-[#f4c949]" : "border-[#7b7373] bg-white"
                }`}
              >
                {checked && (
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3L3.5 5.5L8 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <span className={`text-sm transition-colors ${checked ? "font-medium text-[#111111]" : "text-[#4c4546]"}`}>
                {cat}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="pb-16">
      <div className="border-b border-black/5 bg-[radial-gradient(circle_at_top_left,_rgba(244,201,73,0.18),_transparent_28%),_#f6f3ee] py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-[#6c6666]">Legal repository</p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="font-mont text-3xl font-black uppercase tracking-[-0.06em] text-[#111111] md:text-4xl">
              Laws & regulations
            </h1>
            <div className="flex items-center overflow-hidden rounded-full border border-black/10 bg-white sm:w-[380px]">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search laws by name, topic..."
                className="w-full border-0 bg-transparent px-4 py-3 text-sm text-[#2e2a2a] outline-none placeholder:text-[#746d6d]"
              />
              <button className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#111111] text-white transition-colors hover:bg-[#2a2a2a]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-10">
        {activeFilters.length > 0 && (
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#6c6666]">Active filters</span>
            {activeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => removeFilter(filter)}
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono-ui text-[9px] font-black uppercase tracking-[0.12em] ${
                  filter === selectedJurisdiction ? "bg-[#f4c949] text-[#111111]" : "bg-[#111111] text-white"
                }`}
              >
                {filter}
                <span className="opacity-70">×</span>
              </button>
            ))}
            <button
              onClick={() => {
                setSelectedJurisdiction("");
                setSelectedCategories([]);
              }}
              className="ml-auto text-sm text-[#4c4546] underline decoration-[#d7d0ca] underline-offset-4 transition-colors hover:text-[#111111]"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="mb-4 flex items-center justify-between md:hidden">
          <button
            onClick={() => setFiltersOpen((open) => !open)}
            className="rounded-full border border-black/10 bg-white px-4 py-2 font-mont text-[11px] font-black uppercase tracking-[0.12em] text-[#111111]"
          >
            Filters {activeFilters.length > 0 ? `(${activeFilters.length})` : ""}
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-full border border-black/10 bg-white px-3 py-2 font-mont text-[11px] font-black uppercase tracking-[0.12em] text-[#111111] outline-none"
          >
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>A – Z</option>
          </select>
        </div>

        {filtersOpen && (
          <div className="mb-5 rounded-[24px] border border-black/10 bg-white p-5 md:hidden">
            <FilterPanel />
          </div>
        )}

        <div className="flex gap-8">
          <aside className="hidden w-56 shrink-0 rounded-[24px] border border-black/10 bg-white p-5 md:block">
            <FilterPanel />
          </aside>

          <div className="min-w-0 flex-1 space-y-4">
            {LAWS.map((law) => (
              <article
                key={law.id}
                className="flex flex-col gap-5 rounded-[28px] border border-black/10 bg-white p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono-ui text-[9px] font-black uppercase tracking-[0.12em] ${law.tagStyle}`}
                    >
                      {law.tag}
                    </span>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#6c6666]">{law.year}</span>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#6c6666]">{law.jurisdiction}</span>
                  </div>

                  <h2 className="font-mont text-xl font-black leading-tight tracking-[-0.05em] text-[#111111] md:text-[22px]">
                    {law.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4c4546] md:text-[15px]">
                    {law.description}
                  </p>
                </div>

                <div className="flex w-full flex-col gap-2 sm:w-40">
                  <button className="rounded-full bg-[#f4c949] px-4 py-2.5 font-mont text-[10px] font-black uppercase tracking-[0.14em] text-[#111111] transition-colors hover:bg-[#f0b700]">
                    {law.primaryAction}
                  </button>
                  {law.hasPdf && (
                    <button className="rounded-full border border-black/10 bg-[#f7f3ee] px-4 py-2.5 font-mont text-[10px] font-black uppercase tracking-[0.14em] text-[#111111] transition-colors hover:border-black/20">
                      PDF
                    </button>
                  )}
                </div>
              </article>
            ))}

            <div className="flex items-center justify-center gap-1 pt-6">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                className="flex h-9 w-9 items-center justify-center border border-gray-300 transition-colors hover:border-gray-900 hover:bg-gray-50"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`flex h-9 w-9 items-center justify-center border transition-colors ${
                    page === p ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 text-gray-700 hover:border-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {p}
                </button>
              ))}
              <span className="px-1 text-sm text-gray-400">...</span>
              <button
                onClick={() => setPage(Math.min(10, page + 1))}
                className="flex h-9 w-9 items-center justify-center border border-gray-300 transition-colors hover:border-gray-900 hover:bg-gray-50"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
