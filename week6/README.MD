# Week 6 React Projects

## Overview

This repository contains React.js practice projects and assignments focused on:

* React Components
* API Handling
* Context API
* State Management
* Props and Hooks
* Modern React Development

---

# Project Structure

```bash
week6/
│
├── APIDEMOQues1.jsx
├── ContextAPIQues2/
└── README.md
```

---

# Technologies Used

* React.js
* JavaScript (ES6)
* JSX
* Context API
* Fetch API
* CSS
* Vite / Create React App

---

# Requirements

Install the following before running the projects:

* Node.js
* npm
* VS Code

Check versions:

```bash
node -v
npm -v
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Move into Project Folder

```bash
cd week6
```

---

## Install Dependencies

```bash
npm install
```

---

# Run React Project

Start development server:

```bash
npm run dev
```

or

```bash
npm start
```

---

# Project Details

## 1. APIDEMOQues1.jsx

### Description

This project demonstrates API integration in React.

### Features

* Fetch API data
* Display API response
* React functional components
* State management
* Dynamic rendering

### Concepts Used

* useState
* useEffect
* API Fetching
* JSX Rendering

---

## 2. ContextAPIQues2

### Description

This project demonstrates React Context API for global state management.

### Features

* Global state sharing
* Avoid prop drilling
* Context Provider
* Context Consumer

### Concepts Used

* React Context API
* useContext Hook
* Component communication
* State management

---

# React Concepts Covered

## Components

Reusable UI blocks created using React.

## Props

Used to pass data between components.

## State

Stores dynamic data inside components.

## Hooks

Special React functions such as:

* useState
* useEffect
* useContext

## Context API

Used for managing global application state.

---

# API Integration

The API demo project includes:

* Fetching data from APIs
* Handling responses
* Rendering data dynamically
* Error handling basics

Example:

```javascript
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);
```

---

# Learning Outcomes

After completing these projects, you will understand:

* React component structure
* API integration in React
* React Hooks
* Context API
* State management
* Dynamic rendering
* Modern frontend development

