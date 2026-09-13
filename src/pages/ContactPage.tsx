import { useState } from "react";
import { ChevronDown, FileText, Mail, Send, Video } from "lucide-react";

const SUBJECTS = [
  "Legal Analysis / Topic Suggestion",
  "Guest Contribution",
  "Research Partnership",
  "General Inquiry",
  "Collaboration & Ideas",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: SUBJECTS[0], message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="pb-18">
      <section className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_left,_rgba(244,201,73,0.18),_transparent_28%),_#f6f3ee] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#111111] px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#f4c949]" />
            <span className="font-mono-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Contact us
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="font-mont text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-[#111111] sm:text-5xl md:text-6xl">
                Let&apos;s discuss the future.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4c4546] md:text-lg">
                We work with founders, researchers, and teams exploring the legal shape of technology. Reach out for partnerships, commentary, and strategic legal conversations.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-white p-6">
              <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111111] text-[#f4c949]">
                  <FileText width={18} height={18} />
                </div>
                <div>
                  <p className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#6c6666]">Operating notice</p>
                  <h2 className="font-mont text-xl font-black tracking-[-0.05em] text-[#111111]">Direct channels</h2>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#4c4546]">
                Tech Meets Law does not maintain a physical law office or offer individual legal representation. For inquiries, use the form or direct email.
              </p>

              <div className="mt-5 rounded-2xl bg-[#f4c949] px-4 py-3 text-sm font-semibold text-[#111111]">
                Average response time: under 24 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[30px] border border-black/10 bg-white p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-black/5 pb-4">
              <div>
                <p className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#6c6666]">Secure inquiry</p>
                <h2 className="font-mont text-2xl font-black tracking-[-0.05em] text-[#111111]">Direct transmission form</h2>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-[#f4c949]">
                <Send width={16} height={16} />
              </div>
            </div>

            {sent ? (
              <div className="rounded-[24px] border border-black/10 bg-[#f4c949] p-8 text-center">
                <p className="font-mont text-2xl font-black uppercase tracking-[-0.05em] text-[#111111]">Message sent</p>
                <p className="mt-2 text-sm text-[#111111]/80">We&apos;ll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#111111]">Full name *</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
                      placeholder="e.g. Elena Rostova"
                      className="w-full rounded-2xl border border-black/10 bg-[#f7f3ee] px-4 py-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#f4c949]"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#111111]">Email address *</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
                      placeholder="name@domain.com"
                      className="w-full rounded-2xl border border-black/10 bg-[#f7f3ee] px-4 py-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#f4c949]"
                    />
                  </label>
                </div>

                <label className="block space-y-2">
                  <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#111111]">Inquiry subject *</span>
                  <div className="relative">
                    <select
                      value={form.subject}
                      onChange={(e) => setForm((current) => ({ ...current, subject: e.target.value }))}
                      className="w-full appearance-none rounded-2xl border border-black/10 bg-[#f7f3ee] px-4 py-3 pr-10 text-sm text-[#111111] outline-none transition-colors focus:border-[#f4c949]"
                    >
                      {SUBJECTS.map((subject) => (
                        <option key={subject}>{subject}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#4c4546]" width={18} height={18} />
                  </div>
                </label>

                <label className="block space-y-2">
                  <span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-[#111111]">Message payload *</span>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))}
                    placeholder="Tell us about your idea, query, or research request..."
                    className="w-full resize-y rounded-2xl border border-black/10 bg-[#f7f3ee] px-4 py-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#f4c949]"
                  />
                </label>

                <div className="rounded-2xl border border-black/10 bg-[#f7f3ee] px-4 py-3 text-sm text-[#4c4546]">
                  Encrypted channel. We do not sell or share conversation records.
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f4c949] px-6 py-3.5 font-mont text-[10px] font-black uppercase tracking-[0.14em] text-[#111111] transition-colors hover:bg-[#f0b700]"
                >
                  Send message
                  <Send width={14} height={14} />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-black/10 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111111] text-[#f4c949]">
                  <Mail width={18} height={18} />
                </div>
                <h3 className="font-mont text-xl font-black tracking-[-0.05em] text-[#111111]">Direct mail routing</h3>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { label: "General queries", email: "contact@techmeetslaw.org" },
                  { label: "Collaborations & ideas", email: "hello@techmeetslaw.org" },
                ].map((item) => (
                  <div key={item.email} className="rounded-2xl border border-black/10 bg-[#f7f3ee] p-3">
                    <p className="font-mono-ui text-[9px] uppercase tracking-[0.12em] text-[#6c6666]">{item.label}</p>
                    <p className="mt-2 font-mono-ui text-[12px] text-[#111111]">{item.email}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#111111] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f4c949] text-[#111111]">
                  <Video width={18} height={18} />
                </div>
                <h3 className="font-mont text-xl font-black tracking-[-0.05em] text-white">Video dispatches</h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#d7d0ca]">
                Weekly explainers and legal commentary for people trying to keep up with the fast-moving technology landscape.
              </p>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f4c949] px-5 py-3 font-mont text-[10px] font-black uppercase tracking-[0.12em] text-[#111111]"
              >
                Watch on YouTube
                <svg width="12" height="12" viewBox="0 0 13.333 13.333" fill="currentColor" className="text-[#111111]">
                  <path d="M13.333 6.667L6.667 13.333L5.2 11.867L9.4 7.667H0V5.667H9.4L5.2 1.467L6.667 0L13.333 6.667Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
