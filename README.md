# 🏏 REDLINE SPORTS — Premium Cricket Bats & Sports Gear

![REDLINE SPORTS](https://img.shields.io/badge/REDLINE-SPORTS-blue?style=for-the-badge&logo=cricket)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=flat-square&logo=tailwindcss)
![Express](https://img.shields.io/badge/Express-4-green?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-8-green?style=flat-square&logo=mongodb)

**Crafted for Champions.** A complete modern web application for a premium cricket bat and sports gear brand based in Pakistan.

---

## ✨ Features

### 🎨 Design
- **Glassmorphism UI** — Frosted-glass containers with `backdrop-filter: blur(12px)`, subtle borders, and glowing highlights
- **Light/Dark Blue Theme** — Deep navy/charcoal backgrounds with electric blue accents and gradients
- **Dark Red Accents** — Bold crimson CTAs for high-energy calls to action
- **Fully Responsive** — Mobile, tablet, and desktop with hamburger menu navigation
- **Smooth Animations** — Framer Motion scroll reveals, hover micro-interactions, floating elements
- **Bold Sports Typography** — Oswald/Bebas Neue display fonts with Inter body text

### 📄 Pages (5)
1. **Home** — Hero section, featured bats, technology highlights, testimonials, brand intro, CTA banner
2. **About Us** — Brand story, values, willow selection process, timeline, team
3. **Products** — Filterable grid (willow type, weight, profile, price), search, product detail modals
4. **Customization** — Knocking-in, oiling, scuff sheet, handle replacement services + custom order form
5. **Contact Us** — Working contact form, store locations, map placeholder, social links

### 🔧 Technical
- **Frontend**: React 18, Vite 5, Tailwind CSS 3, Framer Motion, Lucide Icons
- **Backend**: Node.js, Express 4, MongoDB with Mongoose
- **API Endpoints**:
  - `POST /api/contact` — Contact form submissions
  - `POST /api/custom-order` — Custom bat order inquiries
  - `GET /api/products` — Fetch product catalog (with filters, sorting, pagination)
- **MongoDB Schema** for products, contact messages, and custom orders
- **Security**: Helmet, CORS, rate limiting, input validation

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- MongoDB (local or Atlas)

### 1. Install Dependencies

```bash
# Install all dependencies (root, client, server)
npm run install:all
```

Or install separately:

```bash
# Root
npm install

# Client
cd client && npm install

# Server
cd server && npm install
```

### 2. Configure Environment

The server comes with a default `.env` file (`server/.env`):

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/redline_sports
ADMIN_API_KEY=redline_admin_secret_key_2024
CLIENT_URL=http://localhost:5173
```

**Note**: For production, update the `MONGODB_URI` to your MongoDB Atlas connection string and change the `ADMIN_API_KEY`.

### 3. Start the Development Server

```bash
# Start both client and server together
npm run dev
```

Or separately:

```bash
# Terminal 1 - Server (port 5000)
npm run dev:server

# Terminal 2 - Client (port 5173)
npm run dev:client
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
redline-sports/
├── client/                    # React frontend
│   ├── public/
│   └── src/
│       ├── components/        # Navbar, Footer, ScrollToTop
│       ├── data/              # Products, testimonials, filters
│       ├── pages/             # Home, About, Products, Customization, Contact
│       ├── App.jsx            # Router
│       ├── main.jsx           # Entry point
│       └── index.css          # Tailwind + glassmorphism theme
│
├── server/                    # Express backend
│   ├── models/                # Product, ContactMessage, CustomOrder
│   ├── routes/                # products.js, contact.js, customOrder.js
│   ├── .env                   # Environment variables
│   └── index.js              # Server entry point
│
├── package.json               # Root (concurrently dev script)
└── README.md
```

---

## 🔌 API Reference

### Products
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/products` | Get all products (filter, sort, paginate) | Public |
| GET | `/api/products/:id` | Get single product by ID | Public |
| GET | `/api/products/slug/:slug` | Get product by slug | Public |
| POST | `/api/products` | Create product | Admin (API Key) |
| PUT | `/api/products/:id` | Update product | Admin (API Key) |
| DELETE | `/api/products/:id` | Delete product | Admin (API Key) |

**Product filters**: `?willowType=English Willow&weight=2.9 lbs&profile=Hybrid&minPrice=10000&maxPrice=60000&search=redline&sort=price&order=asc&page=1&limit=20`

### Contact
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/contact` | Submit contact form | Public |
| GET | `/api/contact` | Get all messages | Admin |
| GET | `/api/contact/:id` | Get single message | Admin |
| PATCH | `/api/contact/:id` | Update message status | Admin |

### Custom Orders
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/custom-order` | Submit custom order | Public |
| GET | `/api/custom-order` | Get all orders | Admin |
| GET | `/api/custom-order/:id` | Get single order | Admin |
| PATCH | `/api/custom-order/:id` | Update order status/price | Admin |

**Admin routes** require the `x-api-key` header matching `ADMIN_API_KEY` from `.env`.

### Health Check
```
GET /api/health
```

---

## 🎨 Design System

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Pitch Black | `#050810` | Background |
| Charcoal | `#0a0f1c` | Sections |
| Electric Blue | `#3b82f6` | Primary accent |
| Deep Blue | `#2563eb` | Buttons/Gradients |
| Dark Navy | `#1e3a8a` | Deep gradients |
| Crimson | `#D32F2F` | Urgent CTAs |
| Blood Red | `#8B0000` | Alert accents |

### Typography
- **Display**: [Oswald](https://fonts.google.com/specimen/Oswald) / [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue)
- **Body**: [Inter](https://fonts.google.com/specimen/Inter)

### Glassmorphism
```css
.glass {
  @apply bg-white/5 backdrop-blur-xl border border-blue-400/20 shadow-glass;
}
```

---

## 🛠️ Production Build

```bash
# Build the client
npm run build

# The built files will be in client/dist/
```

---

## 📞 Contact

- **Phone**: +92 300 1359971
- **Email**: us123221@gmail.com
- **Location**: Lahore, Pakistan

---

## 📄 License

MIT License — Copyright © 2025 REDLINE SPORTS

![Crafted for Champions](https://img.shields.io/badge/Crafted%20for-Champions-red?style=for-the-badge)