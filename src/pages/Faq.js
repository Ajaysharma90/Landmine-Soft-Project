import React, { useState } from 'react';
import { FAQS } from '../data';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="page-icon">❓</div>
          <div className="pill pill-purple" style={{ margin: '0 auto 14px' }}><span className="pill-dot" />FAQ</div>
          <h1 className="display-lg" style={{ marginBottom: 14 }}>Frequently Asked <span className="text-grad">Questions</span></h1>
          <p className="lead" style={{ maxWidth: 480, margin: '0 auto' }}>Quick answers. Can't find what you need? Just reach out.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 740 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{faq.question}</span>
                  <span className="faq-chevron">▼</span>
                </button>
                <div className="faq-answer"><p>{faq.answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
