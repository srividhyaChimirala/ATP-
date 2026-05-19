# Backend-2 API Project

## Overview

This project is a simple backend API built using Node.js, Express.js, and MongoDB. It includes:

* User Authentication
* JWT Token Verification
* Product APIs
* MongoDB Database Integration
* Middleware Protection

---

# Project Structure

```bash
backend-2/
│
├── APIs/
│   ├── productAPI.js
│   └── userAPI.js
│
├── auth/
│   └── auth.js
│
├── middlewares/
│   └── verifytoken.js
│
├── models/
│   ├── ProductModel.js
│   └── UserModel.js
│
├── req.http
├── server.js
└── README.MD
```

---

# Features

## User Features

* User Registration
* User Login
* JWT Authentication
* Protected Routes

## Product Features

* Add Product
* View Products
* Product Data Management

---

# Technologies Used

* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* REST API

---



## Move into Project Folder

```bash
cd backend-2
```

---

##  Install Dependencies

```bash
npm install
```

---
# Required Packages

Install these packages if needed:

```bash
npm install express mongoose jsonwebtoken bcryptjs cors dotenv
```

For development:

```bash
npm install nodemon --save-dev
```

---

# MongoDB Setup

Create a `.env` file in the root folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# Run the Project

## Start Server

```bash
node server.js
```

or

```bash
npm start
```

For development:

```bash
npx nodemon server.js
```

---

# Server URL

```bash
http://localhost:5000
```

---

# API Endpoints

## User APIs

### Register User

```http
POST /users/register
```

### Login User

```http
POST /users/login
```

---

## Product APIs

### Get Products

```http
GET /products
```

### Add Product

```http
POST /products
```

---

# Authentication

This project uses JWT authentication.

After login, a token is generated.

Send token in headers:

```http
Authorization: Bearer <token>
```

---

# Middleware

## verifytoken.js

Used to:

* Verify JWT token
* Protect private routes
* Allow authorized access only

---

# Models

## UserModel.js

Stores:

* Username
* Email
* Password

## ProductModel.js

Stores:

* Product Name
* Price
* Category
* Description

---

# API Testing

Use:

* Postman
* Thunder Client
* VS Code REST Client

The project contains:

```bash
req.http
```

for testing APIs.

---

# Learning Outcomes

After completing this project, you will understand:

* Express Server Setup
* REST API Development
* MongoDB Integration
* JWT Authentication
* Middleware Usage
* API Testing
* Backend Project Structure

