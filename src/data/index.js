// ─────────────────────────────────────────────
//  LANDMINE SOFT — Centralised Site Data
// ─────────────────────────────────────────────

export const NAV_LINKS = [
  { id: 'home',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'careers',  label: 'Careers' },
  { id: 'contact',  label: 'Contact' },
];

export const SERVICES = [
  {
    icon: '🌐', color: 'purple',
    title: 'Web Development',
    desc: 'Full-stack apps built for scale. React, Next.js, Node.js — production-grade from day one.',
    tags: ['React', 'Next.js', 'Node.js'],
    badge: 'Popular',
  },
  {
    icon: '📱', color: 'orange',
    title: 'Mobile Development',
    desc: 'Cross-platform iOS & Android apps that feel native. Fast, smooth, and genuinely user-loved.',
    tags: ['React Native', 'Flutter'],
    badge: null,
  },
  {
    icon: '🎨', color: 'pink',
    title: 'UI/UX Design',
    desc: 'Research-driven design that converts. We build interfaces people genuinely enjoy using.',
    tags: ['Figma', 'Design Systems'],
    badge: null,
  },
  {
    icon: '⚙️', color: 'teal',
    title: 'Backend & APIs',
    desc: 'Bulletproof APIs and microservices. REST, GraphQL, real-time — we handle all of it.',
    tags: ['Node.js', 'Python', 'AWS'],
    badge: null,
  },
  {
    icon: '☁️', color: 'blue',
    title: 'Cloud & DevOps',
    desc: 'CI/CD, containers, infrastructure as code. We keep your stack running 24/7.',
    tags: ['AWS', 'Docker', 'K8s'],
    badge: null,
  },
  {
    icon: '🛡️', color: 'yellow',
    title: 'Cybersecurity',
    desc: 'Pen testing, OWASP audits, and compliance to keep your product and users safe.',
    tags: ['Security', 'OWASP'],
    badge: 'New',
  },
];

export const TECHNOLOGIES = [
  { icon: '⚛️', name: 'React' },
  { icon: '▲',  name: 'Next.js' },
  { icon: '📦', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🐳', name: 'Docker' },
  { icon: '☸',  name: 'Kubernetes' },
  { icon: '🔥', name: 'Firebase' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '☁️', name: 'AWS' },
  { icon: '📱', name: 'React Native' },
  { icon: '🐦', name: 'Flutter' },
  { icon: '🎨', name: 'Figma' },
  { icon: '⚡', name: 'TypeScript' },
  { icon: '🌊', name: 'DigitalOcean' },
  { icon: '🦀', name: 'Rust' },
];

export const PROJECTS = [
  {
    emoji: '🏦', bg: 'purple',
    title: 'FinEdge Dashboard',
    desc: 'Real-time financial analytics platform — 2M+ daily transactions, sub-100ms latency.',
    tags: ['React', 'D3.js', 'AWS'],
  },
  {
    emoji: '🛒', bg: 'orange',
    title: 'ShopFlow Commerce',
    desc: 'Headless e-commerce serving 50+ countries with a dynamic pricing engine and instant checkout.',
    tags: ['Next.js', 'Stripe', 'Redis'],
  },
  {
    emoji: '🏥', bg: 'teal',
    title: 'MediSync Health',
    desc: 'HIPAA-compliant telemedicine connecting 10,000+ patients with licensed providers daily.',
    tags: ['React Native', 'Node.js', 'GCP'],
  },
];

export const TESTIMONIALS = [
  {
    stars: '★★★★★',
    text: 'Landmine Soft transformed our outdated system into a blazing-fast platform. Truly world-class professionals.',
    name: 'Sarah Mitchell', role: 'CTO, NovaTech Inc.', initials: 'SM', avatarColor: 'purple',
  },
  {
    stars: '★★★★★',
    text: 'The UI/UX team reimagined our product entirely. User engagement went up 340% in the first month post-launch.',
    name: 'Arjun Kapoor', role: 'Founder, ScaleUp SaaS', initials: 'AK', avatarColor: 'orange',
  },
  {
    stars: '★★★★★',
    text: 'Flawless mobile app. Security, performance, and design — all top-notch. Our patients and doctors both love it.',
    name: 'Dr. Emily Rhodes', role: 'CEO, MediConnect', initials: 'ER', avatarColor: 'teal',
  },
];

export const TEAM = [
  {
    initials: 'RK', avatarColor: 'purple',
    name: 'Rohan Kumar', role: 'CEO & Co-Founder',
    bio: 'Ex-Google, 12+ years building scalable systems. Passionate about impactful technology and great culture.',
  },
  {
    initials: 'PD', avatarColor: 'orange',
    name: 'Priya Desai', role: 'CTO & Co-Founder',
    bio: 'Full-stack architect for Fortune 500s. Obsessed with clean code, elegant systems, and shipping fast.',
  },
  {
    initials: 'AC', avatarColor: 'teal',
    name: 'Alex Chen', role: 'Head of Design',
    bio: 'Award-winning UX designer from IDF. Creates experiences people genuinely want to use again.',
  },
  {
    initials: 'NS', avatarColor: 'purple',
    name: 'Neha Sharma', role: 'Lead Engineer',
    bio: 'Open-source contributor, React ecosystem expert. 8 years building production-grade applications.',
  },
];

export const CORE_VALUES = [
  { emoji: '🎯', title: 'Precision First',    desc: 'We sweat every detail — from architecture decisions to pixel alignment. Quality is non-negotiable.' },
  { emoji: '🚀', title: 'Ship Fast',          desc: 'Agile at core. We move with urgency without sacrificing the quality our clients deserve.' },
  { emoji: '🤝', title: 'Radical Honesty',    desc: "No fluff. We tell you what you need to hear, not what you want to hear. Trust is built on truth." },
  { emoji: '🌱', title: 'Always Growing',     desc: "The tech landscape never stops evolving, and neither do we. Every team member is a lifelong learner." },
  { emoji: '💡', title: 'Innovation Driven',  desc: "We challenge assumptions and look for smarter solutions. If there's a better way, we'll find it." },
  { emoji: '♾️', title: 'Client for Life',    desc: "We measure success by your success. Long after launch, we're still in your corner." },
];

export const JOB_OPENINGS = [
  { title: 'Senior React Developer',      dept: 'Engineering',    type: 'Full-Time',  mode: 'Remote', exp: '4+ yrs' },
  { title: 'UI/UX Designer',              dept: 'Design',         type: 'Full-Time',  mode: 'Hybrid', exp: '3+ yrs' },
  { title: 'Backend Engineer (Node.js)',  dept: 'Engineering',    type: 'Full-Time',  mode: 'Remote', exp: '3+ yrs' },
  { title: 'DevOps / Cloud Engineer',     dept: 'Infrastructure', type: 'Full-Time',  mode: 'Remote', exp: '4+ yrs' },
  { title: 'Mobile Dev (RN/Flutter)',     dept: 'Engineering',    type: 'Full-Time',  mode: 'Hybrid', exp: '3+ yrs' },
  { title: 'Frontend Dev Intern',         dept: 'Engineering',    type: 'Internship', mode: 'Remote', exp: '0–1 yr' },
];

export const FAQS = [
  {
    question: 'How long does a typical project take?',
    answer: 'MVPs usually take 6–12 weeks. Enterprise platforms can run 4–8 months. We provide a detailed timeline after the discovery phase.',
  },
  {
    question: 'What is your development methodology?',
    answer: "Agile/Scrum with 2-week sprints, weekly demos, shared Jira board, and a dedicated Slack channel. You're always in the loop.",
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Yes — all projects include a 3-month post-launch window, plus flexible retainer plans for ongoing development.',
  },
  {
    question: 'Who owns the intellectual property?',
    answer: 'You do. All code, designs, and assets are 100% yours. We sign a comprehensive NDA and IP agreement before starting.',
  },
  {
    question: 'What tech stacks do you specialise in?',
    answer: "Core stack: React/Next.js, Node.js/Python, AWS/GCP. We're also fluent in React Native, Flutter, and many others.",
  },
  {
    question: 'How is pricing structured?',
    answer: "Fixed-scope, time-and-materials, or monthly retainer. After a free discovery call we'll recommend the best model for you.",
  },
];

export const BLOG_POSTS = [
  { emoji: '⚛️', bg: 'purple', category: 'Engineering', title: 'React Server Components in 2025: What You Need to Know',            date: 'Feb 18, 2025', readTime: '8 min' },
  { emoji: '🤖', bg: 'orange', category: 'AI & Tech',   title: 'Integrating LLMs into Production Apps Without Going Insane',         date: 'Feb 10, 2025', readTime: '12 min' },
  { emoji: '🎨', bg: 'teal',   category: 'Design',      title: 'Why 90% of SaaS Dashboards Fail Their Users (and How to Fix Yours)', date: 'Jan 28, 2025', readTime: '6 min' },
  { emoji: '🔒', bg: 'purple', category: 'Security',    title: 'API Security in 2025: The 10 Vulnerabilities That Will Haunt You',   date: 'Jan 15, 2025', readTime: '10 min' },
  { emoji: '🚀', bg: 'orange', category: 'Startup',     title: 'From MVP to Product-Market Fit: Lessons from 50 Client Launches',    date: 'Jan 5, 2025',  readTime: '15 min' },
  { emoji: '☁️', bg: 'teal',   category: 'DevOps',      title: 'Kubernetes Cost Optimisation: How We Cut Cloud Bills by 60%',        date: 'Dec 20, 2024', readTime: '9 min' },
];
