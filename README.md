# FlowTrack for Girlies — Backend

**Vanesa Kayla Zahra — 2306161901**

RESTful API backend for FlowTrack for Girlies, a period tracking web application. Built with Express.js and PostgreSQL.

---

## Live Demo

- **Backend:** https://flowtrack-backend-production-6bba.up.railway.app
- **Frontend:** https://flowtrack-girlies.vercel.app

---

## Tech Stack

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)

---

## API Reference

### Cycles (`/cycles`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cycles` | Get all cycles |
| POST | `/cycles` | Create a new cycle |
| DELETE | `/cycles/:id` | Delete a cycle by ID |
| GET | `/cycles/prediction` | Get next period prediction |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Check server status |

---

## Database Schema

```sql
CREATE TABLE cycles (
  id SERIAL PRIMARY KEY,
  start_date DATE NOT NULL,
  duration INTEGER NOT NULL,
  cycle_length INTEGER,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Project Structure
```
flowtrack-backend/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── cycle.controller.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── cycle.model.js
│   └── routes/
│       └── cycleRoutes.js
├── app.js
├── server.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 8
- PostgreSQL

### Installation

```bash
git clone https://github.com/VanesaKayla/flowtrack-backend.git
cd flowtrack-backend
npm install
```

### Environment Variables

Create a `.env` file in the root directory:
```
DATABASE_URL=postgresql://user:password@host:port/database
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
PORT=8080
```

### Run

```bash
node server.js
```

The server will run at `http://localhost:8080`.

---

## Related Repository

Frontend: https://github.com/VanesaKayla/flowtrack-frontend
