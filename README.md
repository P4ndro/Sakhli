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
| Auth | JWT + bcrypt |

---

## 📁 Project Structure

```
SAKHLI/
├── api/                    # Backend API (Express.js)
│   ├── controllers/        # Route handlers
│   ├── routes/             # API routes
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
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
cd api
npm install
```

Create a `.env` file in the `api` folder:

```env
DATABASE_URL="mongodb+srv://USERNAME:PASSWORD@cluster.xxxxx.mongodb.net/sakhli"
JWT_SECRET="your-secret-key-here"
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

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |

*More endpoints coming soon...*

---

## ✨ Features (Planned)

- [ ] User authentication & authorization
- [ ] Property listings with images
- [ ] Advanced search & filters
- [ ] Interactive map integration
- [ ] Favorites & saved searches
- [ ] Contact property owners
- [ ] Admin dashboard

