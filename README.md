# Paradise Nursery 🌿

A responsive React houseplant storefront built with Vite, React Router, Redux Toolkit, and React Redux.

## Features
- Landing page with a botanical background, company introduction, and Get Started button
- Plant catalogue with 9 plants in 3 categories
- Add-to-cart buttons disable after a plant is added
- Shared navigation on Plants and Cart pages
- Dynamic cart badge and cart item count
- Increase/decrease quantities, remove items, and calculate subtotals and total
- Checkout button with a “Coming Soon” message
- Responsive layout and GitHub Pages deployment configuration

## Run locally
Install Node.js (LTS), then from this folder run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build
```bash
npm run build
```

## Publish to GitHub Pages
1. Create a **public** GitHub repository named `paradise-nursery`.
2. Upload/push this project to the repository's root.
3. Confirm `vite.config.js` contains `base: "/paradise-nursery/"`. If your repository has a different name, change the value to `"/YOUR-REPOSITORY-NAME/"`.
4. Run:

```bash
npm install
npm run deploy
```

5. In GitHub, open **Settings → Pages** and set the deployment source to the `gh-pages` branch and `/(root)` folder if it is not selected automatically.
6. Your site URL will be `https://YOUR-GITHUB-USERNAME.github.io/paradise-nursery/`.

The plant photographs are loaded from Unsplash URLs, so an internet connection is needed to display them.

## Project structure
```text
paradise-nursery/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── AboutUs.jsx
    ├── data/plants.js
    ├── store/store.js
    ├── store/CartSlice.jsx
    ├── components/Navbar.jsx
    ├── components/ProductList.jsx
    └── components/CartItem.jsx
```
