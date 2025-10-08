Backend - Employee Management System

This is the backend of the Employee Management System built with Node.js, Express, and MongoDB (Atlas).
It provides REST APIs for employee CRUD operations and authentication.

Requirements:

Node.js (v16+)

MongoDB Atlas account

Setup Instructions:

Install dependencies
npm install

Create a .env file in this folder and add the following:
PORT=5000
MONGO_URI=your_mongo_atlas_connection_string
JWT_SECRET=your_secret_key

Replace "your_mongo_atlas_connection_string" with your MongoDB Atlas connection string.

Run the Backend Server
npm run dev
The server will start on http://localhost:5000

API Overview:
Method Endpoint Description
GET /api/employees Fetch all employees
POST /api/employees Add new employee
PUT /api/employees/:id Update employee details
DELETE /api/employees/:id Delete employee record
POST /api/auth/login Admin login

Tech Stack:

Node.js

Express.js

MongoDB (Atlas)

JWT Authentication

dotenv
