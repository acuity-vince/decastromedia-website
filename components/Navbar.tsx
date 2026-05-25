"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="De Castro Media"
            width={160}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#services"
            className="font-body text-sm text-white/70 hover:text-brand-white transition-colors uppercase tracking-widest"
          >
            Services
          </a>
          <a
            href="/#about"
            className="font-body text-sm text-white/70 hover:text-brand-white transition-colors uppercase tracking-widest"
          >
            About
          </a>
          <Link
            href="/contact"
            className="font-body text-sm text-white/70 hover:text-brand-white transition-colors uppercase tracking-widest"
          >
            Contact
          </Link>
          <Link
            href="/contact#calendar"
            className="font-body text-sm font-semibold uppercase tracking-widest bg-brand-green text-brand-black px-5 py-2 hover:brightness-90 transition-all"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brand-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-black border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          <a
            href="/#services"
            onClick={() => setOpen(false)}
            className="font-body text-sm text-white/70 uppercase tracking-widest"
          >
            Services
          </a>
          <a
            href="/#about"
            onClick={() => setOpen(false)}
            className="font-body text-sm text-white/70 uppercase tracking-widest"
          >
            About
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-body text-sm text-white/70 uppercase tracking-widest"
          >
            Contact
          </Link>
          <Link
            href="/contact#calendar"
            onClick={() => setOpen(false)}
            className="font-body text-sm font-semibold uppercase tracking-widest bg-brand-green text-brand-black px-5 py-3 text-center"
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
