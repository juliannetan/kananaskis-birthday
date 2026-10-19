import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { findRsvp, saveRsvp } from "@/lib/rsvp.functions";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tyra Turns Another Year — Spa Day in Kananaskis" },
      { name: "description", content: "Tyra's birthday: 2pm out of Calgary, spa all day, then dinner and a sleepover. RSVP inside." },
      { property: "og:title", content: "Tyra's Birthday Spa Day" },
      { property: "og:description", content: "Calgary → Kananaskis Nordic Spa. Depart 2pm, arrive ~3:15. Stay all day, then dinner and the accommodation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const timeline = [
  { time: "2:00pm", title: "Depart Calgary", note: "Be on time. Yes, you. Grab an iced coffee, claim shotgun, argue about the aux, and head west on Hwy 1." },
  { time: "2:40pm", title: "Turn south onto Hwy 40", note: "Someone asks 'are we there yet.' Someone needs to pee. Mountains appear and everyone suddenly goes quiet and spiritual." },
  { time: "3:15pm", title: "Arrive at the spa", note: "Robes on. Phones away (after one group pic for the ’gram)." },
  { time: "3:30pm", title: "Hot · Cold · Scream", note: "Boil in the hot pool, shriek in the cold plunge, pretend to meditate in the sauna. Repeat until you've forgotten your emails." },
  { time: "All day", title: "No rush, no curfew", note: "Stay as long as you like. Nap, sweat, lose track of time in the steam, and plot the next group trip like the degenerates you are." },
  { time: "7:30pm", title: "Check in to the accommodation", note: "Drop the bags, change out of our swimsuits, and pretend we're well-rested adults for approximately five minutes." },
  { time: "8:30pm", title: "Dinner", note: "A big table, far too much food, and an emotional birthday toast to Tyra that goes on slightly too long." },
  { time: "Next day", title: "Slow morning, then check out", note: "Coffee, a last argument about who hogged the good pillows, and we're out before the rooms are due." },
];

function Index() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative flex min-h-screen items-end">
        <img src={hero} alt="Steaming outdoor pools among snowy pines in Kananaskis" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-24 animate-rise">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">Mandatory fun · Tyra's birthday</p>
          <h1 className="text-6xl leading-[0.95] md:text-8xl">
            Tyra's getting older.<br /><em className="text-gold">We're getting steamed.</em>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">
            We're hauling the birthday girl to Kananaskis Nordic Spa to sweat out last weekend's bad decisions. We leave Calgary at 2pm, stay at the spa as long as we like, then eat, drink, and sleep it off. It's healing. It's cheap therapy. It's not the same without you, you absolute menace.
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
        <div className="mt-6 border border-border bg-card p-6 text-sm text-muted-foreground">
          <span className="text-gold">Where we're staying:</span> the accommodation and the dinner spot are still up in the air. RSVP and we'll send you the address, the room split, and the dinner reservation once they're locked.
        </div>
      </section>

      <Rsvp />

      <footer className="border-t border-border py-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Calgary → Kananaskis · 1 hr 15 min · Happy birthday, Tyra
      </footer>
    </main>
  );
}

function Journey() {
  const route = "M 920 200 C 760 200, 640 190, 520 170 C 420 150, 380 120, 300 110 C 230 100, 160 120, 90 95";
  return (
    <section className="border-y border-border bg-card py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">The drive</p>
        <h2 className="mb-12 text-5xl">West into the Rockies</h2>
        <svg viewBox="0 0 1000 280" className="w-full">
          <path d="M 0 280 L 0 120 L 70 60 L 140 130 L 220 40 L 300 120 L 380 70 L 470 170 L 560 220 L 1000 230 L 1000 280 Z" fill="var(--mist)" />
          <path d="M 0 280 L 0 170 L 110 90 L 190 170 L 260 100 L 360 200 L 1000 250 L 1000 280 Z" fill="var(--mist)" />
          <path d={route} fill="none" stroke="var(--gold)" strokeWidth="2" strokeDasharray="6 8" />
          <circle cx="920" cy="200" r="7" fill="var(--gold)" />
          <circle cx="90" cy="95" r="7" fill="var(--gold)" />
          <text x="920" y="240" fill="var(--foreground)" fontSize="18" textAnchor="middle" fontFamily="var(--font-display)">Calgary · 2:00pm</text>
          <text x="520" y="205" fill="var(--muted-foreground)" fontSize="14" textAnchor="middle">Hwy 1 → Hwy 40</text>
          <text x="110" y="60" fill="var(--foreground)" fontSize="18" textAnchor="middle" fontFamily="var(--font-display)">Nordic Spa · 3:15pm</text>
          <text x="960" y="30" fill="var(--muted-foreground)" fontSize="12" textAnchor="end" letterSpacing="3">W ← → E</text>
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={80 + i * 10} cy="85" r="4" fill="var(--foreground)" className="animate-steam" style={{ animationDelay: `${i * 1.2}s` }} />
          ))}
          <g style={{ offsetPath: `path("${route}")`, offsetRotate: "0deg", animation: "drive 7s ease-in-out infinite alternate" }}>
            <rect x="-14" y="-8" width="28" height="14" rx="4" fill="var(--gold)" />
          </g>
        </svg>
        <div className="mt-12 grid gap-8 text-sm md:grid-cols-3">
          <div><div className="font-display text-3xl text-gold">~100 km</div><p className="text-muted-foreground">Hwy 1 west, then Hwy 40 south</p></div>
          <div><div className="font-display text-3xl text-gold">1 hr 15 min</div><p className="text-muted-foreground">In clear conditions, from central Calgary</p></div>
          <div><div className="font-display text-3xl text-gold">Carpool</div><p className="text-muted-foreground">We'll sort rides together</p></div>
        </div>
        <div className="mt-12 overflow-hidden border border-border">
          <iframe
            title="Driving route from Calgary to Kananaskis Nordic Spa"
            src="https://www.google.com/maps?saddr=Calgary,+AB&daddr=Kananaskis+Nordic+Spa,+Kananaskis+Village,+AB&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
        <a href="https://www.google.com/maps/dir/?api=1&origin=Calgary,+AB&destination=Kananaskis+Nordic+Spa" target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs uppercase tracking-[0.3em] text-gold">
          Open directions in Google Maps →
        </a>
      </div>
    </section>
  );
}

type Form = { email: string; first_name: string; last_name: string; attending: boolean; departure_works: boolean; preferred_time: string };
const empty: Form = { email: "", first_name: "", last_name: "", attending: true, departure_works: true, preferred_time: "" };

function Rsvp() {
  const find = useServerFn(findRsvp);
  const save = useServerFn(saveRsvp);
  const [f, setF] = useState<Form>(empty);
  const [step, setStep] = useState<"form" | "lookup" | "sent">("form");
  const [editing, setEditing] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const set = <K extends keyof Form>(k: K, v: Form[K]) => setF((p) => ({ ...p, [k]: v }));

  async function lookup(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setMsg("");
    try {
      const r = await find({ data: { email: f.email } });
      if (!r) { setMsg("We couldn't find an RSVP for that email. You can send a new one below."); setStep("form"); }
      else {
        setF({ email: r.email, first_name: r.first_name, last_name: r.last_name, attending: r.attending, departure_works: r.departure_works ?? true, preferred_time: r.preferred_time ?? "" });
        setEditing(true); setStep("form");
      }
    } catch { setMsg("Please enter a valid email."); } finally { setBusy(false); }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setMsg("");
    try {
      await save({ data: {
        email: f.email, first_name: f.first_name, last_name: f.last_name, attending: f.attending,
        departure_works: f.attending ? f.departure_works : null,
        preferred_time: f.attending && !f.departure_works ? f.preferred_time || null : null,
      } });
      setStep("sent");
    } catch { setMsg("Something didn't go through. Please check your details and try again."); } finally { setBusy(false); }
  }

  const input = "mt-2 w-full border-b border-input bg-transparent py-3 text-xl outline-none focus:border-gold";
  const label = "text-xs uppercase tracking-[0.3em] text-muted-foreground";

  return (
    <section id="rsvp" className="mx-auto max-w-2xl px-6 py-28">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">RSVP</p>
      <h2 className="mb-4 text-5xl">{editing ? "Update your RSVP" : "You coming or what?"}</h2>
      <p className="mb-12 text-muted-foreground">Tyra deserves this. Frankly, so do you.</p>

      {step === "sent" ? (
        <div className="border border-gold p-10 text-center">
          <h3 className="text-3xl text-gold">{f.attending ? "Pack your swimsuit, degenerate." : "Fine. We'll talk about you in the hot tub."}</h3>
          <p className="mt-3 text-muted-foreground">Thank you, {f.first_name}. Need to change something? Come back and use your email.</p>
          <button onClick={() => { setStep("form"); setEditing(true); }} className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">Edit my RSVP</button>
        </div>
      ) : step === "lookup" ? (
        <form onSubmit={lookup} className="space-y-8">
          <label className="block"><span className={label}>Email you RSVP'd with</span>
            <input type="email" required value={f.email} onChange={(e) => set("email", e.target.value)} className={input} />
          </label>
          {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
          <button disabled={busy} className="w-full bg-primary py-4 text-sm uppercase tracking-[0.3em] text-primary-foreground transition hover:opacity-90 disabled:opacity-50">
            {busy ? "Finding…" : "Find my RSVP"}
          </button>
          <button type="button" onClick={() => setStep("form")} className="w-full text-xs uppercase tracking-[0.3em] text-muted-foreground">Back</button>
        </form>
      ) : (
        <form onSubmit={submit} className="space-y-8">
          {!editing && (
            <button type="button" onClick={() => { setStep("lookup"); setMsg(""); }} className="text-xs uppercase tracking-[0.3em] text-gold">
              Already RSVP'd? Edit it with your email →
            </button>
          )}
          <div className="grid gap-8 md:grid-cols-2">
            <label className="block"><span className={label}>First name</span>
              <input required maxLength={100} value={f.first_name} onChange={(e) => set("first_name", e.target.value)} className={input} />
            </label>
            <label className="block"><span className={label}>Last name</span>
              <input required maxLength={100} value={f.last_name} onChange={(e) => set("last_name", e.target.value)} className={input} />
            </label>
          </div>
          <label className="block"><span className={label}>Email</span>
            <input type="email" required maxLength={255} readOnly={editing} value={f.email} onChange={(e) => set("email", e.target.value)} className={input} />
          </label>
          <Choice label="Can you come?" value={f.attending ? "yes" : "no"} onChange={(v) => set("attending", v === "yes")} options={[["yes", "Obviously I'm in"], ["no", "I'm a coward (no)"]]} />
          {f.attending && (
            <>
              <Choice label="Does a 2pm departure from Calgary work?" value={f.departure_works ? "works" : "other"} onChange={(v) => set("departure_works", v === "works")} options={[["works", "2pm, I'll be there"], ["other", "2pm?? Be serious"]]} />
              {!f.departure_works && (
                <input placeholder="What time works for you?" maxLength={200} value={f.preferred_time} onChange={(e) => set("preferred_time", e.target.value)} className={input} />
              )}
            </>
          )}
          {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
          <button disabled={busy} className="w-full bg-primary py-4 text-sm uppercase tracking-[0.3em] text-primary-foreground transition hover:opacity-90 disabled:opacity-50">
            {busy ? "Sending…" : editing ? "Update RSVP" : "Send RSVP"}
          </button>
        </form>
      )}
    </section>
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
