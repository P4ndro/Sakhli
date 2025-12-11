# 🏠 SAKHLI

> **სახლი** (Sakhli) — Georgian for "Home"

A modern Real Estate platform built with the MERN Stack.

---

## 👥 Team

| Name | Role | Focus |
|------|------|-------|
| **Sandro** | Backend Developer | API, Database, Authentication |
| **Juliett** | Frontend Developer | UI/UX, React Components, Styling |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js + Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB + Prisma |
| Auth | JWT + bcrypt + Cookies |

---

## 📁 Project Structure

```
SAKHLI/
├── api/                    # Backend API (Express.js)
│   ├── controllers/        # Route handlers
│   ├── routes/             # API routes
│   ├── lib/                # Utilities (Prisma client)
│   ├── prisma/             # Database schema
│   └── app.js              # Entry point
├── client/                 # Frontend (React.js + Vite)
│   └── src/
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Backend Setup

```bash
cd api
npm install
```

Create a `.env` file in the `api` folder with:
- `DATABASE_URL` - Your MongoDB connection string
- `JWT_SECRET` - A secret key for JWT tokens (use: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)

Generate Prisma client:
```bash
npx prisma generate
```

Run the server:
```bash
npm start
```

Server runs on: `http://localhost:8800`

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Client runs on: `http://localhost:5173`

---

## 📡 API Endpoints

### Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user (sets HTTP-only cookie) |
| POST | `/api/auth/logout` | Logout user (clears cookie) |

---

## ✨ Features

- [x] User registration with password hashing
- [x] User login with JWT authentication
- [x] HTTP-only cookie for secure token storage
- [x] User logout with cookie clearing
- [ ] Property listings with images
- [ ] Advanced search & filters
- [ ] Interactive map integration
- [ ] Favorites & saved searches
- [ ] Contact property owners
- [ ] Admin dashboard

---

## 🔒 Security

- Passwords hashed with bcrypt
- JWT tokens for authentication
- HTTP-only cookies (not accessible via JavaScript)
- Environment variables for sensitive data

---
