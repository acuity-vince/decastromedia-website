const credentials = [
  "15+ years as CMO across FCA-regulated fintech and Forex brokers",
  "Head of Marketing at Acuity Trading (FRN: 787261)",
  "B2B marketing strategist, speaker, and AI automation practitioner — Cyprus",
];

export default function About() {
  return (
    <section id="about" className="bg-brand-black border-t border-white/10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-brand-teal mb-4">
              About
            </p>
            <h2 className="font-display text-4xl sm:text-5xl uppercase text-brand-white mb-6">
              Vince De Castro
            </h2>
            <p className="font-body text-base text-white/60 leading-relaxed mb-4">
              I&apos;ve spent 15 years building and running marketing functions at
              regulated brokers and fintech firms across Europe. I know what
              works in B2B — and I know how much time teams waste on things AI
              can handle in minutes.
            </p>
            <p className="font-body text-base text-white/60 leading-relaxed">
              De Castro Media exists to close that gap: practical AI systems,
              real training, and websites that actually convert — delivered
              without the agency bloat.
            </p>
          </div>

          {/* Right: credentials */}
          <div className="flex flex-col gap-6 lg:pt-14">
            {credentials.map((item) => (
              <div key={item} className="flex gap-4 items-start">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" />
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
