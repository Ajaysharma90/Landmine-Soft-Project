import React from 'react';
import { TEAM, CORE_VALUES } from '../data';

function About({ go }) {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-icon">🏢</div>
          <div className="pill pill-purple" style={{ margin: '0 auto 14px' }}><span className="pill-dot" />About Us</div>
          <h1 className="display-lg" style={{ marginBottom: 14 }}>We're <span className="text-grad">Landmine Soft</span></h1>
          <p className="lead" style={{ maxWidth: 560, margin: '0 auto' }}>
            A software engineering studio on a mission to build products that define industries.
            Founded in 2016, trusted by 50+ companies worldwide.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            <div className="card" style={{ background: 'rgba(124,58,237,.04)', borderColor: 'rgba(124,58,237,.18)' }}>
              <div style={{ fontSize: '2rem', marginBottom: 14 }}>🎯</div>
              <h2 className="display-md" style={{ marginBottom: 10 }}>Our Mission</h2>
              <p className="lead" style={{ fontSize: '1rem' }}>
                Empower businesses with engineering excellence — delivering software that is fast, reliable, secure, and genuinely delightful to use.
              </p>
              <p className="body-text mt-4">We believe great software changes lives. Every line of code carries that responsibility.</p>
            </div>
            <div className="card" style={{ background: 'rgba(249,115,22,.04)', borderColor: 'rgba(249,115,22,.18)' }}>
              <div style={{ fontSize: '2rem', marginBottom: 14 }}>🔭</div>
              <h2 className="display-md" style={{ marginBottom: 10 }}>Our Vision</h2>
              <p className="lead" style={{ fontSize: '1rem' }}>
                To be the most trusted engineering partner for ambitious companies building the next generation of digital products.
              </p>
              <p className="body-text mt-4">Every great idea deserves world-class engineering. That's the future we're building toward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="section-sm" style={{ background: 'rgba(255,255,255,.4)' }}>
        <div className="container">
          <div className="section-header center">
            <div className="pill pill-orange"><span className="pill-dot" />The Problem We Solve</div>
            <h2 className="display-lg">Why Companies Choose <span className="text-grad2">External Partners</span></h2>
            <div className="divider-bar" />
          </div>
          <div className="grid-3 mt-8">
            {[
              ['💸', 'Hiring is Expensive', 'Building an in-house team takes 6–12 months and $500K+. We give you a senior team from day one, at a fraction of the cost.'],
              ['⚡', 'Speed to Market', 'Every week of delay is revenue lost. Our battle-tested processes compress timelines without compromising quality.'],
              ['🔄', 'Scaling Flexibility', 'Your team scales with your needs. Ramp up for a sprint, scale down post-launch. You\'re always in control.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="card">
                <div style={{ fontSize: '2rem', marginBottom: 16 }}>{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="pill pill-purple"><span className="pill-dot" />Core Values</div>
            <h2 className="display-lg">What We <span className="text-grad">Stand For</span></h2>
            <div className="divider-bar" />
          </div>
          <div className="grid-3 mt-8">
            {CORE_VALUES.map((v, i) => (
              <div key={i} className="card value-card">
                <div className="value-emoji">{v.emoji}</div>
                <h4>{v.title}</h4>
                <p style={{ fontSize: '.88rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-sm" style={{ background: 'rgba(255,255,255,.4)' }}>
        <div className="container">
          <div className="section-header center">
            <div className="pill pill-teal"><span className="pill-dot" />The Team</div>
            <h2 className="display-lg">People Behind the <span className="text-grad3">Magic</span></h2>
            <div className="divider-bar" />
          </div>
          <div className="grid-4 mt-8">
            {TEAM.map((member, i) => (
              <div key={i} className="card team-card">
                <div className={`team-avatar av-${member.avatarColor}`}>{member.initials}</div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <div className="team-bio">{member.bio}</div>
                <div className="team-socials">
                  {['🐦', '💼', '🐱'].map((s, j) => <a key={j} href="#">{s}</a>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2 className="display-lg" style={{ marginBottom: 14 }}>Want to Join Our <span className="text-grad">Story?</span></h2>
            <p className="lead" style={{ maxWidth: 480, margin: '0 auto 28px' }}>We're always looking for talented engineers, designers, and strategists.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => go('careers')}>View Open Roles</button>
              <button className="btn btn-ghost btn-lg"   onClick={() => go('contact')}>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
