import React from 'react';
import { TECHNOLOGIES } from '../data';

// Infinite scrolling technology marquee strip
function Marquee() {
  // Duplicate items so the loop is seamless
  const items = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((tech, i) => (
          <span key={i} className="marquee-item">
            {tech.icon} {tech.name}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
