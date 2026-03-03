import React from 'react';
import Marquee from '../components/Marquee';
import { SERVICES, PROJECTS, TESTIMONIALS } from '../data';

function Home({ go }) {
  return (
    <div>
      {/* ── BACKGROUND BLOBS ── */}
      <div className="blob-wrap">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* ══════════ HERO ══════════ */}
      <section className="hero">
        <div className="container">
          <div style={{ maxWidth: 760, position: 'relative', zIndex: 2 }}>
            {/* Badge */}
            <div className="hero-badge">
              <span className="live-dot" />
              Available for new projects — Let's build something great
            </div>

            {/* Headline */}
            <h1 className="display-xl" style={{ marginBottom: 22 }}>
              We Engineer<br />
              <span className="text-grad">Digital Products</span><br />
              That Scale.
            </h1>

            <p className="lead" style={{ maxWidth: 560, marginBottom: 38 }}>
              Landmine Soft is a full-service software studio partnering with startups and enterprises
              to build world-class web, mobile, and cloud products.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 52 }}>
              <button className="btn btn-primary btn-lg" onClick={() => go('contact')}>Start a Project →</button>
              <button className="btn btn-ghost btn-lg"   onClick={() => go('services')}>Our Services</button>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {[['150+', 'Projects'], ['50+', 'Clients'], ['8+', 'Years'], ['99%', 'Retention']].map(([num, label]) => (
                <div key={label} className="hero-stat">
                  <div className="hero-stat-num"><span className="text-grad">{num}</span></div>
                  <div className="hero-stat-lbl">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating UI cards */}
        <div className="hero-float">
          <div style={{ width: 280, height: 280, borderRadius: '50%', background: 'rgba(124,58,237,.07)', border: '1px solid rgba(124,58,237,.14)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7rem' }}>
            💻
          </div>
          <div className="float-card float-card-1">
            <div className="float-card-title">✅ FinEdge Launched</div>
            <div className="float-card-sub">Just now · Production</div>
          </div>
          <div className="float-card float-card-2">
            <div className="float-card-title">🚀 98/100 Lighthouse</div>
            <div className="float-card-sub">Performance Score</div>
          </div>
        </div>
      </section>

      {/* ── TECH MARQUEE ── */}
      <Marquee />

      {/* ══════════ SERVICES OVERVIEW ══════════ */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="pill pill-purple"><span className="pill-dot" />What We Do</div>
            <h2 className="display-lg">Services Built for the <span className="text-grad">Modern Web</span></h2>
            <p className="lead mt-4">From idea to launch and beyond — we cover the full product development lifecycle.</p>
            <div className="divider-bar" />
          </div>

          <div className="grid-3 mt-8">
            {SERVICES.map((s, i) => (
              <div key={i} className="card service-card">
                <div className={`card-icon ci-${s.color}`}>{s.icon}</div>
                {s.badge && <span className="service-badge">{s.badge}</span>}
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((t) => <span key={t} className="service-tag">{t}</span>)}
                </div>
                <button className="learn-more-btn" onClick={() => go('services')}>Learn more →</button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="btn btn-ghost" onClick={() => go('services')}>View All Services →</button>
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section className="section" style={{ background: 'rgba(255,255,255,.35)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center' }}>
            <div>
              <div className="pill pill-purple"><span className="pill-dot" />Why Landmine Soft</div>
              <h2 className="display-lg">Built Different.<br /><span className="text-grad">Engineered Better.</span></h2>
              <p className="lead mt-4 mb-6">Senior-only teams, transparent process, zero technical debt — here's what makes clients return.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  ['01', 'Transparent Process', 'Weekly demos, daily standups, shared roadmap. You always know where things stand.'],
                  ['02', 'Senior-Only Teams', 'Senior engineers with 5–15 years of production experience on every project.'],
                  ['03', 'Design Thinking', 'Every decision starts with your users and is validated with real data.'],
                  ['04', 'Zero Technical Debt', 'Code reviewed, documented, and tested before it ships — every single time.'],
                ].map(([num, title, desc]) => (
                  <div key={num} className="why-row">
                    <div className="why-num">{num}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--txt)', marginBottom: 3 }}>{title}</div>
                      <div style={{ fontSize: '.88rem', color: 'var(--txt3)' }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div className="card">
                <h3 style={{ marginBottom: 22 }}>Our Expertise</h3>
                {[['Frontend Development', 95], ['Backend Engineering', 92], ['Mobile Development', 88], ['UI/UX Design', 90], ['Cloud & DevOps', 85]].map(([skill, val]) => (
                  <div key={skill} className="progress-wrap">
                    <div className="progress-row"><span>{skill}</span><span>{val}%</span></div>
                    <div className="progress-track"><div className="progress-fill" style={{ width: `${val}%` }} /></div>
                  </div>
                ))}
              </div>
              <div className="card" style={{ background: 'rgba(124,58,237,.05)', borderColor: 'rgba(124,58,237,.18)' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: 10 }}>🏆</div>
                <h3>Award-Winning Work</h3>
                <p>Recognised by Clutch, Good Firms, and CSS Design Awards as a Top Software Company.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROJECTS ══════════ */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="pill pill-orange"><span className="pill-dot" />Case Studies</div>
            <h2 className="display-lg">Work We're <span className="text-grad2">Proud Of</span></h2>
            <div className="divider-bar" />
          </div>
          <div className="grid-3 mt-8">
            {PROJECTS.map((p, i) => (
              <div key={i} className="card">
                <div className={`project-img bg-${p.bg}`}>{p.emoji}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="service-tags" style={{ marginTop: 12 }}>
                  {p.tags.map((t) => <span key={t} className="service-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="section" style={{ background: 'rgba(255,255,255,.35)' }}>
        <div className="container">
          <div className="section-header center">
            <div className="pill pill-teal"><span className="pill-dot" />Testimonials</div>
            <h2 className="display-lg">What Our <span className="text-grad3">Clients Say</span></h2>
            <div className="divider-bar" />
          </div>
          <div className="grid-3 mt-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-stars">{t.stars}</div>
                <p className="testi-text">{t.text}</p>
                <div className="author-row">
                  <div className={`avatar av-${t.avatarColor}`}>{t.initials}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div className="pill pill-purple" style={{ margin: '0 auto 18px' }}><span className="pill-dot" />Ready to Build?</div>
            <h2 className="display-lg" style={{ marginBottom: 14 }}>Your Next Big Product<br /><span className="text-grad">Starts Here.</span></h2>
            <p className="lead" style={{ maxWidth: 520, margin: '0 auto 32px' }}>
              Book a free 30-min discovery call. No pitches, no fluff — just an honest chat about your goals.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => go('contact')}>Book a Free Call →</button>
              <button className="btn btn-ghost btn-lg"   onClick={() => go('about')}>About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
