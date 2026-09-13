import { NavLink } from "react-router";
import { useState } from "react";
import { Menu, Scale, Search } from "lucide-react";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Insights", to: "/insights" },
  { label: "Laws", to: "/laws" },
  { label: "Videos", to: "/videos" },
   { label: "About", to: "/about" },
  { label: "Contact us", to: "/contact" },
];

export default function Nav() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-10">
        <NavLink to="/" className="flex shrink-0 items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-[#f4c949]">
            <Scale width={18} height={18} strokeWidth={2.2} />
          </div>
          <span className="font-mont hidden text-[12px] font-black uppercase tracking-[0.15em] text-[#111111] sm:block">
            Tech Meets Law
          </span>
          <span className="font-mont text-[12px] font-black uppercase tracking-[0.15em] text-[#111111] sm:hidden">
            TML
          </span>
        </NavLink>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <nav className="flex items-center gap-7 text-sm">
            {LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative font-medium text-[#3d3a3a] transition-colors duration-200 hover:text-[#111111] ${isActive ? "text-[#111111]" : ""}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="inline-flex items-center pb-1">{label}</span>
                    {isActive && <span className="absolute -bottom-4 left-0 h-0.5 w-full rounded-full bg-[#f4c949]" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-black/10 bg-[#f7f3ed] px-3 py-2 md:flex">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-28 border-0 bg-transparent text-sm text-[#2e2a2a] outline-none placeholder:text-[#746d6d]"
          />
          <Search width={14} height={14} className="text-[#4b4545]" />
        </div>

        <NavLink
          to="/contact"
          className="hidden items-center justify-center rounded-full bg-[#f4c949] px-4 py-2.5 font-mont text-[10px] font-black uppercase tracking-[0.12em] text-[#111111] transition-colors duration-200 hover:bg-[#f0b700] md:inline-flex"
        >
          Get Started
        </NavLink>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white lg:ml-0 lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu width={18} height={18} className="text-[#111111]" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-4 pb-4 lg:hidden">
          <div className="my-3 flex items-center gap-2 rounded-full border border-black/10 bg-[#f7f3ed] px-3 py-2.5">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="flex-1 border-0 bg-transparent text-sm text-[#2e2a2a] outline-none placeholder:text-[#746d6d]"
            />
            <Search width={14} height={14} className="text-[#4b4545]" />
          </div>
          <nav className="flex flex-col">
            {LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-black/5 py-3 text-sm text-[#3d3a3a] transition-colors ${isActive ? "font-semibold text-[#111111]" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center rounded-full bg-[#f4c949] px-4 py-3 font-mont text-[10px] font-black uppercase tracking-[0.12em] text-[#111111]"
            >
              Get Started
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
