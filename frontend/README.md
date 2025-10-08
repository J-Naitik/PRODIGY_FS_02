## 🧩 Setup Instructions

### 1️⃣ Install Dependencies
```bash
npm install
2️⃣ Run the Frontend
bash
Copy code
npm run dev
The app will start on:

arduino
Copy code
http://localhost:5173
⚙️ Connecting to Backend
The frontend communicates with the backend API using Axios.

Ensure the backend is running before starting the frontend.

If your backend runs on a different URL, update it in:

arduino
Copy code
src/config.js
or your .env file as:

ini
Copy code
VITE_API_BASE_URL=http://localhost:5000
🧰 Tech Stack
React.js (Vite)

Axios

Tailwind CSS / CSS Framework

React Router DOM

🎨 Features
Employee management interface

CRUD operations

API integration

Responsive UI







# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
