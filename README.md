# 🌐 Portfolio — MERN + Vite Developer Portfolio

A modern full-stack **Developer Portfolio Website** built using **React + Vite** for the frontend and **Node.js + Express + MongoDB** for the backend.

The project showcases projects, thoughts/blog-style content, smooth animations, and a fully functional contact system powered by **SendGrid**.

Designed with a strong focus on:

* 🎨 Modern UI/UX
* ⚡ Smooth desktop experience
* 📩 Contact & email integration
* 🧠 Dynamic content management
* 🚀 Fast and optimized frontend architecture

---

# 🚀 Live Demo

🌐 Portfolio Live:
[Portfolio Website](https://nitish-sharma-portfolio.vercel.app/)

💻 GitHub Repository:
[Portfolio GitHub Repo](https://github.com/nikku1229/My_Portfolio)

---

# 📌 Features

## 🎨 Modern Portfolio UI

* Responsive desktop-focused design
* Smooth scrolling experience with Lenis
* GSAP-powered animations
* Clean transitions & interactive layouts
* Project showcase pages

---

## 📁 Dynamic Project Management

* Create, edit, update, and delete projects
* Dynamic project detail pages
* Backend-managed portfolio content

---

## 🧠 Thoughts / Blog System

* Add and manage thoughts/posts
* Dynamic rendering from backend APIs
* Content management support

---

## 📩 Contact System

* Functional contact form
* Email delivery using SendGrid
* Secure backend email handling
* Portfolio inquiry support

---

## 🔐 Protected Admin APIs

* Middleware-protected backend routes
* Custom verification key authentication
* CRUD operations for content management

---

## ⚡ Performance & UX

* Fast frontend with Vite
* Modular React architecture
* Context API for state management
* Optimized routing structure

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* React Router
* GSAP
* ThreeJS
* Lenis
* Axios

## Backend

* Node.js
* Express.js
* Mongoose
* SendGrid
* dotenv
* CORS

## Database

* MongoDB

---

# 📂 Repository Structure

```bash
Portfolio/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── service/
│   │   └── animations/
│   └── package.json
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── package.json
```

---

# ⚙️ Prerequisites

Before running the project:

* Node.js (LTS Recommended)
* npm
* MongoDB Database
* SendGrid Account/API Key

---

# 📥 Installation & Setup

## Clone Repository

```bash
git clone https://github.com/nikku1229/My_Portfolio.git
cd My_Portfolio
```

---

# 🔧 Install Dependencies

From the root directory:

```bash
npm install
npm install --prefix Frontend
npm install --prefix Backend
```

---

# 🌐 Environment Variables

## Backend (`Backend/.env`)

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
SECRET_VERIFY_KEY=your_custom_secret_key
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=verified_sender_email
```

---

## Frontend (`Frontend/.env`)

```env
VITE_BACKEND_URL=http://localhost:3000
```

---

# ▶️ Run Locally

## Option 1 — Run Full Project Together

```bash
npm run dev
```

This uses `concurrently` to start:

* Frontend Dev Server
* Backend Dev Server

---

## Option 2 — Run Separately

### Backend

```bash
npm run dev --prefix Backend
```

### Frontend

```bash
npm run dev --prefix Frontend
```

---

# 🔌 API Overview

Base URL:

```bash
http://localhost:3000/api
```

---

# 🌍 Public Routes

| Method | Endpoint   | Description           |
| ------ | ---------- | --------------------- |
| POST   | `/contact` | Send Contact Form     |
| GET    | `/health`  | Health Check Endpoint |

---

# 🔐 Protected Routes

Requires:

```bash
verify_portfolio_key
```

header authentication.

---

## 📁 Projects

| Method | Endpoint        |
| ------ | --------------- |
| GET    | `/projects`     |
| POST   | `/projects`     |
| PATCH  | `/projects/:id` |
| DELETE | `/projects/:id` |

---

## 🧠 Thoughts

| Method | Endpoint        |
| ------ | --------------- |
| GET    | `/thoughts`     |
| POST   | `/thoughts`     |
| PATCH  | `/thoughts/:id` |
| DELETE | `/thoughts/:id` |

---

## ❤️ Likes

| Method | Endpoint |
| ------ | -------- |
| GET    | `/likes` |
| POST   | `/likes` |

---

# 🖥️ Frontend Routes

| Route          | Description    |
| -------------- | -------------- |
| `/`            | Home           |
| `/about`       | About          |
| `/projects`    | Projects       |
| `/project/:id` | Project Detail |
| `/contact-me`  | Contact        |
| `*`            | Error Page     |

---

# 📱 Desktop-Focused Experience

Currently, the portfolio is intentionally optimized for desktop screens.

On smaller devices, users see a dedicated desktop-only message view.

---

# 📜 Scripts

## Root

```bash
npm run dev
```

Runs frontend & backend together.

---

## Frontend

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

---

## Backend

```bash
npm run dev
```

Runs backend using nodemon.

---

# 🔐 Security Features

* Protected backend APIs
* Environment-based configuration
* SendGrid-secured email handling
* Custom middleware authentication
* CORS configuration

---

# 🚀 Future Improvements

* Admin dashboard panel
* CMS-style content management
* Deployment automation
* Dark/Light theme switcher
* Blog markdown editor

---

# 👨‍💻 Author

## Nitish Sharma

* GitHub:
  [GitHub Profile](https://github.com/nikku1229)

* LinkedIn:
  [LinkedIn Profile](https://www.linkedin.com/in/nitish-sharma-648a581b2)

---

# ⭐ Support

If you like this project:

⭐ Star the repository
🔁 Share the project
⭐ Like the portfolio

---

# 🔥 Built for Creative Developer Showcases

A modern MERN portfolio designed to combine performance, animations, and dynamic content management into a smooth developer experience.
