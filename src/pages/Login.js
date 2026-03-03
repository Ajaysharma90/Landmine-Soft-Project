import React, { useState } from 'react';
import Toast from '../components/Toast';
import { validate } from '../utils/validate';

function Login({ go }) {
  const [form, setForm]     = useState({ email: '', password: '' });
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
      { email: { req: true, email: true }, password: { req: true, min: 6 } },
      form
    );
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setToast(true); }, 900);
  };

  return (
    <div className="auth-page">
      {toast && <Toast message="Welcome back! Logged in successfully." onDone={() => setToast(false)} />}

      <div className="auth-card">
        {/* Logo */}
        <div className="logo" style={{ marginBottom: 24 }}>
          <div className="logo-mark">L</div>
          <span className="logo-name">Landmine<span>Soft</span></span>
        </div>

        <h2>Welcome back</h2>
        <p className="auth-subtitle">Sign in to continue to your account.</p>

        <div className="auth-form">
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
              <input name="password" value={form.password} onChange={handleChange} className={`form-input ${errors.password ? 'error' : ''}`} placeholder="Your password" type={showPass ? 'text' : 'password'} />
              <button className="password-toggle" onClick={() => setShowPass((s) => !s)}>{showPass ? '🙈' : '👁️'}</button>
            </div>
            {errors.password && <span className="form-error">{errors.password}</span>}
          </div>

          <div className="forgot-link">
            <button>Forgot password?</button>
          </div>

          <button className="btn btn-primary full-width" style={{ padding: '14px' }} onClick={handleSubmit} disabled={loading}>
            {loading ? '⏳ Signing in...' : 'Sign In →'}
          </button>

          <div className="divider-line">or continue with</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <button className="btn btn-ghost" style={{ justifyContent: 'center', padding: '11px' }}>🐱 GitHub</button>
            <button className="btn btn-ghost" style={{ justifyContent: 'center', padding: '11px' }}>🔷 Google</button>
          </div>
        </div>

        <div className="auth-footer">
          Don't have an account? <button onClick={() => go('register')}>Create one free →</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
