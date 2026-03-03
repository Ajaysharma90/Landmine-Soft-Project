import React, { useState } from 'react';
import Toast from '../components/Toast';
import { validate } from '../utils/validate';

function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast]   = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((err) => ({ ...err, [e.target.name]: '' }));
  };

  const handleSubmit = () => {
    const errs = validate(
      { name: { req: true, min: 2 }, email: { req: true, email: true }, subject: { req: true }, message: { req: true, min: 20 } },
      form
    );
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setForm({ name: '', email: '', subject: '', message: '' });
      setToast(true);
    }, 1100);
  };

  return (
    <div>
      {toast && <Toast message="Message sent! We'll reply within 24 hours." onDone={() => setToast(false)} />}

      <div className="page-hero">
        <div className="container">
          <div className="page-icon">📬</div>
          <div className="pill pill-purple" style={{ margin: '0 auto 14px' }}><span className="pill-dot" />Contact Us</div>
          <h1 className="display-lg" style={{ marginBottom: 14 }}>Let's Start a <span className="text-grad">Conversation</span></h1>
          <p className="lead" style={{ maxWidth: 480, margin: '0 auto' }}>Have a project in mind? Drop us a message — we respond within 24 hours.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40, alignItems: 'start' }}>

            {/* Contact Info */}
            <div>
              <h2 className="display-md" style={{ marginBottom: 8 }}>Get in Touch</h2>
              <div className="divider-bar" />
              <p className="body-text mb-6">Globally distributed but always just one message away.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '📧', label: 'Email',   value: 'hello@landminesoft.com' },
                  { icon: '📞', label: 'Phone',   value: '+91 98765 43210' },
                  { icon: '📍', label: 'Address', value: '42 Tech Park, Sector 5\nGurugram, Haryana 122001' },
                  { icon: '🕐', label: 'Hours',   value: 'Mon–Fri, 9 AM – 7 PM IST' },
                ].map((item, i) => (
                  <div key={i} className="contact-info-card">
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <div className="contact-info-label">{item.label}</div>
                      <div className="contact-info-value" style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="map-placeholder mt-6">
                <div className="map-pin">📍</div>
                <div style={{ fontWeight: 700, color: 'var(--txt)' }}>Gurugram, India</div>
                <div style={{ fontSize: '.84rem' }}>42 Tech Park, Sector 5</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ background: 'var(--glass2)', padding: 36 }}>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.35rem', fontWeight: 800, marginBottom: 6 }}>Send a Message</h3>
              <p className="body-text" style={{ marginBottom: 24 }}>Fill in the details and we'll get back within 24 hours.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name <span className="req">*</span></label>
                    <input name="name" value={form.name} onChange={handleChange} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Arjun Sharma" />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email <span className="req">*</span></label>
                    <input name="email" value={form.email} onChange={handleChange} className={`form-input ${errors.email ? 'error' : ''}`} placeholder="you@company.com" />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject <span className="req">*</span></label>
                  <select name="subject" value={form.subject} onChange={handleChange} className={`form-select ${errors.subject ? 'error' : ''}`}>
                    <option value="">Select a topic...</option>
                    <option>Web Development Project</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
                    <option>Backend & API Development</option>
                    <option>General Inquiry</option>
                  </select>
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Message <span className="req">*</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange} className={`form-textarea ${errors.message ? 'error' : ''}`} placeholder="Tell us about your project, goals, and timeline..." />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button className="btn btn-primary full-width" style={{ padding: '14px', fontSize: '1rem' }} onClick={handleSubmit} disabled={loading}>
                  {loading ? '⏳ Sending...' : 'Send Message →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
