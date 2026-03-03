import React from 'react';
import { SERVICES, TECHNOLOGIES } from '../data';

function Services({ go }) {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="page-icon">⚙️</div>
          <div className="pill pill-purple" style={{ margin: '0 auto 14px' }}><span className="pill-dot" />Services</div>
          <h1 className="display-lg" style={{ marginBottom: 14 }}>End-to-End <span className="text-grad">Software Services</span></h1>
          <p className="lead" style={{ maxWidth: 540, margin: '0 auto' }}>From discovery to deployment and beyond — we cover the full product development lifecycle.</p>
        </div>
      </div>

      {/* Service Cards */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {SERVICES.map((s, i) => (
              <div key={i} className="card service-card">
                <div className={`card-icon ci-${s.color}`} style={{ width: 60, height: 60, fontSize: '1.7rem', marginBottom: 20 }}>{s.icon}</div>
                {s.badge && <span className="service-badge" style={{ marginBottom: 10, display: 'inline-block' }}>{s.badge}</span>}
                <h3 style={{ fontSize: '1.2rem', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ lineHeight: 1.75 }}>{s.desc}</p>
                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '18px 0' }} />
                <div className="service-tags" style={{ marginBottom: 16 }}>
                  {s.tags.map((t) => <span key={t} className="service-tag">{t}</span>)}
                </div>
                <button className="btn btn-outline btn-sm full-width" onClick={() => go('contact')}>Get a Quote →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-sm" style={{ background: 'rgba(255,255,255,.4)' }}>
        <div className="container">
          <div className="section-header center">
            <div className="pill pill-orange"><span className="pill-dot" />Our Process</div>
            <h2 className="display-lg">How We <span className="text-grad2">Work</span></h2>
            <div className="divider-bar" />
          </div>
          <div className="grid-4 mt-8">
            {[
              { step: '01', title: 'Discovery', icon: '🔍', desc: 'Deep-dive into your business, users, goals. No code until we understand your problem.' },
              { step: '02', title: 'Strategy',  icon: '🗺️', desc: 'Architecture, stack, timeline, milestones. A blueprint that eliminates surprises.' },
              { step: '03', title: 'Build',     icon: '⚡', desc: 'Agile sprints with weekly demos. You always have a working product to review.' },
              { step: '04', title: 'Launch',    icon: '🚀', desc: 'Smooth deployment, monitoring, and iterative improvements post-launch.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: 10 }}>{item.icon}</div>
                <div style={{ color: 'var(--p1)', fontWeight: 800, fontFamily: 'var(--display)', fontSize: '.8rem', marginBottom: 7, letterSpacing: '.06em' }}>{item.step}</div>
                <h3>{item.title}</h3>
                <p style={{ fontSize: '.86rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="pill pill-teal"><span className="pill-dot" />Technologies</div>
            <h2 className="display-lg">Our <span className="text-grad3">Tech Stack</span></h2>
            <div className="divider-bar" />
          </div>
          <div className="tech-grid mt-8">
            {TECHNOLOGIES.map((t, i) => (
              <div key={i} className="tech-badge"><span>{t.icon}</span>{t.name}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2 className="display-lg" style={{ marginBottom: 14 }}>Need a Custom <span className="text-grad">Solution?</span></h2>
            <p className="lead" style={{ maxWidth: 500, margin: '0 auto 28px' }}>Tell us about your project and we'll put together a tailored proposal within 48 hours.</p>
            <button className="btn btn-primary btn-lg" onClick={() => go('contact')}>Let's Talk →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
