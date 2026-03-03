import React, { useState } from 'react';
import Toast from '../components/Toast';
import { validate, passwordStrength, STRENGTH_LABELS, STRENGTH_COLORS } from '../utils/validate';

function Register({ go }) {
  const [form, setForm]     = useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [toast, setToast]       = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((err) => ({ ...err, [e.target.name]: '' }));
  };

  const handleSubmit = () => {
    const errs = validate(
      {
        name:     { req: true, min: 2 },
        email:    { req: true, email: true },
        password: { req: true, min: 8 },
        confirm:  { req: true, match: 'password' },
      },
      form
    );
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setToast(true); }, 1100);
  };

  const strength = passwordStrength(form.password);

  return (
    <div className="auth-page">
      {toast && <Toast message="Account created! Check your email to verify." onDone={() => setToast(false)} />}

      <div className="auth-card" style={{ maxWidth: 500 }}>
        {/* Logo */}
        <div className="logo" style={{ marginBottom: 24 }}>
          <div className="logo-mark">L</div>
          <span className="logo-name">Landmine<span>Soft</span></span>
        </div>

        <h2>Create an account</h2>
        <p className="auth-subtitle">Start your 14-day free trial. No credit card needed.</p>

        <div className="auth-form">
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">Full Name <span className="req">*</span></label>
            <input name="name" value={form.name} onChange={handleChange} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Your full name" />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email <span className="req">*</span></label>
            <input name="email" value={form.email} onChange={handleChange} className={`form-input ${errors.email ? 'error' : ''}`} placeholder="you@example.com" type="email" />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password <span className="req">*</span></label>
            <div className="password-wrap">
              <input name="password" value={form.password} onChange={handleChange} className={`form-input ${errors.password ? 'error' : ''}`} placeholder="Min 8 characters" type={showPass ? 'text' : 'password'} />
              <button className="password-toggle" onClick={() => setShowPass((s) => !s)}>{showPass ? '🙈' : '👁️'}</button>
            </div>

            {/* Password strength meter */}
            {form.password && (
              <div style={{ marginTop: 6 }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} style={{ flex: 1, height: 4, borderRadius: 99, background: n <= strength ? STRENGTH_COLORS[strength] : 'rgba(124,58,237,.1)', transition: 'background .3s' }} />
                  ))}
                </div>
                <span style={{ fontSize: '.76rem', color: STRENGTH_COLORS[strength], fontWeight: 700 }}>{STRENGTH_LABELS[strength]}</span>
              </div>
            )}
            {errors.password && <span className="form-error">{errors.password}</span>}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label className="form-label">Confirm Password <span className="req">*</span></label>
            <input name="confirm" value={form.confirm} onChange={handleChange} className={`form-input ${errors.confirm ? 'error' : ''}`} placeholder="Re-enter password" type="password" />
            {form.confirm && form.confirm === form.password && (
              <span style={{ fontSize: '.77rem', color: '#22c55e', fontWeight: 700 }}>✓ Passwords match</span>
            )}
            {errors.confirm && <span className="form-error">{errors.confirm}</span>}
          </div>

          <button className="btn btn-primary full-width" style={{ padding: '14px' }} onClick={handleSubmit} disabled={loading}>
            {loading ? '⏳ Creating...' : 'Create Account →'}
          </button>
        </div>

        <div className="auth-footer">
          Already have an account? <button onClick={() => go('login')}>Sign in →</button>
        </div>
        <div className="auth-footer" style={{ fontSize: '.76rem', marginTop: 6, color: 'var(--txt3)' }}>
          By signing up you agree to our{' '}
          <button onClick={() => go('terms')}>Terms</button> &{' '}
          <button onClick={() => go('privacy')}>Privacy Policy</button>.
        </div>
      </div>
    </div>
  );
}

export default Register;
