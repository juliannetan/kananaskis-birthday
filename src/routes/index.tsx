import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, ArrowLeft, Mountain, MapPin, Car, Waves, Moon, Coffee, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { invitation } from "@/lib/invitation";
import hero from "@/assets/hero.jpg";
import mountain from "@/assets/nordic-mountain.jpg.asset.json";
import winter from "@/assets/nordic-winter.jpg.asset.json";
import night from "@/assets/nordic-night.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tyra’s Birthday · November 28 — Fun Is the Way" },
      { name: "description", content: "A birthday escape to Kananaskis Nordic Spa. November 28, 2026: Calgary around noon, a long soak, dinner and a cozy overnight. RSVP for Tyra’s birthday." },
      { property: "og:title", content: "Tyra’s Birthday — A Little Older. A Lot More Relaxed." },
      { property: "og:description", content: "November 28 · Calgary to Kananaskis Nordic Spa · A chill birthday overnight with our favourite degenerates. Accommodation handled. RSVP with Tally." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const timeline = [
  { time: "Around noon", title: "The great escape", icon: Car, note: "Coffee acquired. Aux privileges disputed. Leave Calgary and head west. Can’t make noon? We’ll be waiting for you at the spa." },
  { time: "~1:15 pm", title: "Enter robe mode", icon: Waves, note: "Arrive at Kananaskis Nordic Spa. Hot pool, cold plunge, sauna, repeat. Stay as long as you like — no rushing the relaxation." },
  { time: "Whenever we’re ready", title: "Check in. Switch off.", icon: Moon, note: "Accommodation is taken care of. Don’t book a thing. Drop your bags and settle into aggressively cozy mode." },
  { time: "Later that evening", title: "Dinner & birthday slander", icon: Check, note: "Good food, a low-key toast to Tyra, and a suspicious amount of laughing. Dinner spot still being decided." },
  { time: "Sunday, November 29", title: "A very slow goodbye", icon: Coffee, note: "Coffee. Pajamas. A gentle return to society. Check out and head home when it’s time." },
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
          <p className="eyebrow text-gold">A birthday escape to Kananaskis</p>
          <h1>Tyra’s birthday.<br /><em>A little older.<br className="mobile-break" /> A lot more relaxed.</em></h1>
          <p className="hero-description">One day in the mountains. One cozy overnight.<br />All our favourite degenerates.</p>
          <RsvpLink />
          <a href="#the-plan" className="hero-scroll"><ArrowDown size={15} aria-hidden="true" /> A little look at the plan</a>
        </div>
      </section>

      <div className="occasion-strip"><div className="page-width occasion-inner"><span>Saturday, November 28</span><span className="occasion-dot">·</span><span>Spa + sleepover</span><span className="occasion-location"><MapPin size={14} /> Kananaskis, Alberta</span></div></div>

      <section id="the-plan" className="intro-section page-width">
        <div><p className="eyebrow text-gold">Less party. More pool.</p><h2>Good company.<br /><em>Questionable decisions.</em></h2></div>
        <div className="intro-copy"><p>We’re taking Tyra to Kananaskis Nordic Spa to sweat out last weekend’s bad decisions. Consider this our attempt at being wellness people.</p><p>Leave Calgary around noon. Soak until we forget what day it is. Then dinner, a cozy overnight, and absolutely no alarm-clock energy. It’s not the same without you, you absolute menace.</p><span className="tiny-signoff">With love, your fellow degenerates</span></div>
      </section>

      <section className="spa-gallery" aria-label="Kananaskis Nordic Spa photographs">
        <figure className="gallery-main"><img src={mountain.url} alt="Steam rising from Kananaskis Nordic Spa pools beneath snowy Rocky Mountains" width={683} height={1024} loading="lazy" /><figcaption><span className="eyebrow">Our kind of happy place</span><span>Hot. Cold. Completely unbothered.</span></figcaption></figure>
        <figure className="gallery-side"><img src={winter.url} alt="Snow-covered trees beside the Nordic Spa cold plunge" width={683} height={1024} loading="lazy" /><figcaption>A little cold plunge builds character.<br />Apparently.</figcaption></figure>
      </section>

      <Journey />

      <section className="day-section page-width" id="the-day">
        <div className="day-heading"><p className="eyebrow text-gold">November 28 → 29</p><h2>The plan.<br /><em>Loose, obviously.</em></h2><p>There’s a direction.<br />There is not a military schedule.</p></div>
        <ol className="timeline">{timeline.map(({ time, title, note, icon: Icon }, index) => <li key={title}><div className="timeline-mark"><Icon size={18} strokeWidth={1.3} aria-hidden="true" /></div><div className="timeline-content"><span className="timeline-time">{time}</span><h3>{title}</h3><p>{note}</p></div><span className="timeline-number">0{index + 1}</span></li>)}</ol>
      </section>

      <section className="overnight-section"><img src={night.url} alt="Warmly lit sauna buildings and outdoor pools at Kananaskis Nordic Spa in the evening" width={1024} height={683} loading="lazy" /><div className="overnight-veil" /><div className="page-width overnight-content"><p className="eyebrow text-gold">Stay a little longer</p><h2>No rush.<br /><em>No drive home tonight.</em></h2><p>The accommodation is on us to sort out.<br />You just bring a swimsuit and your worst decisions.</p><div className="overnight-note"><Check size={16} /> Accommodation handled. Guests book nothing.</div></div></section>

      <section id="rsvp" className="rsvp-section page-width"><Mountain className="rsvp-mountain" size={40} strokeWidth={1} aria-hidden="true" /><p className="eyebrow text-gold">Save your spot in the chaos</p><h2>You coming<br /><em>or what?</em></h2><p>Tyra deserves this. Frankly, so do you.</p><RsvpLink>Count me in (or out)</RsvpLink><span className="rsvp-date">NOVEMBER 28 · AROUND NOON · ONE COZY OVERNIGHT</span></section>

      <footer className="site-footer page-width"><div className="footer-main"><a href="#" className="wordmark">fun is<br /><span>the way.</span></a><p>Made for Tyra.<br />And the people who make life fun.</p><a href="https://knordicspa.com/" target="_blank" rel="noreferrer" className="footer-spa">Kananaskis Nordic Spa <ArrowUpRight size={14} /></a></div><div className="photo-credits">Spa photos: Kiki Davies / Pursuing Pretty & Rebecca Hardcastle · Explore Kananaskis<br />A private birthday invitation. Not affiliated with Kananaskis Nordic Spa.</div></footer>
    </main>
  );
}

function Journey() {
  return <section className="journey-section" id="the-drive"><div className="page-width"><div className="journey-heading"><div><p className="eyebrow">The drive</p><h2>Go west.<br /><em>Exhale a little.</em></h2></div><p>Calgary to Kananaskis Nordic Spa.<br />Less city. More mountains.</p></div><div className="route-line"><div className="route-destination"><Mountain size={24} strokeWidth={1.2} /><h3>Kananaskis</h3><span>Arrive ~1:15 pm</span></div><div className="route-middle"><span>HWY 1 WEST → HWY 40 SOUTH</span><div className="route-track"><ArrowLeft size={22} /><Car size={22} /></div><span>~100 KM · ~1 HR 15 MIN</span></div><div className="route-origin"><MapPin size={24} strokeWidth={1.2} /><h3>Calgary</h3><span>Leave around noon</span></div></div><div className="drive-note"><p>Can’t make the noon send-off? No worries.<br /><strong>We’ll be waiting for you at the spa.</strong></p><span>Approximate drive from central Calgary.<br />November roads may add a little time.</span></div><div className="map-frame"><iframe title="Map from Calgary west to Kananaskis Nordic Spa" src="https://www.google.com/maps?saddr=Calgary,+AB&daddr=Kananaskis+Nordic+Spa,+Kananaskis+Village,+AB&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><Button asChild variant="link" className="directions-link"><a href="https://www.google.com/maps/dir/?api=1&origin=Calgary,+AB&destination=Kananaskis+Nordic+Spa" target="_blank" rel="noreferrer">Open directions <ArrowUpRight /></a></Button></div></section>;
}
