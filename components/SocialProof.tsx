import Image from "next/image";

const logos = [
  { src: "/logos/cdms.png", alt: "CDMS", width: 100, height: 60 },
  { src: "/logos/finance-magnates.png", alt: "Finance Magnates", width: 180, height: 50 },
  { src: "/logos/ifx-expo.png", alt: "iFX EXPO International", width: 160, height: 50 },
  { src: "/logos/qube.png", alt: "Qube", width: 130, height: 50 },
];

export default function SocialProof() {
  return (
    <section className="bg-brand-black border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-xs uppercase tracking-widest text-white/30 mb-10 text-center">
          As Seen At
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map(({ src, alt, width, height }) => (
            <div
              key={alt}
              className="opacity-40 hover:opacity-70 transition-opacity"
              style={{ mixBlendMode: "screen" }}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="object-contain filter grayscale brightness-150"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
