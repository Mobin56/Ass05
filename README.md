# Assigenment-5

# Dev Stack

Dev Stack is a React website for developers. In this website, users can see different technologies and choose the technologies they like.

Users can find technologies from different categories like Frontend, Backend, Database, Programming Language, Styling, DevOps, and Tools.

Users can also make their own development stack by adding technologies they want.



 Technologies Used

I used the following technologies to make this project:

* React
* JavaScript
* Tailwind CSS
* React Icons
* React Toastify
* JSON
* Vite



Features

1. Explore Technologies

Users can see different technologies in the website.
Each technology has some information like:
* Technology name
* Category
* Rating
* Difficulty level
* Description
This helps users to understand the technology before adding it to their stack.

2.Build Your Own Stack

Users can add their favorite technologies to their own stack.
They can also remove any technology from the stack if they don't need it anymore.
There is also an option to clear the whole stack.

3.Toast Notifications

I used React Toastify for showing messages to the users.
For example, when a user adds a technology, removes a technology, adds the same technology again, or clears the stack, a toast message is shown.
This makes the website easier to understand and use.



React Questions & Answers

1. What is JSX and why do we use it?

JSX means JavaScript XML.

It allows us to write HTML-like code inside JavaScript.

We use JSX because it makes React code easier to write and understand. We can create the structure of a webpage directly inside our React component.

2. What is the difference between State and Props?

State and Props are both used in React, but they are not the same.

State is used to store data inside a component. The state can be changed when something happens.

Props are used to send data from one component to another component.

In simple words:

* State is used for data that can change.
* Props are used to pass data between components.


3. What is useState and how does it work?

useState is a React HookWe use useState when we need to store and change data in a component.


4. What is useEffect and when should you use it?

useEffect is another React Hook.
It is used when we want to do something after the component renders.

we can use useEffect to:
* Fetch data from an API
* Run some code after rendering
* Update something when a value changes
* Work with browser events

5. Why is the key prop important when using map()?

The key prop gives each rendered list item a unique identity.
React uses keys to understand which items have changed, been added, or been removed.

6. What is conditional rendering? Give an example from your project.

Conditional rendering means displaying different UI based on a condition
In this project, the loading screen is conditionally displayed while the JSON data is being loaded.

7. How does data flow from Parent to Child and Child to Parent?
Parent to Child:
Data is passed from a parent component to a child component using props.
Child to Parent
A child can communicate with its parent by receiving a callback function through props and calling that function.


Project Structure
src/
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

public/
└── technologies.json


Design

The project uses a consistent brand gradient:
Orange → Pink → Violet
The gradient is centralized in the CSS theme so it can be easily changed later.

Responsive Design

The application is responsive and optimized for:
Desktop
Tablet
Mobile
The navigation, technology grid, stack section, hero section, and footer adapt to different screen sizes.

Installation

Clone the repository:
git clone YOUR_GITHUB_REPOSITORY_URL

Go to the project folder:
cd dev-stack

Install dependencies:
npm install

Run the development server:
npm run dev

Build the project:
npm run build
