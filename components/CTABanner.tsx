import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-brand-green py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-brand-black leading-tight">
            Ready to move faster?
          </h2>
          <p className="font-body text-sm text-black/60 mt-2">
            Book a 30-minute call or send a message — no commitment required.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link
            href="/contact#calendar"
            className="font-body font-semibold text-sm uppercase tracking-widest bg-brand-black text-brand-white px-8 py-4 text-center hover:bg-white/10 transition-all"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/contact"
            className="font-body font-semibold text-sm uppercase tracking-widest border-2 border-brand-black text-brand-black px-8 py-4 text-center hover:bg-brand-black hover:text-brand-white transition-all"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}
