import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, ArrowRight, Mountain, MapPin, Car, Waves, Moon, Coffee, Check, Sunrise } from "lucide-react";
import { Button } from "@/components/ui/button";
import { invitation } from "@/lib/invitation";
import hero from "@/assets/hero.jpg";
import spaPools from "@/assets/spa-pools.jpg";
import spaChute from "@/assets/spa-chute.jpg";
import night from "@/assets/nordic-night.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tyra’s Birthday · November 28 — Fun Is the Way" },
      { name: "description", content: "A birthday escape to Yora Nordic Spa Kananaskis. November 28, 2026: Calgary around 2pm, a long soak, dinner and a cozy overnight. RSVP for Tyra’s birthday." },
      { property: "og:title", content: "Tyra’s Birthday — Mountain Maxxing." },
      { property: "og:description", content: "November 28 · Calgary to Yora Nordic Spa Kananaskis · A chill birthday overnight with the group chat. Accommodation split between the crew. RSVP with Tally." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const timeline = [
  { time: "Around 2pm", title: "Out we go", icon: Car, note: "Leave Calgary, head west, watch the mountains get big. Can’t make 2pm? Genuinely no stress — we’ll be at the spa. Come find us." },
  { time: "By 3:30pm", title: "Robes on. World off.", icon: Waves, note: "Arrive at Yora Nordic Spa and slide into the 4pm session. Hot pool, cold plunge, sauna, repeat — the loop is the whole point. Stay as long as you like. (Only 4pm passes are left, so grab yours now — refundable up to 24 hours before.)" },
  { time: "Whenever we’re ready", title: "Check in. Switch off.", icon: Moon, note: "We’ll pick the place together and split the cost. Until then: drop your bags, get comfortable." },
  { time: "Later that evening", title: "Dinner & a toast to Tyra", icon: Check, note: "Good food, a short toast, far too much laughing. Tyra’s the main character tonight. Dinner spot still being decided." },
  { time: "Sunday, November 29", title: "Brunch, or a little hike", icon: Coffee, note: "Really loose — maybe brunch, maybe a short hike, maybe neither. Whatever floats." },
  { time: "Then, whenever", title: "A very slow goodbye", icon: Sunrise, note: "Check out, hugs, and the drive home. No alarm-clock energy — we leave when we leave." },
];

function RsvpLink({ className = "", children = "RSVP for the birthday" }: { className?: string; children?: React.ReactNode }) {
  return <Button asChild className={`invitation-button ${className}`}><a href={invitation.tallyUrl} target="_blank" rel="noreferrer">{children}<ArrowUpRight aria-hidden="true" /></a></Button>;
}

function Index() {
  return (
    <main>
      <section className="birthday-hero">
        <img src={hero} alt="Steaming outdoor spa pools surrounded by snowy Kananaskis pines" width={1920} height={1088} fetchPriority="high" className="hero-photo" />
        <div className="hero-veil" />
        <header className="hero-header page-width">
          <a className="wordmark" href="#" aria-label="Fun Is the Way, back to top">fun is<br /><span>the way.</span></a>
          <div className="header-right"><span className="header-date">NOVEMBER 28, 2026</span><Button asChild variant="ghost" className="header-rsvp"><a href={invitation.tallyUrl} target="_blank" rel="noreferrer">RSVP <ArrowUpRight /></a></Button></div>
        </header>
        <div className="hero-content page-width animate-rise">
          <p className="eyebrow text-gold">Tyra’s birthday era, unlocked</p>
          <h1>Tyra’s birthday.<br /><em>Mountain<br className="mobile-break" /> maxxing.</em></h1>
          <p className="hero-description">One day in the mountains. One cozy overnight.<br />No side quests.</p>
          <RsvpLink />
          <a href="#the-plan" className="hero-scroll"><ArrowDown size={15} aria-hidden="true" /> See the plan. It’s short.</a>
        </div>
      </section>

      <div className="occasion-strip"><div className="page-width occasion-inner"><span>Saturday, November 28</span><span className="occasion-dot">·</span><span>Spa + sleepover</span><span className="occasion-location"><MapPin size={14} /> Kananaskis, Alberta</span></div></div>

      <section id="the-plan" className="intro-section page-width">
        <div><p className="eyebrow text-gold">Less party. More pool.</p><h2>The group chat.<br /><em>In real life.</em></h2></div>
        <div className="intro-copy"><p>We’re taking Tyra to Yora Nordic Spa Kananaskis — the group chat’s one honest attempt at being wellness people.</p><p>The plan, in full: leave Calgary around 2pm, at the spa by 3:30pm, soak as long as we like. Then dinner, a cozy overnight, and a slow Sunday — maybe brunch, maybe a little hike, whatever floats. That’s it. That’s the itinerary.</p><span className="tiny-signoff">With love, the birthday crew</span></div>
      </section>

      <section className="spa-gallery" aria-label="Winter spa scenes">
        <figure className="gallery-main"><img src={spaPools} alt="Steam rising from tiered outdoor thermal pools in a snowy mountain valley at sunset" width={768} height={1152} loading="lazy" /><figcaption><span className="eyebrow">Core memory loading</span><span>Hot. Cold. Zero thoughts.</span></figcaption></figure>
        <figure className="gallery-side"><img src={spaChute} alt="A wooden water chute pouring into a snow-ringed hot tub beside a steam cabin at dusk" width={768} height={1152} loading="lazy" /><figcaption>The cold plunge hits different.<br />Allegedly.</figcaption></figure>
      </section>

      <Journey />

      <section className="day-section page-width" id="the-day">
        <div className="day-heading"><p className="eyebrow text-gold">November 28 → 29</p><h2>The plan.<br /><em>Vibe-based.</em></h2><p>There’s a direction.<br />There’s no schedule.</p></div>
        <ol className="timeline">{timeline.map(({ time, title, note, icon: Icon }, index) => <li key={title}><div className="timeline-mark"><Icon size={18} strokeWidth={1.3} aria-hidden="true" /></div><div className="timeline-content"><span className="timeline-time">{time}</span><h3>{title}</h3><p>{note}</p></div><span className="timeline-number">0{index + 1}</span></li>)}</ol>
      </section>

      <section className="overnight-section"><img src={night.url} alt="Warmly lit sauna buildings and outdoor pools at Yora Nordic Spa in the evening" width={1024} height={683} loading="lazy" /><div className="overnight-veil" /><div className="page-width overnight-content"><p className="eyebrow text-gold">Stay a little longer</p><h2>No rush.<br /><em>No drive home tonight.</em></h2><p>We’re staying the night nearby.<br />Where exactly? We’ll pick it together — and split the cost.</p><div className="overnight-note"><Check size={16} /> Your only job: book the spa pass. We’ll sort the rest together.</div></div></section>

      <section id="rsvp" className="rsvp-section page-width"><Mountain className="rsvp-mountain" size={40} strokeWidth={1} aria-hidden="true" /><p className="eyebrow text-gold">Save your spot</p><h2>You coming<br /><em>or what?</em></h2><p>Tyra deserves this. Frankly, so do you. All we need from you is an RSVP — that’s the whole ask.</p><RsvpLink>Count me in (or out)</RsvpLink><span className="rsvp-date">NOVEMBER 28 · AROUND 2PM · LET’S MAKE THIS WEEKEND MEMORABLE</span><div className="spa-pass-note"><strong>One thing to book: your spa pass, $173, directly with Yora.</strong> Only the 4pm slots are left, so grab yours as soon as you’re in. It’s fully refundable up to 24 hours before — a “maybe” risks nothing. <a href={invitation.spaBookingUrl} target="_blank" rel="noreferrer">Book the 4pm slot <ArrowUpRight size={13} aria-hidden="true" /></a></div></section>

      <footer className="site-footer page-width"><div className="footer-main"><a href="#" className="wordmark">fun is<br /><span>the way.</span></a><p>Made for Tyra.<br />And the people who make life fun.</p><a href="https://knordicspa.com/" target="_blank" rel="noreferrer" className="footer-spa">Yora Nordic Spa Kananaskis <ArrowUpRight size={14} /></a></div><div className="photo-credits">Evening photo: Rebecca Hardcastle · Explore Kananaskis<br />The other scenes were made for this invitation. A private birthday invite — not affiliated with Yora Nordic Spa Kananaskis (formerly Kananaskis Nordic Spa).</div></footer>
    </main>
  );
}

function Journey() {
  return <section className="journey-section" id="the-drive"><div className="page-width"><div className="journey-heading"><div><p className="eyebrow">The drive</p><h2>Go west.<br /><em>Mountain maxxing.</em></h2></div><p>Calgary to Yora Nordic Spa Kananaskis.<br />Less city. More steam.</p></div><div className="route-line"><div className="route-origin"><MapPin size={24} strokeWidth={1.2} /><h3>Calgary</h3><span>Leave around 2pm</span></div><div className="route-middle"><span>HWY 1 → HWY 40 SOUTH</span><div className="route-track"><Car size={22} /><ArrowRight size={22} /></div><span>~100 KM · ~1 HR 15 MIN</span></div><div className="route-destination"><Mountain size={24} strokeWidth={1.2} /><h3>Kananaskis</h3><span>Arrive by 3:30pm</span></div></div><div className="drive-note"><p>Can’t make the 2pm send-off? Genuinely no worries.<br /><strong>We’ll be waiting for you at the spa.</strong></p><span>Same place you know, new name. Google still lists it as Kananaskis Nordic Spa.<br />Approximate drive from central Calgary. November roads may add a little time.<br />Kananaskis charges a conservation pass — $15 per vehicle per day. Carpools are a W.</span></div><div className="map-frame"><iframe title="Map from Calgary to Yora Nordic Spa Kananaskis" src="https://www.google.com/maps?saddr=Calgary,+AB&daddr=Yora+Nordic+Spa,+Kananaskis+Village,+AB&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><Button asChild variant="link" className="directions-link"><a href="https://www.google.com/maps/dir/?api=1&origin=Calgary,+AB&destination=Yora+Nordic+Spa,+Kananaskis+Village,+AB" target="_blank" rel="noreferrer">Open directions <ArrowUpRight /></a></Button></div></section>;
}
