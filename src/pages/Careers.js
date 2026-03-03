import React, { useState } from 'react';
import Toast from '../components/Toast';
import { JOB_OPENINGS } from '../data';
import { validate } from '../utils/validate';

function Careers() {
  const [applyFor, setApplyFor] = useState(null);
  const [form, setForm]     = useState({ name: '', email: '', portfolio: '', why: '' });
  const [errors, setErrors] = useState({});
  const [toast, setToast]   = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((err) => ({ ...err, [e.target.name]: '' }));
  };

  const handleSubmit = () => {
    const errs = validate(
      { name: { req: true }, email: { req: true, email: true }, why: { req: true, min: 30 } },
      form
    );
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setApplyFor(null);
    setForm({ name: '', email: '', portfolio: '', why: '' });
    setToast(true);
  };

  return (
    <div>
      {toast && <Toast message="Application submitted! We'll reach out within 5 business days." onDone={() => setToast(false)} />}

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-icon">👥</div>
          <div className="pill pill-purple" style={{ margin: '0 auto 14px' }}><span className="pill-dot" />Careers</div>
          <h1 className="display-lg" style={{ marginBottom: 14 }}>Build the Future <span className="text-grad">With Us</span></h1>
          <p className="lead" style={{ maxWidth: 520, margin: '0 auto' }}>
            Curious builders who love hard problems. Join us in engineering the products of tomorrow.
          </p>
        </div>
      </div>

      {/* Culture Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="pill pill-orange"><span className="pill-dot" />Life at Landmine Soft</div>
              <h2 className="display-lg" style={{ marginBottom: 14 }}>Why You'll <span className="text-grad2">Love It Here</span></h2>
              <p className="lead mb-6" style={{ fontSize: '1rem' }}>
                Remote-first, async-friendly, deeply invested in our people. No micromanagement — great work with great humans.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  ['🌍', 'Remote-First', 'Work from anywhere. Output over office hours.'],
                  ['📚', '₹50k Learning Budget', 'Per person, per year. Courses, books, conferences.'],
                  ['💰', 'Competitive Pay', 'We benchmark against top-tier companies and pay accordingly.'],
                  ['🏖️', 'Flexible PTO', 'Unlimited vacation. Recharge whenever you need to.'],
                  ['🏥', 'Full Health Coverage', 'Medical, dental, and vision for you and your family.'],
                ].map(([icon, title, desc]) => (
                  <div key={title} style={{ display: 'flex', gap: 13, alignItems: 'flex-start', padding: '13px 16px', borderRadius: 'var(--r)', background: 'var(--glass)', border: '1px solid var(--border)', backdropFilter: 'blur(12px)' }}>
                    <span style={{ fontSize: '1.25rem', marginTop: 1 }}>{icon}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--txt)', marginBottom: 2 }}>{title}</div>
                      <div style={{ fontSize: '.84rem', color: 'var(--txt3)' }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div className="card" style={{ background: 'rgba(124,58,237,.05)', borderColor: 'rgba(124,58,237,.18)' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: 10 }}>🌟</div>
                <h3>Culture in 4 Words</h3>
                <p className="text-grad" style={{ fontSize: '1.2rem', fontFamily: 'var(--display)', fontWeight: 800 }}>"Trust. Autonomy. Growth. Impact."</p>
              </div>
              <div className="grid-2" style={{ gap: 12 }}>
                {[['30+', 'Team Members'], ['12', 'Countries'], ['∞', 'Learning'], ['❤️', 'Culture']].map(([num, label]) => (
                  <div key={label} className="card" style={{ textAlign: 'center', padding: '18px 12px' }}>
                    <div style={{ fontFamily: 'var(--display)', fontSize: '1.7rem', fontWeight: 800, marginBottom: 3 }} className="text-grad">{num}</div>
                    <div style={{ fontSize: '.72rem', color: 'var(--txt3)', textTransform: 'uppercase', letterSpacing: '.07em', fontWeight: 600 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-sm" style={{ background: 'rgba(255,255,255,.4)' }}>
        <div className="container">
          <div className="section-header center">
            <div className="pill pill-teal"><span className="pill-dot" />Open Positions</div>
            <h2 className="display-lg">We're <span className="text-grad3">Hiring</span></h2>
            <div className="divider-bar" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 32 }}>
            {JOB_OPENINGS.map((job, i) => (
              <div key={i} className="job-card">
                <div>
                  <div className="job-title">{job.title}</div>
                  <div className="job-meta">
                    <span className="job-tag">{job.dept}</span>
                    <span className={`job-tag ${job.type === 'Full-Time' ? 'full' : 'remote'}`}>{job.type}</span>
                    <span className={`job-tag ${job.mode === 'Remote' ? 'remote' : ''}`}>{job.mode}</span>
                    <span className="job-tag">{job.exp}</span>
                  </div>
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => setApplyFor(job.title)}>Apply →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {applyFor && (
        <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) setApplyFor(null); }}>
          <div className="modal-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
              <div>
                <div style={{ fontSize: '.76rem', color: 'var(--p1)', fontWeight: 700, marginBottom: 3 }}>APPLYING FOR</div>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--txt)' }}>{applyFor}</h3>
              </div>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--txt3)', fontSize: '1.3rem' }} onClick={() => setApplyFor(null)}>✕</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="form-group">
                <label className="form-label">Full Name <span className="req">*</span></label>
                <input name="name" value={form.name} onChange={handleChange} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Your name" />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Email <span className="req">*</span></label>
                <input name="email" value={form.email} onChange={handleChange} className={`form-input ${errors.email ? 'error' : ''}`} placeholder="you@email.com" />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Portfolio / GitHub URL</label>
                <input name="portfolio" value={form.portfolio} onChange={handleChange} className="form-input" placeholder="https://github.com/..." />
              </div>
              <div className="form-group">
                <label className="form-label">Why Landmine Soft? <span className="req">*</span></label>
                <textarea name="why" value={form.why} onChange={handleChange} className={`form-textarea ${errors.why ? 'error' : ''}`} placeholder="Tell us what excites you about this role..." style={{ minHeight: 100 }} />
                {errors.why && <span className="form-error">{errors.why}</span>}
              </div>
              <button className="btn btn-primary full-width" style={{ padding: '13px' }} onClick={handleSubmit}>
                Submit Application →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;
