
# Blog Application Project

## Overview

This project is a full-stack Blog Application backend built using Node.js, Express.js, MongoDB, and Cloudinary.

The application includes:

* User Authentication
* Author and Admin APIs
* Blog Article Management
* JWT Token Verification
* Image Upload using Cloudinary
* Protected Routes

---

# Project Structure

```bash
week7/
│
└── blogapp-backend/
    │
    ├── APIs/
    │   ├── AdminAPI.js
    │   ├── AuthorApi.js
    │   ├── CommonAPI.js
    │   └── UserAPI.js
    │
    ├── config/
    │   ├── cloudinary.js
    │   ├── cloudinaryUpload.js
    │   └── multer.js
    │
    ├── middlewares/
    │   └── VerifyToken.js
    │
    ├── models/
    │   ├── ArticleModel.js
    │   └── UserModel.js
    │
    ├── admin-req.http
    ├── author-req.http
    ├── server.js
    ├── package.json
    └── .env
```

---

# Features

## User Features

* User Registration
* User Login
* JWT Authentication
* Protected Access

## Author Features

* Create Articles
* Update Articles
* Delete Articles
* View Articles

## Admin Features

* Manage Users
* Manage Articles
* Administrative Controls

## Media Upload

* Upload images using Cloudinary
* File handling with Multer

---

# Technologies Used

* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cloudinary
* Multer
* REST APIs

---

# Installation

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Move into Project Folder

```bash
cd week7/blogapp-backend
```

---

## 3. Install Dependencies

```bash
npm install
```

---

# Required Packages

Install packages if needed:

```bash
npm install express mongoose cors dotenv jsonwebtoken bcryptjs multer cloudinary multer-storage-cloudinary
```

For development:

```bash
npm install nodemon --save-dev
```

---

# Environment Variables

Create a `.env` file in the root folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
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
POST /user/register
```

### Login User

```http
POST /user/login
```

---

## Author APIs

### Create Article

```http
POST /author/article
```

### Get Articles

```http
GET /author/articles
```

### Update Article

```http
PUT /author/article/:id
```

### Delete Article

```http
DELETE /author/article/:id
```

---

## Admin APIs

### Manage Users

```http
GET /admin/users
```

### Manage Articles

```http
GET /admin/articles
```

---

# Authentication

This project uses JWT authentication.

After login, a token is generated.

Send token in request headers:

```http
Authorization: Bearer <token>
```

---

# Middleware

## VerifyToken.js

Used for:

* Token verification
* Route protection
* Authorized access control

---

# Database Models

## UserModel.js

Stores:

* Username
* Email
* Password
* Role

## ArticleModel.js

Stores:

* Article Title
* Content
* Author
* Image URL
* Created Date

---

# Cloudinary Configuration

Cloudinary is used for image uploads.

Files:

```bash
config/cloudinary.js
config/cloudinaryUpload.js
```

Multer handles file uploads before sending them to Cloudinary.

---

# API Testing

Use:

* Postman
* Thunder Client
* VS Code REST Client

Testing files included:

```bash
admin-req.http
author-req.http
```

---

# Learning Outcomes

After completing this project, you will understand:

* Backend API Development
* JWT Authentication
* MongoDB Integration
* Cloudinary Image Uploads
* Middleware Protection
* REST API Architecture
* File Upload Handling
* Express Routing

---

