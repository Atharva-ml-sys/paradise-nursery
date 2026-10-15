# Paradise Nursery Shopping Application

A React + Redux single-page shopping cart application for an online plant shop called **Paradise Nursery**. This is the final project for the IBM *Developing Front-End Apps with React* course.

## Project Overview

Paradise Nursery lets users browse a variety of houseplants, view details such as images, names, descriptions, and prices, add plants to a shopping cart, and manage the cart (increase/decrease quantity, delete items, see totals) before checkout.

## Features

- **Landing page** with a background image, company name, an "About Us" paragraph, and a **Get Started** button.
- **Product listing page** with at least six unique houseplants grouped into three categories (Air Purifying, Aromatic Fragrant, Low Maintenance), each showing a thumbnail, name, description, and price.
- **Add to Cart** buttons that add the plant to the cart, disable after being clicked, and increment the cart icon count.
- **Navigation bar** on both the product and cart pages, with Home, Plants, and Cart links and a dynamic cart item count.
- **Shopping cart page** showing total cart amount, total number of plants, per-item subtotal, unit price, increase/decrease quantity controls, a delete button, a checkout button ("Coming Soon"), and a continue-shopping button.

## Tech Stack

- React 18 (Vite)
- Redux Toolkit + React-Redux for cart state management

## Project Structure

```
paradise-nursery/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          # Entry point, Redux Provider
    ├── store.js          # Redux store configuration
    ├── CartSlice.jsx     # Redux slice for cart (add/remove/updateQuantity)
    ├── App.jsx           # Landing page + page switching
    ├── App.css           # Landing page styles + background image
    ├── AboutUs.jsx       # Company "About Us" section
    ├── AboutUs.css
    ├── ProductList.jsx   # Product grid, navbar, Add to Cart
    ├── ProductList.css
    ├── CartItem.jsx      # Shopping cart page
    ├── CartItem.css
    ├── plantsData.js     # Plant catalogue data
    └── index.css         # Global styles
```

## Run Locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build & Deploy (GitHub Pages)

```bash
npm run build
npm run deploy
```

## Author

Atharva — B.Tech Instrumentation Engineering, Vishwakarma Institute of Technology, Pune.
