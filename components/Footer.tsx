export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display text-base uppercase tracking-widest text-brand-white">
            De Castro Media
          </p>
          <p className="font-body text-xs text-white/30 mt-1">
            AI marketing systems for B2B teams
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-1">
          <a
            href="mailto:vince.decastro@acuitytrading.com"
            className="font-body text-xs text-white/40 hover:text-brand-white transition-colors"
          >
            vince.decastro@acuitytrading.com
          </a>
          <a
            href="https://www.linkedin.com/company/decastromedia"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/40 hover:text-brand-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-white/10">
        <p className="font-body text-xs text-white/20">
          © {new Date().getFullYear()} De Castro Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
