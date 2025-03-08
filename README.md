# 🍳 Recipe Application - Your Culinary Hub
## 🚀 Project Overview
This full-stack application allows users to *discover, search, and save* their favorite recipes. Users can *register, browse recipes, filter by categories, and save* their favorites for easy access later.

Built with *React (frontend), Node.js/Express (backend), and MongoDB (database)*, this project demonstrates a comprehensive full-stack development approach.

🔗 *Live Demo:* [[View the Recipe App]](https://recipe-application-delta.vercel.app/)(#) <!-- Add your deployment link here -->

---

## ✨ Key Features & Technologies

### 🌟 Features
✅ User Authentication (Register/Login with JWT)  
✅ Recipe Search & Filtering by Categories  
✅ Save Favorite Recipes to User Profile  
✅ Responsive Design for Mobile & Desktop  
✅ Modern UI with Tailwind CSS  

### 🛠 Tech Stack

#### *Frontend (React)*
- React.js (UI library)
- React Router (Navigation)
- Tailwind CSS (Styling)
- Lucide React Icons (UI elements)
- Local Storage (Client-side persistence)

#### *Backend (Node.js + Express)*
- Node.js (Server-side runtime)
- Express.js (API framework)
- MongoDB + Mongoose (Database)
- JWT (Authentication)
- Bcrypt (Password hashing)
- Axios (API calls)

#### *External APIs*
- Spoonacular API (Recipe data)

#### *Deployment*
- *Frontend:* Vercel/Netlify  
- *Backend:* Render/Heroku  
- *Database:* MongoDB Atlas  

---

## ⚙ Setup Instructions

### 🔹 1. Clone the Repository
```bash
git clone <your-repo-url>
cd recipe-application
```
### 2. Setup Backend
### 1️⃣ Navigate to the backend folder:
```
cd backend
```
### 2️⃣ Install dependencies:
```
npm install
```
### 3️⃣ Create a .env file and add your environment variables:
```
MONGOURL=your_mongodb_connection_string
SALT_ROUNDS=8
SECRET_KEY=your_jwt_secret_key
SPOONACULAR_API_KEY=your_spoonacular_api_key
```
### 4️⃣ Start the backend server:
```
npm start
```
```
Backend runs on http://localhost:8080
```

##🔹 3. Setup Frontend
### 1️⃣ Navigate to the frontend folder:
```
cd ../frontend
```
### 2️⃣ Install dependencies:
```
npm install
```
### 3️⃣ Start the frontend:
```
npm run dev
```
```
Frontend typically runs on http://localhost:5173
```
## 📂 Project Structure
```
├── backend/
│   ├── config/
│   │   └── db.js       # Database connection
│   ├── middleware/
│   │   └── auth.js     # JWT authentication
│   ├── model/
│   │   ├── Recipe.js   # Recipe schema
│   │   └── User.js     # User schema
│   ├── routes/
│   │   ├── UserRoute.js     # Auth routes
│   │   ├── recipes.js       # Recipe search
│   │   └── userRecipes.js   # User's saved recipes
│   ├── .env            # Environment variables
│   └── server.js       # Server entry point
├── frontend/
│   ├── src/
│   │   ├── component/
│   │   │   ├── AppRoutes.jsx  # Route configuration
│   │   │   ├── Footer.jsx     # Footer component
│   │   │   └── Navbar.jsx     # Navigation component
│   │   ├── pages/
│   │   │   ├── About.jsx      # About page
│   │   │   ├── Home.jsx       # Main page with search
│   │   │   ├── Login.jsx      # Login form
│   │   │   ├── Register.jsx   # Registration form
│   │   │   └── SavedRecipes.jsx # User's saved recipes
│   │   ├── App.jsx      # Main component
│   │   └── main.jsx     # Application entry point
│   └── index.html       # HTML template
└── README.md            # Project documentation

```



