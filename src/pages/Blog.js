import React from 'react';
import { BLOG_POSTS } from '../data';

function Blog() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="page-icon">✍️</div>
          <div className="pill pill-orange" style={{ margin: '0 auto 14px' }}><span className="pill-dot" />Blog</div>
          <h1 className="display-lg" style={{ marginBottom: 14 }}>Insights from the <span className="text-grad2">Trenches</span></h1>
          <p className="lead" style={{ maxWidth: 500, margin: '0 auto' }}>Deep dives on engineering, design, and product from the Landmine Soft team.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {BLOG_POSTS.map((post, i) => (
              <div key={i} className="card" style={{ cursor: 'pointer' }}>
                <div className={`project-img bg-${post.bg}`}>{post.emoji}</div>
                <span className="service-badge" style={{ marginBottom: 9, display: 'inline-block' }}>{post.category}</span>
                <h3 style={{ fontSize: '1rem', lineHeight: 1.45 }}>{post.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, fontSize: '.77rem', color: 'var(--txt3)' }}>
                  <span>{post.date}</span>
                  <span>{post.readTime} read</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
