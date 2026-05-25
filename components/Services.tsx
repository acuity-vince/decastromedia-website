import { Search, Users, Globe } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    tag: "AI Audit",
    headline: "Find out exactly where AI can save your team time and money.",
    body: "A structured review of your current marketing workflows. You get a prioritised action plan — not a deck full of generic recommendations.",
    cta: "Request an Audit",
  },
  {
    icon: Users,
    tag: "1-Day Claude Training",
    headline: "Your team, trained and building with Claude in one day.",
    body: "Hands-on, role-specific training for marketing and ops teams. Everyone leaves knowing how to use Claude in their actual workflow — not in theory.",
    cta: "Book a Training",
  },
  {
    icon: Globe,
    tag: "SMB Website",
    headline: "A clean, fast, conversion-ready website. Delivered in days.",
    body: "For B2B businesses that need a professional online presence without the 3-month agency timeline. Copy, design, and build — all in one package.",
    cta: "Get a Website",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-black py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="font-body text-xs uppercase tracking-widest text-brand-teal mb-4">
          What We Do
        </p>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-brand-white mb-16 max-w-lg">
          Three ways we help B2B teams move faster.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {services.map(({ icon: Icon, tag, headline, body, cta }) => (
            <div
              key={tag}
              className="bg-brand-black p-8 flex flex-col gap-6 group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 group-hover:border-brand-teal transition-colors">
                <Icon size={18} strokeWidth={1.5} className="text-brand-teal" />
              </div>

              <div>
                <p className="font-body text-xs uppercase tracking-widest text-white/40 mb-3">
                  {tag}
                </p>
                <h3 className="font-display text-2xl uppercase text-brand-white leading-tight mb-3">
                  {headline}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  {body}
                </p>
              </div>

              {/* Teal underline accent */}
              <div className="h-px w-12 bg-brand-teal" />

              <Link
                href="/contact"
                className="font-body text-xs uppercase tracking-widest text-brand-green hover:underline transition-all mt-auto"
              >
                {cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
