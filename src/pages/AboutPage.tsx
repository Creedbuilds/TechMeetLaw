import { ArrowRight, FileText, Quote } from "lucide-react";
import { aboutConceptImage } from "../assets";

export default function AboutPage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_left,_rgba(244,201,73,0.18),_transparent_28%),_#f6f3ee] py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#111111] px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#f4c949]" />
              <span className="font-mono-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                Our Origin
              </span>
            </div>

            <h1 className="font-mont text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-[#111111] sm:text-5xl md:text-6xl">
              Bridging the gap between legacy and velocity.
            </h1>

            <p className="mt-6 text-base leading-relaxed text-[#4c4546] md:text-lg">
              Tech Meets Law was built for the moments when innovation hits legal friction. We turn complex legal language into clear guidance for builders, founders, and decision-makers moving at startup speed.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#111111]">
                Built for founders
              </div>
              <div className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#111111]">
                Made for clarity
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[30px] bg-[#f4c949]" />
            <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white">
              <div className="overflow-hidden">
                <img
                  src={aboutConceptImage}
                  alt="Tech Meets Law Concept"
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/30 via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="rounded-[30px] border border-black/10 bg-white p-6 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-[#f4c949]">
                <Quote width={20} height={20} />
              </div>
              <div>
                <p className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-[#6c6666]">The personal drive</p>
                <h2 className="font-mont text-2xl font-black uppercase tracking-[-0.05em] text-[#111111] md:text-3xl">
                  Why WE exists
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <p className="text-base leading-relaxed text-[#4c4546]">
                I kept seeing the same pattern at the intersection of software and regulation: founders building remarkable products, but stalling when legal frameworks moved too slowly or spoke a different language altogether.
              </p>
              <p className="text-base leading-relaxed text-[#4c4546]">
                We realized that digitizing law alone isn’t enough. Legal information has to be clearer, faster, and easier to apply in real-world product decisions. That gap is what this platform closes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="mb-8 text-center">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.16em] text-[#6c6666]">Operating principles</p>
            <h2 className="mt-3 font-mont text-3xl font-black uppercase tracking-[-0.05em] text-[#111111] md:text-4xl">
              The rules we build by
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <FileText width={18} height={18} />,
                title: "Absolute precision",
                text: "We treat legal concepts like source code—specific, testable, and built for action rather than vague interpretation.",
              },
              {
                icon: <ArrowRight width={18} height={18} />,
                title: "Velocity unlocked",
                text: "Technology does not wait for slow review cycles. Our resources are designed to help people act quickly and confidently.",
              },
              {
                icon: <FileText width={18} height={18} />,
                title: "Unapologetic clarity",
                text: "Complex legal ideas are rewritten until they feel understandable, direct, and useful to builders and teams.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[28px] border border-black/10 bg-white p-6 transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-[#f4c949]">
                  {item.icon}
                </div>
                <h3 className="font-mont text-2xl font-black tracking-[-0.05em] text-[#111111]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4c4546] md:text-[15px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
