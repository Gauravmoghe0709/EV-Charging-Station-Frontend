# ⚡ EV Charging Station – MERN Full Stack Application

A full‑stack EV Charging Station Management & Booking platform built using the MERN stack. This project allows users to find EV stations and book charging slots, while admins can manage stations, users, and view analytics.

---

# 🚀 Tech Stack

## Frontend

* React.js
* Tailwind CSS
* React Router
* Context API (Global State Management)
* Recharts (Analytics & Charts)

## Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Role Based Authorization (User / Admin)

---

# 👤 User Features

* User Registration & Login
* Secure JWT Authentication
* Role Based Protected Routes
* View All EV Charging Stations
* Book Charging Slots
* Responsive Modern UI

---

# 🛠️ Admin Features

Admin has full control over the platform:

### 🔐 Authentication

* Admin Login
* Role Based Access Control

### ⚡ Station Management APIs

* Create EV Station
* Get All Stations
* Update Station
* Delete Station

### 📅 Booking Management

* Station Slot Booking API
* View Booking Data

### 📊 Analytics Dashboard

* Admin Analysis API
* Visual Bar Charts using Recharts

---

# 🔑 Key Concepts Implemented

* JWT Authentication
* Role Based Authorization
* Protected Routes
* RESTful API Design
* Global State Management using Context API
* Full CRUD Operations
* Dashboard Analytics

---

# 📂 Project Structure

## Backend

```
backend/
 ├── controllers
 ├── models
 ├── routes
 ├── middleware
 ├── server.js
```

## Frontend

```
frontend/
 ├── pages
 ├── components
 ├── context
 ├── routes
 ├── charts
```

---

# ⚙️ Installation & Setup

## 1 Backend Setup

```bash
cd backend
npm install
npm start
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
```

## 2 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 Deployment

This project can be deployed using:

* Backend → Render Web Service
* Frontend → Render Static Site
* Database → MongoDB Atlas

---

# 📊 Future Improvements

* Online Payment Integration
* Real‑time Slot Availability
* Map Integration for Nearby Stations
* Notifications & Email Alerts

---

# 🙌 Author

Built with ❤️ as a Full Stack MERN Project.
