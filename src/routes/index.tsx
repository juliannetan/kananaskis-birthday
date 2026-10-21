import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, ArrowRight, Mountain, MapPin, Car, Waves, Moon, Coffee, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { invitation } from "@/lib/invitation";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tyra’s Birthday · November 28 — Fun Is the Way" },
      { name: "description", content: "A birthday escape to Yora Nordic Spa Kananaskis. November 28, 2026: Calgary around 2pm, a long soak, dinner and a cozy overnight. RSVP for Tyra’s birthday." },
      { property: "og:title", content: "Tyra’s Birthday 🌻 — In the Mountains" },
      { property: "og:description", content: "November 28 · Calgary to Yora Nordic Spa Kananaskis · A chill birthday overnight with the group chat. Stay in Canmore covered as a birthday gift. RSVP with Tally." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const timeline = [
  { time: "Around 2pm", title: "Departures", icon: Car, note: "We’re carpooling out of Calgary around 2pm. Can’t make it? No worries at all — we’ll see you at the spa." },
  { time: "By 3:30pm", title: "Spa and chill", icon: Waves, note: "Towels, spa shoes, robe, and lockers provided. Sun hopefully too." },
  { time: "Whenever we’re ready", title: "Check in", icon: Moon, note: <><strong>Your accommodation is already taken care of, and it’s my gift</strong> — a place in Canmore, about 40 minutes from the spa; I’ll send the address closer to the date.</> },
  { time: "Until hopefully-not-so-late", title: "Dinner", icon: Check, note: "Good food, a gentle night, I think." },
  { time: "Sunday, November 29", title: "Brunch", icon: Coffee, note: "Really loose — maybe brunch, maybe a short hike. Stay the day and leave as late as we’d like." },
];


function Index() {
  return (
    <main>
      <section className="birthday-hero">
        <img src={hero} alt="Steaming outdoor spa pools surrounded by snowy Kananaskis pines" width={1920} height={1088} fetchPriority="high" className="hero-photo" />
        <div className="hero-veil" />
        <div className="hero-content page-width animate-rise">
          <p className="eyebrow text-gold">⸻ Well, it’s that time of the year</p>
          <h1>Tyra’s birthday 🌻<br /><em>In the Mountains</em></h1>
          <div className="details-block"><div className="detail"><p className="eyebrow text-gold">When</p><p>November 28 – 29</p></div><div className="detail"><p className="eyebrow text-gold">Where</p><p>Kananaskis</p></div><div className="detail"><p className="eyebrow text-gold">Theme</p><p>Spa + mountain maxxing</p></div><div className="detail detail-rsvp"><a className="details-rsvp" href={invitation.tallyUrl} target="_blank" rel="noreferrer">RSVP <ArrowUpRight size={13} aria-hidden="true" /></a></div></div>
          <a href="#the-day" className="hero-scroll"><ArrowDown size={15} aria-hidden="true" /> See the plan.</a>
        </div>
      </section>



      <Journey />

      <section className="day-section page-width" id="the-day">
        <div className="day-heading"><p className="eyebrow text-gold">November 28 → 29</p><h2>The plan<br /><em>Vibe-based</em></h2></div>
        <ol className="timeline">{timeline.map(({ time, title, note, icon: Icon }, index) => <li key={title}><div className="timeline-mark"><Icon size={18} strokeWidth={1.3} aria-hidden="true" /></div><div className="timeline-content"><span className="timeline-time">{time}</span><h3>{title}</h3><p>{note}</p></div><span className="timeline-number">0{index + 1}</span></li>)}</ol>
      </section>



      <div className="closing-band"><section id="rsvp" className="rsvp-section page-width"><Mountain className="rsvp-mountain" size={40} strokeWidth={1} aria-hidden="true" /><span className="rsvp-date"><strong>See you in the Mountains.</strong><span>November 28 – 29 · Tyra’s Birthday</span></span><div className="spa-pass-note"><strong>One thing to book: your spa pass, $173, directly with Yora.</strong> Only the 4pm slots are left, so grab yours as soon as you’re in. It’s fully refundable up to 24 hours before — a “maybe” risks nothing. <a href={invitation.spaBookingUrl} target="_blank" rel="noreferrer">Book the 4pm slot <ArrowUpRight size={13} aria-hidden="true" /></a></div></section>

      </div>
    </main>
  );
}

function Journey() {
  return <section className="journey-section" id="the-drive"><div className="page-width"><div className="route-line"><div className="route-origin"><MapPin size={24} strokeWidth={1.2} /><h3>Calgary</h3><span>Leave around 2pm</span></div><div className="route-middle"><span>HWY 1 → HWY 40 SOUTH</span><div className="route-track"><Car size={22} /><ArrowRight size={22} /></div><span>~100 KM · ~1 HR 15 MIN</span></div><div className="route-destination"><Mountain size={24} strokeWidth={1.2} /><h3>Yora Nordic Spa</h3><span>Arrive by 3:30pm</span></div></div><div className="drive-note"><span>Same place, new name. Google still lists it as Kananaskis Nordic Spa.<br />Kananaskis charges a conservation pass — $15 per vehicle per day. Carpools are a W.</span></div><div className="map-frame"><iframe title="Map from Calgary to Yora Nordic Spa Kananaskis" src="https://www.google.com/maps?saddr=Calgary,+AB&daddr=Yora+Nordic+Spa,+Kananaskis+Village,+AB&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><Button asChild variant="link" className="directions-link"><a href="https://www.google.com/maps/dir/?api=1&origin=Calgary,+AB&destination=Yora+Nordic+Spa,+Kananaskis+Village,+AB" target="_blank" rel="noreferrer">Open directions <ArrowUpRight /></a></Button></div></section>;
}
