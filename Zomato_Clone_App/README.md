# React + Vite

# Zomato Clone App

A brief description of zomato clone project goes here.

## 📦 Installation

1. **Folder Creation:**

- First Create Zomato_Clone folder on your desktop.

2. **Import Created Folder(Zomato_Clone) in VS Code**

3. **Go to the VS code terminal**
   ```bash
   cd Zomato_Clone
   git init
   ```
4. **Install Dependencies:**

   ```bash
   npm install
   ```

5. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` in your browser.

## 📦 Dependencies

Core Technologies Used:

1. React + Vite: Fast development and optimized builds.

2. TailwindCSS: Utility-first CSS framework for styling.

3. React Icons: Popular icons as React components.

## ⚙️ Project Setup

### 1. **React + Vite**

- Initialized with Vite for fast development.
  ```bash
  npm create vite@latest
  ```

### 2. **TailwindCSS Setup**

- Installed TailwindCSS with PostCSS:

  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

- Added Tailwind directives to `src/index.css`:

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- Update tailwind.config.js:

  ```tailwind.config.js
    module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

  ```

### 3. **React Icons Installation**

- Installed react icons.

  ```bash
  npm install react-icons
  ```

- Import react icons.
  import {
  react-icon1,
  react-icon2,
  react-icon3,
  } from "react-icons/fa";

## 🚀 Available Scripts

- **Start Development Server:**
  ```bash
  npm run dev
  ```

## 📁 Folder Structure

```
├── public/
├── src/
│   ├── assets/
|          ├──AppStore.png
|          ├──food.png
|          ├──GetApp.jpg
|          ├──GooglePlay.jpg
│   ├── components/
|          ├──Navbar.jsx
|          ├──HeroSection.jsx
|          ├──SearchBar.jsx
|          ├──Categories.jsx
|          ├──Collections.jsx
|          ├──ExploreOptions.jsx
|          ├──GetApp.jsx
|          ├──Localities.jsx
|          ├──Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🔍 Implementation Details and Approach

### 1. Development Environment with React + Vite

- Vite ensures faster builds and hot module replacement (HMR).

- Provides a lightweight and optimized development setup compared to traditional bundlers like Webpack.

### 2. Utility-First Styling with TailwindCSS

TailwindCSS allows rapid UI development with pre-defined utility classes.

Custom designs are created by combining these utility classes without writing custom CSS.

### 3. Reusable Components

Components like HeroSection, Navbar, SearchBar, Categories, Collections, Localities, Get App, Explore Options and Footer promote modularity.

Each component is self-contained, making the project scalable and easy to maintain.

### 4. Folder Structure for Scalability

The project follows a clean structure separating components and pages.

This structure supports future expansion and new feature integration.
