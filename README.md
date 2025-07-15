# Uber Clone – Full Stack Ride Booking App

A full-stack ride-booking web application inspired by platforms like Uber, built using the **MERN Stack** and styled with **TailwindCSS**. The app provides separate login and dashboards for **Users** and **Drivers**, allowing users to book rides and drivers to manage and verify them with OTP.

---

## Project Overview

This project simulates a real-world ride-booking platform with the following core functionalities:

-  Location-based ride search using **Google Maps API**
-  **Role-based authentication** for users and drivers
-  **Real-time ride updates** using **WebSockets**
-  Responsive and modern UI built with **React + Vite** and **TailwindCSS**
-  Backend powered by **Express.js** and **MongoDB**
-  OTP-based ride verification for added security

---

##  Tech Stack

### Frontend
- React + Vite
- TailwindCSS
- Axios
- GSAP
- Remix Icons
- Google Maps API

###  Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO

---

##  Features

###  User Features
-  Register & login as a User  
- Search for destinations using Google Maps  
- Book a ride from current location  
- Choose ride type: 🚗 Car, 🛺 Auto, 🏍 Bike  
- Track ride progress in **real-time** via Socket.IO  
- Smooth transitions/animations via GSAP
- Book a ride with preferred vehicle type:
  -  Car
  -  Auto
  -  Bike

###  Driver Features
- Register and log in as a **Driver**
- View incoming ride requests
- See OTP for ride verification
- Start ride after successful OTP match

---

##  Folder Structure
uber-clone/

├── backend/ # Node.js + Express + MongoDB API

├── frontend/ # React + Vite + TailwindCSS UI

└── README.md


---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/uber-clone.git
cd uber-clone
```
### 2. Setup Backend
```bash
cd Backend
npm i
npx nodemon
```
### 2. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
---

### Make sure to configure your .env files as required for API keys (e.g., Google Maps)

# Future Improvements
- Add payment integration (e.g., Razorpay, Stripe)
- Admin dashboard for monitoring drivers and users
- Ride history & invoice generation
