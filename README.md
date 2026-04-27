# Florra – Modern E-commerce Web Application

## Project Overview

Florra is a modern e-commerce web application built with Next.js and Firebase Authentication. It allows users to browse products, filter items, view details, and manage products through a protected admin interface. The application focuses on clean UI, responsive design, and a smooth user experience.

---

## Key Features

* User Authentication (Google Login via Firebase)
* Protected Routes (Add Product, Manage Products)
* Product Listing with Search & Filtering
* Dynamic Product Details Page
* Add Product with Local Storage Persistence
* Manage Products (View & Delete)
* Responsive Design (Mobile + Desktop)
* Toast Notifications for user feedback
* Clean and modern UI design

---

## Tech Stack

* Next.js (App Router)
* React.js
* Firebase Authentication
* Tailwind CSS
* Local Storage (for product data)
* React Hot Toast

---

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/florra.git
cd florra
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Run the development server

```bash
npm run dev
```

Open: (https://florra-ecom.netlify.app/)

---

## Route Summary

### Public Routes

* `/` → Home page
* `/products` → All products with filtering
* `/products/[id]` → Single product details
* `/about` → About page
* `/login` → Login page
* `/register` → Register page

### Protected Routes (Login Required)

* `/auth/add` → Add new product
* `/auth/manage` → Manage products (view & delete)

---

## Project Structure (Simplified)

```
/app
  /products
  /auth
  /about
  /login
  /register

/components
/context
/lib
/data
```

---

## Future Improvements

* Backend integration (Node.js + MongoDB)
* Cart & Checkout system
* Admin roles & permissions
* Product editing feature
* Payment gateway integration

---

## Author

Tasin
Frontend / Full Stack Developer

---
