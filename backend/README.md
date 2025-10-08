## 📦 Requirements
- Node.js (v16+)
- MongoDB Atlas account

---

## 🧩 Setup Instructions

### 1️⃣ Install Dependencies
```bash
npm install
2️⃣ Environment Variables
Create a .env file in this folder and add the following variables:

env
Copy code
PORT=5000
MONGO_URI=your_mongo_atlas_connection_string
JWT_SECRET=your_secret_key
💡 Replace your_mongo_atlas_connection_string with your MongoDB Atlas URI.

3️⃣ Run the Backend Server
bash
Copy code
npm run dev
Server will start on:

arduino
Copy code
http://localhost:5000
🧠 API Overview
Method	Endpoint	Description
GET	/api/employees	Fetch all employees
POST	/api/employees	Add new employee
PUT	/api/employees/:id	Update employee details
DELETE	/api/employees/:id	Delete employee record
POST	/api/auth/login	Admin login

🧰 Tech Stack
Node.js

Express.js

MongoDB (Atlas)

JWT Authentication

dotenv
