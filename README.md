
# Node.js Backend Project

A backend application built using Node.js, Express.js, and MongoDB.

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- CORS

## 📁 Project Structure

```text
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── .gitignore
├── main.js
├── package.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to project folder

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Run the project

```bash
npm run dev
```

## 🌐 API Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Check backend |
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/users | Get all users |

## 🔐 Features

- User Registration
- User Login
- Password Hashing
- JWT Authentication
- MongoDB Database Connection
- REST API

## 👨‍💻 Developer

**Karthi**

Aspiring Full Stack Developer

## 📌 Status

Project under development.
