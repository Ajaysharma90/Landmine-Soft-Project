import React from 'react';

function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">L</div>
              <span className="logo-name">Landmine<span>Soft</span></span>
            </div>
            <p>Engineering the future — one product at a time. We partner with ambitious companies to build technology that lasts.</p>
            <div className="footer-socials">
              {['𝕏', 'in', 'gh', 'yt'].map((s, i) => <a key={i} href="#">{s}</a>)}
            </div>
          </div>

          {/* Company links */}
          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              {[['about', 'About'], ['services', 'Services'], ['careers', 'Careers'], ['faq', 'FAQ'], ['blog', 'Blog']].map(([p, l]) => (
                <li key={p}><button onClick={() => go(p)}>{l}</button></li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul className="footer-links">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Backend & APIs', 'Cloud & DevOps'].map((s) => (
                <li key={s}><button onClick={() => go('services')}>{s}</button></li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="footer-col">
            <h5>Legal</h5>
            <ul className="footer-links">
              {[['privacy', 'Privacy Policy'], ['terms', 'Terms'], ['contact', 'Contact']].map(([p, l]) => (
                <li key={p}><button onClick={() => go(p)}>{l}</button></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Landmine Soft. All rights reserved.</span>
          <span style={{ color: 'var(--p1)', fontWeight: 600 }}>LMS-S3-01598</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
