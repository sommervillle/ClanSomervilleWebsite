import { Link } from 'react-router-dom'
import historyHeroImg from '../assets/history-hero.jpg'
import './Home.css'

/* ── Inline SVGs ─────────────────────────────────────────────── */
function ChevronDown() {
  return (
    <svg
      className="hero__chevron"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ── Data ────────────────────────────────────────────────────── */
const membershipTiers = [
  {
    tier:  'By Blood',
    name:  'Somerville by Blood',
    price: '£20 / year',
    benefits: [
      'Full genealogical record access',
      'Clan newsletter and digital archive',
      'Certificate of lineage recognition',
    ],
  },
  {
    tier:  'By Name',
    name:  'Somerville by Name',
    price: '£20 / year',
    benefits: [
      'Name-bearer community membership',
      'Clan newsletter and digital archive',
      'Voting rights in clan matters',
    ],
  },
  {
    tier:  'Sept Member',
    name:  'Sept Member',
    price: '£15 / year',
    benefits: [
      'Access for recognised sept surnames',
      'Clan newsletter subscription',
      'Community forum access',
    ],
  },
  {
    tier:  'Friend',
    name:  'Friend of the Clan',
    price: '£10 / year',
    benefits: [
      'Support the clan and the petition',
      'Clan newsletter subscription',
      'Access to public clan events',
    ],
  },
]

/* ── Component ───────────────────────────────────────────────── */
export default function Home() {
  function scrollDown() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <main>

      {/* ──────────────────────────────────────────────────────────
          1. HERO
      ────────────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">
        <div className="hero__overlay" aria-hidden="true" />

        <div className="hero__content">
          <span className="hero__eyebrow">Est. 1066 · Scotland</span>

          <h1 className="hero__title">Clan Somerville</h1>

          <p className="hero__subtitle">
            Lords of Scotland since the Norman Conquest
          </p>

          <p className="hero__body">
            David Somerville, Chief of the Name and Arms of Somerville, welcomes
            you to the official home of Clan Somerville — guardians of a lineage
            stretching from Normandy to the Scottish throne.
          </p>

          <div className="hero__buttons">
            <Link to="/history" className="btn btn--outline">
              Explore Our History
            </Link>
            <Link to="/join" className="btn btn--gold">
              Join the Clan
            </Link>
          </div>
        </div>

        <button className="hero__scroll" onClick={scrollDown} aria-label="Scroll down">
          <span>Find Out More</span>
          <ChevronDown />
        </button>
      </section>

      {/* ──────────────────────────────────────────────────────────
          2. MISSION STATEMENT BAND
      ────────────────────────────────────────────────────────── */}
      <section className="mission" aria-label="Mission statement">
        <div className="mission__rule" aria-hidden="true" />
        <p className="mission__quote">
          An ancient name. A living clan. A lineage confirmed.
        </p>
        <div className="mission__rule" aria-hidden="true" />
      </section>

      {/* ──────────────────────────────────────────────────────────
          3. HISTORY TEASER
      ────────────────────────────────────────────────────────── */}
      <section className="history-teaser" aria-label="History">
        <div className="history-teaser__text">
          <h2 className="history-teaser__heading">
            Nine Centuries of Somerville
          </h2>
          <p className="history-teaser__body">
            From Gaulter de Somerville who crossed with William the Conqueror
            in 1066, to the Lords of Carnwath whose castle dominated the Scottish
            Lowlands for four hundred years — the Somerville story is one of
            noble service, dynastic marriage, and an unbroken line that survives
            to this day.
          </p>
          <Link to="/history" className="history-teaser__cta">
            Explore the History →
          </Link>
        </div>
        <div
          className="history-teaser__image"
          style={{ backgroundImage: `url(${historyHeroImg})` }}
          aria-hidden="true"
        />
      </section>

      {/* ──────────────────────────────────────────────────────────
          4. THREE PILLARS
      ────────────────────────────────────────────────────────── */}
      <section className="pillars" aria-label="The three pillars of Clan Somerville">
        <div className="pillars__inner">
          <div className="pillars__grid">

            <article className="pillar">
              <span className="pillar__label">The Lineage</span>
              <h3 className="pillar__heading">A Line Proven and Unbroken</h3>
              <p className="pillar__body">
                Descended from Gaulter de Somerville who crossed with William
                the Conqueror in 1066. Our line is proven, documented, and
                unbroken.
              </p>
              <Link to="/history" className="pillar__cta">
                Discover the lineage →
              </Link>
            </article>

            <article className="pillar">
              <span className="pillar__label">The Petition</span>
              <h3 className="pillar__heading">Recognition by the Lord Lyon</h3>
              <p className="pillar__body">
                We are seeking formal recognition from the Lord Lyon King of
                Arms. Join us in supporting the confirmation of David Somerville
                as Chief.
              </p>
              <Link to="/petition" className="pillar__cta">
                Support the petition →
              </Link>
            </article>

            <article className="pillar">
              <span className="pillar__label">The Community</span>
              <h3 className="pillar__heading">Somervilles Across the World</h3>
              <p className="pillar__body">
                Somervilles across the world united under one roof. Find your
                place in the family, verify your lineage, and claim your
                heritage.
              </p>
              <Link to="/join" className="pillar__cta">
                Join the community →
              </Link>
            </article>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          5. PETITION PROGRESS
      ────────────────────────────────────────────────────────── */}
      <section className="petition" aria-label="Lord Lyon Petition">
        <h2 className="petition__heading">Support the Lord Lyon Petition</h2>
        <p className="petition__subtext">
          The formal confirmation of David Somerville as Chief of the Name and
          Arms requires a petition to the Lord Lyon King of Arms — the heraldic
          authority of Scotland. Your support brings us closer to recognition.
        </p>
        <div className="petition__progress-wrap">
          <div className="petition__track" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={30000} aria-label="Petition fundraising progress">
            <div className="petition__fill" style={{ width: '0%' }} />
          </div>
          <p className="petition__amount">£0 raised of £30,000 target</p>
        </div>
        <Link to="/petition" className="btn btn--gold">
          Contribute to the Petition
        </Link>
      </section>

      {/* ──────────────────────────────────────────────────────────
          6. JOIN / MEMBERSHIP
      ────────────────────────────────────────────────────────── */}
      <section className="join" aria-label="Membership tiers">
        <span className="section-eyebrow">Membership</span>
        <h2 className="section-heading">Claim Your Place in the Clan</h2>
        <p className="section-subtext">
          Whether you carry the Somerville name, share the blood, or simply wish
          to support a living piece of Scottish history — there is a place for
          you here.
        </p>

        <div className="join__cards">
          {membershipTiers.map((t) => (
            <article key={t.name} className="tier-card">
              <span className="tier-card__tier">{t.tier}</span>
              <h3 className="tier-card__name">{t.name}</h3>
              <p className="tier-card__price">{t.price}</p>
              <ul className="tier-card__benefits">
                {t.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link to="/join" className="tier-card__cta">
                Join Now
              </Link>
            </article>
          ))}
        </div>

        <Link to="/membership" className="join__more">
          View full membership details →
        </Link>
      </section>

    </main>
  )
}
