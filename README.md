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
git clone https://github.com/yourusername/minimal-store.git
cd minimal-store
