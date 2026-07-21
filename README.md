# Patient CRUD Management System

A simple full-stack Patient CRUD Management System built with **React + Vite** on the frontend and **Django REST Framework** on the backend. The application allows users to view, add, update, and delete patient records through a clean responsive interface.




## Overview

This project is a basic Patient Management CRUD application. It is useful for learning how a frontend application communicates with a backend REST API.

The frontend displays patient data in a table and provides forms for adding and editing patients. The backend exposes REST API endpoints using Django REST Framework and stores patient records in an SQLite database.



## Features

- View all patient records
- Add a new patient
- Edit existing patient details
- Delete patient records
- Responsive table layout for small screens
- Toast notifications for success and error messages
- Django admin panel for managing patient records
- REST API built using Django REST Framework



## Tech Stack


### Frontend

- React 19
- Vite
- Axios
- React Toastify
- CSS

### Backend

- Python
- Django 5.2
- Django REST Framework
- SQLite
- django-cors-headers



## Project Structure


CRUD/
├── BackEnd/
│   ├── BackEnd/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   ├── api/
│   │   ├── migrations/
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── db.sqlite3
│   ├── manage.py
│   └── requirements.txt
│
└── frontEnd/
    ├── public/
    ├── src/
    │   ├── Components/
    │   │   ├── AddPatient.jsx
    │   │   ├── ApiService.jsx
    │   │   ├── EditPatient.jsx
    │   │   └── PatientList.jsx
    │   ├── Css/
    │   │   ├── AddPatient.css
    │   │   ├── EditPatient.css
    │   │   └── PatientList.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    ├── vite.config.js
    └── index.html




## Backend Setup

Go to the backend folder:

```bash
cd CRUD/BackEnd
```

Create and activate a virtual environment:

```bash
python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### macOS / Linux

```bash
source venv/bin/activate
```

Install backend dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Create a superuser for the Django admin panel:

```bash
python manage.py createsuperuser
```

Start the backend server:

```bash
python manage.py runserver
```


---

## Frontend Setup

Go to the frontend folder:

```bash
cd CRUD/frontEnd
```

Install frontend dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```