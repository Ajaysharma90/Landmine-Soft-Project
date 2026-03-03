# Landmine Soft — Company Website

**Assignment ID:** LMS-S3-01598  
**Internship:** Frontend Developer Internship — 1 Month  
**Tech Stack:** React.js · CSS3 · Glassmorphism UI

---

## 📋 Project Overview

A complete company website redesign for **Landmine Soft**, built as part of the Frontend Developer Internship assignment. The site reflects a real-world IT/Software company with professional branding, startup-level quality, and a modern glassmorphism design language.

**Design Philosophy:**  
Light, airy background with soft purple/amber/cyan blob accents, frosted-glass cards, smooth hover transitions, and a consistent purple + orange + teal colour palette.

---

## 📄 Pages Implemented

| Page | Route/State | Description |
|------|-------------|-------------|
| 🏠 Home | `home` | Hero, services overview, why us, projects, testimonials, CTA |
| 🏢 About | `about` | Mission, vision, problem statement, core values, team |
| ⚙️ Services | `services` | 6 service cards, 4-step process, full tech stack |
| 📬 Contact | `contact` | Contact form (validated), info cards, map placeholder |
| 🔐 Login | `login` | Email/password, show/hide toggle, OAuth buttons |
| 📝 Register | `register` | Full name, email, password with strength meter, confirm |
| 👥 Careers | `careers` | Culture, perks, job listings, apply modal with form |
| ❓ FAQ | `faq` | Animated accordion with 6 questions |
| ✍️ Blog | `blog` | Post grid (UI only) |
| 🔒 Privacy Policy | `privacy` | Full policy text |
| 📄 Terms & Conditions | `terms` | Full terms text |

---

## 🛠️ Tech Stack

- **React.js 18** — component-based SPA
- **CSS3** — custom properties, glassmorphism, animations
- **Google Fonts** — Plus Jakarta Sans + Syne
- **No external UI libraries** — all components hand-coded

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/landminesoft-website.git
cd landminesoft-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

---

## 📁 Folder Structure

```
landminesoft/
├── public/
│   └── index.html
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Toast.js
│   │   └── Marquee.js
│   ├── pages/             # One file per page
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Contact.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Careers.js
│   │   ├── Faq.js
│   │   ├── Blog.js
│   │   ├── Privacy.js
│   │   └── Terms.js
│   ├── data/
│   │   └── index.js       # All site content / dummy data
│   ├── utils/
│   │   └── validate.js    # Form validation utility
│   ├── styles/
│   │   └── global.css     # All styles (design system + components)
│   ├── App.js             # Router / page switcher
│   └── index.js           # Entry point
├── package.json
└── README.md
```

---

## ✨ Features

- ✅ Fully responsive — mobile, tablet, desktop
- ✅ Glassmorphism design with animated background blobs
- ✅ Working form validation with real-time error messages
- ✅ Password strength meter on register
- ✅ Toast notifications on form submission
- ✅ Animated tech marquee strip
- ✅ Careers apply modal
- ✅ FAQ accordion animation
- ✅ Mobile hamburger menu
- ✅ Smooth hover transitions on all interactive elements

---

## 📞 Contact (Dummy)

- **Email:** hello@landminesoft.com  
- **Phone:** +91 98765 43210  
- **Address:** 42 Tech Park, Sector 5, Gurugram, Haryana 122001

---

*Built for the Landmine Soft Frontend Internship — LMS-S3-01598*
