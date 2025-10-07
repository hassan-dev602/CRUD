CRUD OPERATION (React + Django)
📘 Overview

This project demonstrates a full-stack CRUD (Create, Read, Update, Delete) application built using React for the frontend and Django REST Framework for the backend.
Users can easily add, view, update, and delete patient data through an interactive React interface, which communicates seamlessly with a RESTful Django API.

⚙️ Tech Stack
🔹 Backend

Django

Django REST Framework

SQLite3 (default database)

🔹 Frontend

React.js

Axios — for making API requests

React Toastify — for notifications

Custom CSS — for styling

🧩 Features

✅ Add new patients
✅ View all patients in a responsive table
✅ Edit existing patient information
✅ Delete patient records
✅ Real-time toast notifications for user actions
✅ Simple and clean UI design

🗂️ Folder Structure
CRUD_OPERATION/
├── backend/
│   ├── api/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   └── manage.py
│
└── frontend/
    └── src/
        ├── components/
        │   ├── ApiService.jsx
        │   ├── PatientList.jsx
        │   ├── AddPatient.jsx
        │   └── EditPatient.jsx
        ├── Css/
        │   ├── AddPatient.css
        │   ├── EditPatient.css
        │   └── PatientList.css
        └── App.js

🚀 How to Run the Project
🧱 Backend (Django)
# 1. Navigate to backend folder
cd backend

# 2. Create a virtual environment
python -m venv venv

# 3. Activate the environment
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate

# 4. Install dependencies
pip install django djangorestframework

# 5. Run migrations
python manage.py makemigrations
python manage.py migrate

# 6. Start the server
python manage.py runserver


Backend API will be available at:
👉 http://127.0.0.1:8000/patient/

💻 Frontend (React)
# 1. Navigate to frontend folder
cd frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev


Frontend will be available at:
👉 http://localhost:5173/
 (Vite)
or
👉 http://localhost:3000/
 (CRA)
