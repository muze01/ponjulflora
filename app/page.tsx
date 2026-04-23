import Image from "next/image";
import Countdown from "@/components/Countdown";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Clock, Calendar, Heart } from "lucide-react";

/* ─── Decorative SVG flourish ─────────────────────────────── */
function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 20 Q25 5 50 20 Q75 35 100 20 Q125 5 150 20 Q175 35 200 20"
        stroke="#C9A84C"
        strokeWidth="1"
        opacity="0.6"
      />
      <circle cx="100" cy="20" r="3" fill="#C9A84C" opacity="0.8" />
      <circle cx="50" cy="20" r="1.5" fill="#C9A84C" opacity="0.5" />
      <circle cx="150" cy="20" r="1.5" fill="#C9A84C" opacity="0.5" />
    </svg>
  );
}

/* ─── Ampersand divider ───────────────────────────────────── */
function GoldDivider({ label }: { label?: string }) {
  return (
    <div className="divider my-6">
      <span className="font-script italic text-gold text-2xl opacity-70 px-4">
        {label ?? "✦"}
      </span>
    </div>
  );
}

/* ─── Section heading ─────────────────────────────────────── */
function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-12">
      <p
        className={`font-body text-xs uppercase tracking-[0.35em] mb-3 ${light ? "text-gold-light opacity-80" : "text-terracotta"}`}
      >
        Flora & Ponjul
      </p>
      <h2
        className={`font-display text-4xl sm:text-5xl font-bold ${light ? "text-cream" : "text-brown-dark"}`}
      >
        {children}
      </h2>
      <Flourish className="w-40 mx-auto mt-4" />
    </div>
  );
}

/* ─── Event card ──────────────────────────────────────────── */
function EventCard({
  icon,
  title,
  time,
  venue,
  address,
  accent = false,
}: {
  icon: React.ReactNode;
  title: string;
  time: string;
  venue: string;
  address: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-8 sm:p-10 overflow-hidden border ${
        accent
          ? "bg-forest border-forest text-cream"
          : "bg-white border-gold/20 text-brown-dark"
      }`}
    >
      {/* Corner ornament */}
      <div
        className={`absolute top-4 right-4 w-16 h-16 ring-ornament ${accent ? "opacity-20" : ""}`}
      />

      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${
          accent ? "bg-gold/20 text-gold" : "bg-terracotta/10 text-terracotta"
        }`}
      >
        {icon}
      </div>

      <p
        className={`font-body text-xs uppercase tracking-[0.3em] mb-2 ${accent ? "text-gold-light" : "text-terracotta"}`}
      >
        {title}
      </p>
      <h3
        className={`font-display text-2xl sm:text-3xl font-bold mb-4 ${accent ? "text-cream" : "text-brown-dark"}`}
      >
        2nd May, 2026
      </h3>

      <div className="space-y-3">
        <div
          className={`flex items-center gap-2 font-body text-sm ${accent ? "text-cream/80" : "text-warm-brown"}`}
        >
          <Clock size={14} className="shrink-0" />
          <span>{time}</span>
        </div>
        <div
          className={`flex items-start gap-2 font-body text-sm ${accent ? "text-cream/80" : "text-warm-brown"}`}
        >
          <MapPin size={14} className="shrink-0 mt-0.5" />
          <div>
            <div
              className={`font-medium ${accent ? "text-cream" : "text-brown-dark"}`}
            >
              {venue}
            </div>
            <div className="text-xs mt-0.5 opacity-70">{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Color swatch ────────────────────────────────────────── */
function ColorSwatch({
  color,
  label,
  border = false,
}: {
  color: string;
  label: string;
  border?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg ${border ? "border-2 border-gold/30" : ""}`}
        style={{ backgroundColor: color }}
      />
      <span className="font-body text-xs uppercase tracking-[0.2em] text-warm-brown">
        {label}
      </span>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden bg-[#FAF6EF]">
        {/* Textured background ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full border border-gold/10" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-gold/15" />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-gold/20" />
        </div>

        {/* Top label */}
        <p className="font-body text-xs uppercase tracking-[0.4em] text-terracotta mb-8 relative z-10">
          The families of Dr. & Mrs. Nanzing Nangil Nden
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>Chief & Mrs. Jonathan
          Haruna Manzwet
        </p>

        {/* Main names */}
        <div className="relative z-10">
          <h1 className="font-script italic font-light leading-none">
            <span className="block text-[clamp(4rem,12vw,9rem)] text-brown-dark leading-none">
              Flora
            </span>
            <span className="block font-body text-gold text-3xl sm:text-4xl tracking-[0.4em] uppercase my-3 sm:my-4 font-light">
              &amp;
            </span>
            <span className="block text-[clamp(4rem,12vw,9rem)] text-forest leading-none">
              Ponjul
            </span>
          </h1>
        </div>

        <Flourish className="w-56 mx-auto my-8 relative z-10" />

        {/* Date & venue */}
        <div className="relative z-10 space-y-2 mb-10">
          <p className="font-display text-xl sm:text-2xl font-semibold text-brown-dark tracking-wide">
            Friday, 2nd May 2026
          </p>
          <p className="font-body text-sm text-warm-brown tracking-[0.15em]">
            COCIN Church, Rayfield · Jos, Nigeria
          </p>
        </div>

        {/* Countdown */}
        <div className="relative z-10">
          <Countdown targetDate="2026-05-02T11:00:00" />
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          COUPLE PHOTO SECTION
      ══════════════════════════════════════════════ */}
      <section className="bg-[#2C1810] relative py-0 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Photo */}
          <div className="relative h-[500px] sm:h-[650px] md:h-[750px]">
            <Image
              src="/images/couple1.jpg"
              alt="Flora and Ponjul"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Gradient overlay on right edge */}
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-[#2C1810] hidden md:block" />
          </div>

          {/* Text */}
          <div className="px-10 py-16 sm:px-16 text-center md:text-left">
            <p className="font-body text-xs uppercase tracking-[0.35em] text-gold mb-4">
              Joyfully Invite You To The
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream font-bold leading-tight mb-4">
              Wedding
              <br />
              Solemnization
            </h2>
            <p className="font-script italic text-gold-light text-2xl mb-8">
              of their children
            </p>
            <Flourish className="w-40 mb-8 md:mx-0 mx-auto" />
            <p className="font-body text-cream/70 text-sm leading-relaxed max-w-sm md:mx-0 mx-auto">
              Two families, one celebration of love. We are overjoyed to share
              this moment with our most cherished friends and family as Flora
              and Ponjul begin their journey together.
            </p>
            <div className="mt-10 flex items-center gap-3 md:justify-start justify-center">
              <Heart size={14} className="text-terracotta fill-terracotta" />
              <span className="font-body text-xs tracking-[0.3em] text-cream/50 uppercase">
                Forever Begins Here
              </span>
              <Heart size={14} className="text-terracotta fill-terracotta" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          EVENT DETAILS
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAF6EF]" id="events">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <SectionTitle>The Celebration</SectionTitle>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <ScrollReveal delay={100}>
              <EventCard
                icon={<Calendar size={22} />}
                title="Wedding Ceremony"
                time="11:00 AM Prompt"
                venue="COCIN Church Gold and Base"
                address="Rayfield, Jos, Plateau State"
              />
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <EventCard
                icon={<Heart size={22} />}
                title="Wedding Reception"
                time="Following the Ceremony"
                venue="Mees Palace"
                address="Along Rayfield Resort, Rayfield, Jos"
                accent
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SCHEDULE TIMELINE
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white" id="schedule">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <SectionTitle>Order of the Day</SectionTitle>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical gold line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />

            {[
              {
                time: "10:30 AM",
                event: "Guests Arrive & Seat",
                note: "COCIN Church, Rayfield",
              },
              {
                time: "11:00 AM",
                event: "Wedding Ceremony Begins",
                note: "Prompt — please be seated",
              },
              {
                time: "1:00 PM",
                event: "Departure to Reception",
                note: "Procession to Mees Palace",
              },
              {
                time: "2:00 PM",
                event: "Reception Opens",
                note: "Mees Palace, Rayfield Resort",
              },
              {
                time: "Evening",
                event: "Celebration & Dancing",
                note: "Until the last song plays",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div
                  className={`flex items-center gap-6 mb-10 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${i % 2 === 0 ? "text-right pr-6" : "text-left pl-6"}`}
                  >
                    <p className="font-body text-xs uppercase tracking-[0.25em] text-terracotta mb-1">
                      {item.time}
                    </p>
                    <p className="font-display text-lg font-semibold text-brown-dark">
                      {item.event}
                    </p>
                    <p className="font-body text-sm text-warm-brown/70 mt-0.5">
                      {item.note}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-gold border-2 border-cream shrink-0 shadow-sm z-10 relative" />

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DRESS CODE
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAF6EF]" id="dresscode">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <SectionTitle>Colour the Day</SectionTitle>
            <p className="font-body text-warm-brown text-sm sm:text-base max-w-md mx-auto -mt-4 mb-14 leading-relaxed">
              Help us paint a beautiful picture. Our guests are invited to dress
              in any of our wedding colours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex justify-center gap-8 sm:gap-14 flex-wrap">
              <ColorSwatch color="#C0392B" label="Red" />
              <ColorSwatch color="#6B3A2A" label="Brown" />
              <ColorSwatch color="#1B4D3E" label="Green" />
              <ColorSwatch color="#F8F4EE" label="White" border />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          THANKSGIVING SERVICE
      ══════════════════════════════════════════════ */}
      <section
        className="relative py-24 px-6 overflow-hidden bg-[#1a1a1a]"
        id="thanksgiving"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/thanksgiving.jpg"
            alt="Thanksgiving Service"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/80 to-[#1a1a1a]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-body text-xs uppercase tracking-[0.35em] text-gold mb-4">
              Dr. & Mrs. Nanzing Nangil Nden
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream font-bold mb-4">
              Thanksgiving Service
            </h2>
            <Flourish className="w-40 mx-auto my-6" />
            <p className="font-script italic text-gold-light text-xl mb-12">
              Special Family Thanksgiving Service
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                {
                  icon: <Calendar size={20} />,
                  label: "Date",
                  value: "Sunday, 3rd May 2026",
                },
                {
                  icon: <Clock size={20} />,
                  label: "Time",
                  value: "8:00 AM Prompt",
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Venue",
                  value: "COCIN Gold and Base, Rayfield, Jos",
                },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="countdown-block rounded-xl p-6 text-center"
                >
                  <div className="flex justify-center text-gold mb-3">
                    {icon}
                  </div>
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-cream/40 mb-1">
                    {label}
                  </p>
                  <p className="font-body text-sm text-cream/90">{value}</p>
                </div>
              ))}
            </div>

            <p className="font-body text-cream/50 text-sm mt-8">
              Refreshments at Family Residence, Rayfield, Jos
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="bg-[#2C1810] py-16 px-6 text-center">
        <Flourish className="w-40 mx-auto mb-8" />
        <h3 className="font-script italic text-gold text-5xl sm:text-6xl mb-3">
          Flora & Ponjul
        </h3>
        <p className="font-body text-xs uppercase tracking-[0.4em] text-cream/40 mb-8">
          2nd May 2026 · Jos, Nigeria
        </p>
        <p className="font-body text-cream/30 text-xs">
          With love from both families 💍
        </p>

        <div className="mt-6 border-t border-gold/10 pt-6">
          <p className="font-body text-cream/30 text-xs mb-1">Website by</p>

          <a
            href="mailto:muzingnimzing@gmail.com"
            className="font-body text-cream/30 text-xs hover:text-gold transition-colors tracking-widest"
          >
            muzingnimzing@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
