import React, { useState } from 'react';
import { NAV_LINKS } from '../data';

// Navbar — fixed top, glassmorphism, responsive with mobile menu
function Navbar({ page, go }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    go(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          {/* Logo */}
          <div className="logo" onClick={() => handleNav('home')}>
            <div className="logo-mark">L</div>
            <span className="logo-name">Landmine<span>Soft</span></span>
          </div>

          {/* Desktop nav links */}
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  className={page === link.id ? 'active' : ''}
                  onClick={() => handleNav(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA buttons */}
          <div className="nav-actions">
            <button className="btn btn-ghost btn-sm" onClick={() => handleNav('login')}>Log in</button>
            <button className="btn btn-primary btn-sm" onClick={() => handleNav('register')}>Get Started</button>
          </div>

          {/* Hamburger (mobile) */}
          <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <button key={link.id} onClick={() => handleNav(link.id)}>{link.label}</button>
        ))}
        <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
          <button className="btn btn-ghost" onClick={() => handleNav('login')}>Log in</button>
          <button className="btn btn-primary" onClick={() => handleNav('register')}>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
