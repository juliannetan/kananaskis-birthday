import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Birthday in the Mountains — Kananaskis Nordic Spa" },
      { name: "description", content: "Join us for a birthday day trip from Calgary to Kananaskis Nordic Spa. RSVP inside." },
      { property: "og:title", content: "A Birthday in the Mountains" },
      { property: "og:description", content: "Calgary → Kananaskis Nordic Spa. Depart 10am. Stay as long as you like." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const timeline = [
  { time: "10:00", title: "Depart Calgary", note: "We meet, load up, coffee in hand, and roll west on the Trans-Canada." },
  { time: "10:30", title: "Foothills give way", note: "Prairie fades into rolling hills; the Rockies rise in the windshield." },
  { time: "11:00", title: "Arrive at the spa", note: "Kananaskis Nordic Spa. Robes on, phones away." },
  { time: "11:15", title: "Hot · Cold · Rest", note: "Steaming outdoor pools, cold plunges, saunas carved into the mountain air." },
  { time: "13:00", title: "A slow lunch", note: "Something warm at the bistro, birthday toast included." },
  { time: "∞", title: "As long as you'd like", note: "No clock. Leave when you're melted. The mountains aren't going anywhere." },
];

function Index() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative flex min-h-screen items-end">
        <img src={hero} alt="Steaming outdoor pools among snowy pines in Kananaskis" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-24 animate-rise">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">You're invited</p>
          <h1 className="text-6xl leading-[0.95] md:text-8xl">
            A birthday<br /><em className="text-gold">in the mountains</em>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">
            We're stealing our friend away for a day of heat, steam and stillness at Kananaskis Nordic Spa — and it wouldn't be the same without you.
          </p>
          <a href="#rsvp" className="mt-10 inline-block border border-gold px-8 py-4 text-sm uppercase tracking-[0.3em] text-gold transition hover:bg-primary hover:text-primary-foreground">
            RSVP
          </a>
        </div>
      </section>

      <Journey />

      <section className="mx-auto max-w-3xl px-6 py-28">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">The day</p>
        <h2 className="mb-16 text-5xl">How it unfolds</h2>
        <ol className="relative border-l border-border">
          {timeline.map((t, i) => (
            <li key={t.title} className="relative mb-14 pl-10 animate-rise" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="absolute -left-[7px] top-3 h-3 w-3 rounded-full bg-gold" />
              <div className="font-display text-3xl text-gold">{t.time}</div>
              <h3 className="mt-1 text-2xl">{t.title}</h3>
              <p className="mt-2 text-muted-foreground">{t.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <Rsvp />

      <footer className="border-t border-border py-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Calgary → Kananaskis · 1 hour · With love
      </footer>
    </main>
  );
}

function Journey() {
  const path = "M 60 220 C 260 220, 320 120, 520 140 S 820 60, 940 90";
  return (
    <section className="border-y border-border bg-card py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">The drive</p>
        <h2 className="mb-12 text-5xl">One hour west</h2>
        <svg viewBox="0 0 1000 300" className="w-full">
          <path d="M 0 300 L 0 250 L 400 250 L 560 160 L 640 200 L 760 90 L 860 170 L 920 120 L 1000 180 L 1000 300 Z" fill="var(--mist)" />
          <path d="M 600 300 L 720 140 L 800 220 L 880 110 L 1000 230 L 1000 300 Z" fill="var(--mist)" />
          <path d={path} fill="none" stroke="var(--gold)" strokeWidth="2" strokeDasharray="6 8" />
          <circle cx="60" cy="220" r="7" fill="var(--gold)" />
          <circle cx="940" cy="90" r="7" fill="var(--gold)" />
          <text x="60" y="260" fill="var(--foreground)" fontSize="18" textAnchor="middle" fontFamily="var(--font-display)">Calgary · 10:00</text>
          <text x="940" y="60" fill="var(--foreground)" fontSize="18" textAnchor="middle" fontFamily="var(--font-display)">Nordic Spa · 11:00</text>
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={930 + i * 10} cy="80" r="4" fill="var(--foreground)" className="animate-steam" style={{ animationDelay: `${i * 1.2}s` }} />
          ))}
          <g style={{ offsetPath: `path("${path}")`, animation: "drive 6s ease-in-out infinite alternate" }}>
            <rect x="-14" y="-8" width="28" height="14" rx="4" fill="var(--gold)" />
          </g>
        </svg>
        <div className="mt-10 grid gap-8 text-sm md:grid-cols-3">
          <div><div className="font-display text-3xl text-gold">~95 km</div><p className="text-muted-foreground">Trans-Canada Hwy 1 west</p></div>
          <div><div className="font-display text-3xl text-gold">1 hr</div><p className="text-muted-foreground">Mountains the whole way</p></div>
          <div><div className="font-display text-3xl text-gold">Carpool</div><p className="text-muted-foreground">We'll sort rides together</p></div>
        </div>
      </div>
    </section>
  );
}

function Rsvp() {
  const [sent, setSent] = useState(false);
  const [coming, setComing] = useState<string>("yes");
  return (
    <section id="rsvp" className="mx-auto max-w-2xl px-6 py-28">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">RSVP</p>
      <h2 className="mb-4 text-5xl">Will you join us?</h2>
      <p className="mb-12 text-muted-foreground">We'd truly love to have you there.</p>
      {sent ? (
        <div className="border border-gold p-10 text-center">
          <h3 className="text-3xl text-gold">{coming === "no" ? "We'll miss you." : "See you in the mountains."}</h3>
          <p className="mt-3 text-muted-foreground">Thank you for letting us know.</p>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-8">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Your name</span>
            <input required className="mt-2 w-full border-b border-input bg-transparent py-3 text-xl outline-none focus:border-gold" />
          </label>
          <Choice label="Can you come?" value={coming} onChange={setComing} options={[["yes", "Yes, I'm in"], ["no", "Sadly, no"]]} />
          {coming === "yes" && (
            <TimeChoice />
          )}
          <button className="w-full bg-primary py-4 text-sm uppercase tracking-[0.3em] text-primary-foreground transition hover:opacity-90">
            Send RSVP
          </button>
        </form>
      )}
    </section>
  );
}

function TimeChoice() {
  const [v, setV] = useState("works");
  return (
    <>
      <Choice label="Does a 10am departure from Calgary work?" value={v} onChange={setV} options={[["works", "10am is perfect"], ["other", "I need a different time"]]} />
      {v === "other" && (
        <input placeholder="What time works for you?" className="w-full border-b border-input bg-transparent py-3 outline-none focus:border-gold" />
      )}
    </>
  );
}

function Choice({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: [string, string][] }) {
  return (
    <div>
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {options.map(([k, l]) => (
          <button type="button" key={k} onClick={() => onChange(k)}
            className={`border py-4 transition ${value === k ? "border-gold bg-mist text-gold" : "border-border text-muted-foreground"}`}>
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}
