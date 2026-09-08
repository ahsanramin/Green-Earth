# 🌴 Green Earth - Plant a Tree, Grow a Future

**Green Earth** is a modern, premium SaaS-level web application designed to make reforestation accessible to everyone. Built with React, Vite, and Tailwind CSS v4, it provides a seamless, responsive, and visually stunning user experience.

![Green Earth Banner](https://i.ibb.co.com/cSQdg7tf/mango-min.jpg)

---

## ✨ Features

### 🏠 Homepage - 15+ Premium SaaS Sections
- **Hero Section**: Gradient background, floating particles, and trust badges.
- **Featured Section**: Dynamic **Category Filtering** (via REST API), interactive plant grid with hover effects, and a live shopping cart with checkout modal.
- **About the Campaign**: Split layout with 3D image and impact highlights.
- **Our Global Impact**: Dark-themed statistics section with glassmorphism.
- **Top Experts**: Professional profiles with social media links.
- **How It Works**: Timeline/Step-by-step process.
- **Why Clients Trust Us**: Security, eco-certification, and review highlights.
- **Choose Your Plan**: Premium 3-tier pricing section.
- **Client Testimonials**: Star ratings and verified customer reviews.
- **Latest Tips & Articles**: Blog preview cards.
- **Meet the Admin**: Team showcase.
- **FAQ Section**: Interactive accordion.
- **CTA Section**: Call to action with gradient background.
- **Contact Section**: Functional contact form.
- **Plant a Tree Today**: Donation form.

### 📄 Additional Pages
- **About Page**: Story, Mission, and Vision sections.
- **Contact Page**: Address, phone, and a premium contact form.
- **Blog Page**: A grid of responsive article cards.

### 🎨 UI/UX Highlights
- **Premium Design**: Glassmorphism, gradient backgrounds, and smooth hover animations.
- **100% Responsive**: Optimized for mobile, tablet, and desktop.
- **Tailwind CSS v4**: Uses the latest `@theme` configuration.
- **Custom Favicon**: A green tree emoji 🌳.
- **Custom Scrollbar**: Styled to match the brand.
- **Advanced Animations**: Floating elements, pulse effects, and smooth transitions.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) 18.3
- **Build Tool**: [Vite](https://vitejs.dev/) 5.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.0
- **Routing**: [React Router](https://reactrouter.com/) 6.26
- **State Management**: React Context API (for Cart)
- **HTTP Client**: Native Fetch API
- **API Source**: [Programming Hero Open API](https://openapi.programming-hero.com/)

---

## 📂 Project Structure

```text
green-earth/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Blog.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md