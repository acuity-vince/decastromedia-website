import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — De Castro Media",
  description: "Book a discovery call or send a message. Let's talk about AI audits, Claude training, or a new website.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-black min-h-screen">
        {/* Page header */}
        <section className="pt-32 pb-12 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-body text-xs uppercase tracking-widest text-brand-teal mb-3">
              Get in Touch
            </p>
            <h1 className="font-display text-5xl sm:text-6xl uppercase text-brand-white">
              Let&apos;s Talk
            </h1>
            <p className="font-body text-sm text-white/50 mt-3 max-w-md">
              Fill in the form below, or book a 30-minute discovery call directly in the calendar.
            </p>
          </div>
        </section>

        {/* Two-column: form + Calendly */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form — 2 cols */}
              <div className="lg:col-span-2">
                <h2 className="font-display text-2xl uppercase text-brand-white mb-8">
                  Send a Message
                </h2>
                <ContactForm />
              </div>

              {/* Calendly — 3 cols */}
              <div id="calendar" className="lg:col-span-3">
                <h2 className="font-display text-2xl uppercase text-brand-white mb-8">
                  Book a Discovery Call
                </h2>
                <div className="border border-white/10 overflow-hidden">
                  {/* Replace the src with your actual Calendly URL */}
                  <iframe
                    src="https://calendly.com/decastromedia/strategy-call"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Book a discovery call"
                    className="block bg-brand-black"
                  />
                </div>
                <p className="font-body text-xs text-white/30 mt-3">
                  Can&apos;t see the calendar? Update the Calendly URL in{" "}
                  <code className="text-white/40">app/contact/page.tsx</code>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
