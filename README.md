# 🍋 lemon — Campus Food Delivery Website

A minimalist, dark-mode university campus food delivery web application built using pure **HTML5**, **CSS3**, and **Vanilla JavaScript**—with zero external frameworks or build tools.

Students can browse all campus food stalls and late-night canteens on a single scrolling page, filter by category or search terms, inspect individual stall menus, select their hostel drop-off gate, and place orders through a live cart drawer.

---

## ✨ Features

* **Single-Page Scrolling Stall Directory:** Displays 12 campus food stalls and night canteens in a responsive dark-mode card grid with live `OPEN` / `CLOSED` status badges, ratings, and estimated prep times.
* **Live Search & Category Filtering:** Filter stalls instantaneously by typing dish/stall names or selecting category pills (*All Stalls*, *Open Now*, *Night Canteen*, *Rolls & Momos*, *Beverages*).
* **Interactive Stall Menu View:** Clicking any stall card transitions smoothly into that stall's dedicated menu with veg/non-veg indicators and `+ Add` buttons.
* **Live Order Cart & Hostel Drop-Off Selector:** Choose a campus hostel block or gate from the navbar dropdown, add/remove items in real time, view itemized `₹` totals, and trigger instant order confirmation.
* **Scroll-Linked Lemon Progress Indicator:** A signature floating lemon badge pinned to the right margin glides down a vertical track and rotates smoothly in sync with `window.scrollY`.

---

## 🛠️ Tech Stack

* **HTML5** — Semantic single-page structure (`index.html`)
* **CSS3** — Custom properties (`:root` dark theme variables), CSS Grid, Flexbox, sticky navigation, and smooth transitions (`style.css`)
* **Vanilla JavaScript (ES6)** — DOM manipulation, array/object data rendering, event listeners, cart state management, and scroll-linked animations (`script.js`)

---

## 📂 Project Structure

```text
lemon-website/
├── index.html      # Main webpage layout (Navbar, Stalls Grid, Menu View, Cart, Footer)
├── style.css       # Dark-mode styling, responsive grid, and scroll-track layout
├── script.js       # Stall & menu data, filtering, cart logic, and scroll animation
└── README.md       # Project documentation
