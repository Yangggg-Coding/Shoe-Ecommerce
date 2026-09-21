# Shoe Store

A beginner e-commerce website built with HTML, CSS, and JavaScript. This project started as a simple product page and grew into a full learning vehicle for practicing core web development concepts: dynamic rendering, DOM manipulation, and local storage.

## What it does

- Displays a grid of shoe products, generated dynamically from a JavaScript array (no hardcoded HTML per product)
- Lets users add products to a shopping cart
- Cart page shows item quantity, lets users increase or decrease amounts, and removes items at zero
- Cart data persists across page reloads using `localStorage`
- Responsive layout with a nav bar, icons via Font Awesome, and Google Fonts (Poppins)

## Tech used

- HTML5
- CSS3 (Flexbox / Grid)
- Vanilla JavaScript (ES Modules)
- Font Awesome (CDN)
- Google Fonts (CDN)
- `localStorage` for cart persistence

## How the product grid works

Product data lives in a single array (`data.js`). Each product is an object with `Id`, `Name`, `Image`, `price`, and `category`. JavaScript loops through this array and builds the HTML for each product card automatically, so adding a new shoe means adding one object, not writing new HTML by hand.

## How the cart works

- Adding a product pushes its `Id` into a `cart` array
- `checkout.js` counts how many times each `Id` appears, then renders one row per unique product with the correct quantity
- Plus and minus buttons update the count and sync the `cart` array back to `localStorage`
- Removing the last copy of an item removes its row from the page

## Status

Work in progress. Currently a personal learning project, not connected to real payment processing or a backend.

## Planned next steps

- Add real product images
- Filter products by category (men, women, kids)
- Move product data to a backend or database
- Add user accounts

## Note on AI assistance

Parts of this project were built with help from Claude (Anthropic) for debugging, code review, and learning explanations.
