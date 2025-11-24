# Minimal Store

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A modern, responsive **e-commerce demo application** built with **React**, featuring a product catalog, live cart management, and styled UI inspired by minimalistic design principles.  

This project is perfect as a learning example or a starting point for building a full-fledged online store.  

---

## Features

- **Product Catalog:** Fetches products from a public API (`https://dummyjson.com/products`) with dynamic loading and error handling.  
- **Shopping Cart:** Add, remove, and update quantities of products in the cart with **live updates**.  
- **Persistent Storage:** Cart data is stored in **`localStorage`**, so items remain across page reloads.  
- **Responsive Design:** Mobile-first and optimized for all screen sizes.  
- **Styled Components:** Clean, modern UI using Tailwind CSS + custom colors (`#003f99`, `#005fcc`, `#eef4ff`).  
- **Toast Notifications:** Friendly feedback when products are added to the cart using `react-toastify`.  
- **Routing:** Multi-page routing with React Router (`Home`, `About`, `Login`, `Register`, `Cart`).  

---

## Pages

- **Home:** Product listings, featured products, hero section, and add-to-cart functionality.  
- **Cart:** View items, update quantities, remove products, see subtotal, shipping, and total.  
- **About:** Static about page.  
- **Login/Register:** Authentication UI placeholders (no backend integration yet).  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/nazrulislam1835/E-Commerce-demo-application-built-with-React.git
cd minimal-store
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

---

## Dependencies

- React 18+.
- React Router DOM.  
- Axios (for API requests).
- React Toastify (for notifications).
- Tailwind CSS (for styling).

---
---

## How it Works

-**Adding Items to Cart:** Click the "Add" button on any product in the home page.  
-**Live Cart Update:** Cart automatically updates without page refresh.  
-**Persistent Storage:** Cart state is saved in ```localStorage```.  
-**Quantity Management:** Change quantity or remove items in the cart.  
-**Summary:** Displays subtotal, shipping (free over $75), and total cost.  

---

### GitHub Upload Commands

If your project folder is ready, you can upload it using these commands:

```bash
git init
git add .
git commit -m "Initial commit - E-Commerce-demo-application-built-with-React"
git branch -M main
git remote add origin https://github.com/nazrulislam1835/E-Commerce-demo-application-built-with-React.git
git push -u origin main
```
