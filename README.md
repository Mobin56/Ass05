# 🚀 Dev Stack

**Dev Stack** is a React-based web application designed to help developers explore popular technologies and create a personalized development stack.

Technologies are organized into several categories, including **Frontend, Backend, Database, Programming Language, Styling, DevOps, and Tools**. Users can browse the available technologies, check their details, and add the ones they prefer to their personal stack.

---

## 🌐 Project Links

**Live Website:** Add your deployed website URL here

**GitHub:** Add your GitHub repository URL here

---

## 🧰 Built With

This project was developed using the following technologies:

* React
* JavaScript
* Tailwind CSS
* React Icons
* React Toastify
* JSON
* Vite

---

## ⭐ Main Features

### 🔎 Browse Technologies

Users can explore a collection of development technologies grouped by category.

Every technology card provides useful details such as:

* Technology name
* Category
* Rating
* Difficulty
* Short description

This allows users to get a quick overview before deciding whether to include a technology in their stack.

### 🧩 Create a Personal Stack

Users can build their own development stack by selecting the technologies they are interested in.

The stack functionality allows users to:

* Add technologies
* Remove selected technologies
* Prevent duplicate selections
* Clear the complete stack

This gives developers an easy way to organize the technologies they want to work with.

### 🔔 User Feedback with Toasts

**React Toastify** is used to provide instant feedback for different user actions.

For example, notifications appear when:

* A technology is successfully added
* A technology is removed
* A duplicate technology is selected
* The complete stack is cleared

These notifications make the interaction more clear and user-friendly.

---

# 📖 React Interview Questions

## 1. What is JSX and why is it useful?

JSX is a syntax extension commonly used with React that lets developers write HTML-like elements within JavaScript code.

It makes component development easier because the UI structure and JavaScript logic can be written together in a readable format.

---

## 2. How are State and Props different?

Both State and Props are important concepts in React, but they serve different purposes.

**State** represents information managed by a component. It can change based on user interaction or other events.

**Props** are values passed from a parent component to a child component.

In short:

* **State:** Manages changeable data within a component.
* **Props:** Transfers data or functions between components.

---

## 3. What is `useState()`?

`useState()` is a React Hook that allows a functional component to store and update information.

For example, in this project it can be used to keep track of the technologies selected by the user. When the state changes, React updates the related part of the interface.

---

## 4. What does `useEffect()` do?

`useEffect()` is a React Hook used for handling side effects in a component.

It can be useful for tasks such as:

* Loading data
* Executing code after rendering
* Responding to state or prop changes
* Adding or removing browser event listeners

In this type of application, it can also be used when loading technology data from a JSON source.

---

## 5. Why do React lists need a `key`?

When React renders multiple elements using methods such as `map()`, each item should have a unique `key`.

The key helps React identify individual elements and efficiently determine what needs to be updated when the list changes.

---

## 6. What is Conditional Rendering?

Conditional rendering means showing a particular part of the UI only when a specific condition is true.

For example, while the technology information is being loaded, the application can display a loading message or loader. Once the data becomes available, the technology list can be displayed instead.

---

## 7. How can data move between Parent and Child components?

### Parent → Child

A parent component can send information to a child component through **props**.

### Child → Parent

For communication in the opposite direction, the parent can pass a **callback function** to the child as a prop. The child can then call that function and send information back to the parent.

---

# 📂 Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TechnologyCard.jsx
│   ├── TechnologyList.jsx
│   ├── YourStack.jsx
│   └── Footer.jsx
│
├── App.jsx
├── main.jsx
└── index.css
│
public/
└── technologies.json
```

---

# 🎨 Visual Design

The interface follows a modern gradient-based visual style using a combination of:

**Orange → Pink → Violet**

The primary gradient is managed through the project's CSS styling, making it easier to update the overall theme in the future.

---

# 📱 Responsive Layout

The application has been designed to work across different screen sizes.

It supports:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

Major sections such as the navigation bar, hero area, technology cards, personal stack, and footer adjust according to the screen size for a better user experience.

---

# ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project directory

```bash
cd dev-stack
```

### 3. Install the required packages

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The project will then be available through the local development URL provided by Vite.

### 5. Create a production build

```bash
npm run build
```

---

## 📌 Project Overview

Dev Stack combines technology discovery with a simple stack-building feature. The project demonstrates fundamental React concepts such as **components, props, state management, hooks, conditional rendering, list rendering, and event handling** while maintaining a responsive and modern user interface.
