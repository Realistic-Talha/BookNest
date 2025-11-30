<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

<h1 align="center">📚 BookNest</h1>

<p align="center">
  <strong>A Premium Library Management Web Application</strong>
  <br />
  <em>Elegant Gold & Obsidian Design Theme</em>
</p>

<p align="center">
  <a href="https://realistic-talha.github.io/BookNest/">🌐 Live Demo</a>
  ·
  <a href="#-features">Features</a>
  ·
  <a href="#-screenshots">Screenshots</a>
  ·
  <a href="#-installation">Installation</a>
</p>

---

## ✨ Overview

**BookNest** is a modern, fully responsive library management application built with React and Vite. It features a stunning premium design with a Gold & Obsidian color theme, smooth animations, and an intuitive user experience across all devices.

### 🎨 Design Philosophy

- **Premium Gold & Obsidian Theme** - Elegant dark mode with gold accents
- **Light Mode Support** - Clean, warm light theme alternative
- **Glassmorphism Effects** - Modern frosted glass UI elements
- **Smooth Animations** - Subtle hover effects and transitions
- **Mobile-First Responsive** - Optimized for all screen sizes

---

## 🚀 Features

### 📖 Book Management
- ✅ Browse extensive book catalog
- ✅ Search books by title or author
- ✅ Filter by genre categories
- ✅ View detailed book information
- ✅ Check real-time availability status

### 🛒 Reservation System
- ✅ Add books to cart
- ✅ Manage cart items
- ✅ Complete checkout process
- ✅ View reservation history

### 👤 User Dashboard
- ✅ Personal reading statistics
- ✅ Current reservations tracking
- ✅ Borrowing history
- ✅ Account management

### 🎯 User Experience
- ✅ Dark/Light theme toggle
- ✅ Fully responsive design
- ✅ Touch-friendly mobile interface
- ✅ Smooth page transitions
- ✅ Intuitive navigation

---

## 📸 Screenshots

### Home Page - Dark Mode
<p align="center">
  <img src="./screenshots/home-dark.png" alt="Home Page Dark Mode" width="100%" />
</p>

### Home Page - Light Mode
<p align="center">
  <img src="./screenshots/home-light.png" alt="Home Page Light Mode" width="100%" />
</p>

### Book Details
<p align="center">
  <img src="./screenshots/book-details.png" alt="Book Details Page" width="100%" />
</p>

### Shopping Cart
<p align="center">
  <img src="./screenshots/cart.png" alt="Shopping Cart" width="100%" />
</p>

### User Dashboard
<p align="center">
  <img src="./screenshots/dashboard.png" alt="User Dashboard" width="100%" />
</p>

### Mobile Responsive View
<p align="center">
  <img src="./screenshots/mobile-home.png" alt="Mobile Home" width="30%" />
  &nbsp;&nbsp;
  <img src="./screenshots/mobile-menu.png" alt="Mobile Menu" width="30%" />
  &nbsp;&nbsp;
  <img src="./screenshots/mobile-details.png" alt="Mobile Details" width="30%" />
</p>

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Routing** | React Router v6 |
| **Styling** | CSS3 with Custom Properties |
| **Icons** | React Icons (Feather) |
| **State Management** | React Context API |
| **Deployment** | GitHub Pages |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Realistic-Talha/BookNest.git
   cd BookNest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

---

## 📁 Project Structure

```
BookNest/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx / Button.css
│   │   │   ├── Card.jsx / Card.css
│   │   │   ├── Input.jsx / Input.css
│   │   │   ├── Loading.jsx / Loading.css
│   │   │   └── Modal.jsx / Modal.css
│   │   ├── layout/
│   │   │   ├── Header.jsx / Header.css
│   │   │   └── Footer.jsx / Footer.css
│   │   └── BookCard.jsx / BookCard.css
│   ├── context/
│   │   ├── BookContext.jsx
│   │   ├── ReservationContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── UserContext.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── BookDetails.jsx / BookDetails.css
│   │   ├── Cart.jsx / Cart.css
│   │   ├── Checkout.jsx / Checkout.css
│   │   ├── Dashboard.jsx / Dashboard.css
│   │   └── Contact.jsx / Contact.css
│   ├── App.jsx / App.css
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Color Palette

### Dark Mode (Obsidian)
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Gold | `#C9A962` | Accents, CTAs |
| Background | `#08080A` | Main background |
| Surface | `#0F0F12` | Cards, elevated |
| Text Primary | `#FFFFFF` | Headings |
| Text Secondary | `#A0A0A5` | Body text |

### Light Mode (Cream)
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Gold | `#B8956E` | Accents, CTAs |
| Background | `#FDFBF7` | Main background |
| Surface | `#FFFFFF` | Cards, elevated |
| Text Primary | `#1A1A1A` | Headings |
| Text Secondary | `#5A5A5A` | Body text |

---

## 📱 Responsive Breakpoints

| Breakpoint | Device |
|------------|--------|
| `1024px` | Tablet Landscape |
| `768px` | Tablet Portrait |
| `480px` | Mobile |

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

Every push to the `main` branch triggers:
1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

**Live URL:** [https://realistic-talha.github.io/BookNest/](https://realistic-talha.github.io/BookNest/)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Talha**
- GitHub: [@Realistic-Talha](https://github.com/Realistic-Talha)

---

<p align="center">
  Made with ❤️ and ☕
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/Realistic-Talha/BookNest?style=social" alt="Stars" />
  <img src="https://img.shields.io/github/forks/Realistic-Talha/BookNest?style=social" alt="Forks" />
</p>
