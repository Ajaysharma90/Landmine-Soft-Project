import React from 'react';

const sections = [
  { title: '1. Information We Collect',       content: 'We collect information you provide — name, email, company, and project details. We also automatically collect IP address, browser type, and usage data to improve our website.' },
  { title: '2. How We Use Your Information',  content: 'We use collected data to respond to enquiries, deliver services, send relevant updates (with consent), comply with legal requirements, and protect against fraudulent activity.' },
  { title: '3. Information Sharing',          content: 'We never sell or trade your personal information. We may share it with trusted service providers who assist in delivering our services, under strict confidentiality agreements.' },
  { title: '4. Data Security',               content: 'We implement appropriate technical and organisational safeguards. However, no internet transmission is 100% secure and we cannot guarantee absolute security.' },
  { title: '5. Your Rights',                 content: 'You have the right to access, correct, or delete your personal data. Contact us at privacy@landminesoft.com.' },
  { title: '6. Contact',                     content: 'Landmine Soft, 42 Tech Park, Sector 5, Gurugram, Haryana 122001. Email: privacy@landminesoft.com' },
];

function Privacy() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="page-icon">🔒</div>
          <h1 className="display-lg" style={{ marginBottom: 12 }}>Privacy <span className="text-grad">Policy</span></h1>
          <p className="lead" style={{ margin: '0 auto', maxWidth: 460 }}>Last updated January 1, 2025. We take your privacy seriously.</p>
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

export default Privacy;
