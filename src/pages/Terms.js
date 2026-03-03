import React from 'react';

const sections = [
  { title: '1. Acceptance of Terms',    content: "By accessing Landmine Soft's website and services you agree to these terms. If you disagree, please do not use our services." },
  { title: '2. Services',               content: 'Landmine Soft provides software development, design, and consulting. All engagements are subject to a separate written agreement between Landmine Soft and the client.' },
  { title: '3. Intellectual Property',  content: 'All IP produced for clients is assigned to the client upon full payment, unless otherwise agreed in writing. Our frameworks and tools remain our property.' },
  { title: '4. Limitation of Liability',content: 'We shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed amounts paid by you for services in question.' },
  { title: '5. Confidentiality',        content: 'We sign NDAs with all clients before work begins and maintain strict confidentiality of all project details and proprietary data shared with us.' },
  { title: '6. Governing Law',          content: 'These terms are governed by the laws of India. Disputes shall be subject to the courts in Gurugram, Haryana, India.' },
];

function Terms({ go }) {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="page-icon">📄</div>
          <h1 className="display-lg" style={{ marginBottom: 12 }}>Terms & <span className="text-grad">Conditions</span></h1>
          <p className="lead" style={{ margin: '0 auto', maxWidth: 480 }}>Last updated January 1, 2025. Please read carefully before using our services.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 740 }}>
          {sections.map((s, i) => (
            <div key={i} className="legal-section">
              <h3>{s.title}</h3>
              <p>{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Terms;
