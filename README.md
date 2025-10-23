# 🚀 AI Automation Website

A **modern, fully responsive single-page React.js website** showcasing **AI automation services** for multiple business sectors.  
The website features **Tailwind CSS styling**, a **dark theme**, and an **AI chatbot powered by n8n**.  

---

## 🔖 Table of Contents
- [✨ Features](#-features)  
- [🛠 Technologies](#-technologies)  
- [📂 Folder Structure](#-folder-structure)  
- [🧩 Components](#-components)  
- [🎨 Customization](#-customization)  
- [⚡ Usage](#-usage)  
- [💻 Installation](#-installation)  
- [📄 License](#-license)  

---

## ✨ Features
- ✅ Fully responsive SPA with **mobile-first design**  
- ✅ Modern dark theme with **glassmorphism effect**  
- ✅ Smooth **scrolling navigation**  
- ✅ **Contact form** with validation & EmailJS integration  
- ✅ **AI Chatbot** embedded via n8n webhook  
- ✅ SEO-friendly meta tags  
- ✅ Accessible design using semantic HTML & ARIA attributes  

---

## 🛠 Technologies
- **React.js** (JSX & Hooks)  
- **Tailwind CSS** (via CDN)  
- **n8n Chat** for AI chatbot  
- **EmailJS** for sending contact form messages  
- **Lucide Icons** for modern UI icons  

---

## 📂 Folder Structure
src/
├─ components/
│ ├─ Header.jsx
│ ├─ Hero.jsx
│ ├─ Services.jsx
│ ├─ Sectors.jsx
│ ├─ ContactUs.jsx
│ ├─ Footer.jsx
│ └─ ChatButton.jsx
├─ App.jsx
├─ index.jsx
├─ chatOverrides.css
└─ index.css


---

## 🧩 Components
| Component | Description |
|-----------|-------------|
| **Header.jsx** | Fixed navigation bar with smooth scrolling and mobile hamburger menu |
| **Hero.jsx** | Landing section with bold headline, subheading, and CTA |
| **Services.jsx** | Grid cards showcasing AI automation services |
| **Sectors.jsx** | Responsive layout of business sectors with icons & descriptions |
| **ContactUs.jsx** | Dark-themed contact form with validation and EmailJS |
| **Footer.jsx** | Footer with social links and copyright |
| **ChatButton.jsx** | Floating AI chat button integrated via n8n webhook |

---

## 🎨 Customization

### Tailwind CSS
- Adjust colors, spacing, and fonts in `index.css` or directly with Tailwind classes.

### n8n Chat
- Fully customizable via **CSS variables**:
```css
Contact Form

Replace EmailJS service ID, template ID, and public key in ContactUs.jsx.
⚡ Usage

Navigation: Click menu items → smooth scroll to section

Contact Form: Fill out fields → submit → success message appears (6 sec)

AI Chat: Click bottom-right chat button → chat modal opens → start conversation

git clone https://github.com/yourusername/ai-automation-website.git
cd ai-automation-website
npm install
npm start
📄 License

MIT License © 2025 S&N AI Automations
Made with ❤️ using React.js, Tailwind CSS, and n8n Chat
