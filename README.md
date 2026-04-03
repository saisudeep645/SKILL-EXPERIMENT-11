# 🚀 React API Integration - Skill Experiment #11

A comprehensive React application demonstrating various data fetching techniques including **Fetch API**, **Axios**, and **Local JSON** integration.

## 📋 Project Overview

This project showcases three different approaches to fetching and displaying data in a React application:

1. **Local JSON Fetching** - Using Fetch API to load data from a local JSON file
2. **External API (JSONPlaceholder)** - Using Fetch API to retrieve user data from a public API
3. **Fake API (DummyJSON)** - Using Axios library to fetch posts with advanced filtering

## ✨ Features

### Part A - Local JSON Users
- ✅ Fetch data from `users.json` file in the public folder
- ✅ Display 6 user records with name, email, and phone
- ✅ Loading and error state handling
- ✅ Search functionality to filter users by name or email

### Part B - JSONPlaceholder Users
- ✅ Fetch data from `https://jsonplaceholder.typicode.com/users`
- ✅ Display comprehensive user information including city and company
- ✅ Loading and error handling with retry functionality
- ✅ Filter users by city

### Part C - Fake API Posts (DummyJSON)
- ✅ Fetch posts using Axios from `https://dummyjson.com/posts`
- ✅ Display post title, body, reactions, and tags
- ✅ Dropdown filter to filter posts by User ID
- ✅ Refresh button to reload data
- ✅ Beautiful card-based layout

### Part D - Dashboard & Navigation
- ✅ Central Dashboard component with three navigation options
- ✅ Clean routing between components using state management
- ✅ Back button on each view to return to dashboard
- ✅ Professional UI with gradient backgrounds and animations

## 🛠️ Technologies Used

- **React** (v18+) - Frontend framework
- **Axios** - HTTP client for API requests
- **Fetch API** - Native browser API for data fetching
- **CSS3** - Advanced styling with gradients and animations
- **JSONPlaceholder** - Fake REST API for testing
- **DummyJSON** - Modern fake API with rich data

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps to Run

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-api-integration
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
react-api-integration/
├── public/
│   ├── users.json          # Local JSON data file
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx        # Main dashboard with navigation
│   │   ├── LocalUserList.jsx    # Local JSON users component
│   │   ├── UserList.jsx         # JSONPlaceholder users component
│   │   └── FakePostList.jsx     # DummyJSON posts component
│   ├── App.js              # Main App component
│   ├── App.css             # Application styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json
└── README.md
```

## 🎯 Key Learning Outcomes

1. **useState Hook** - Managing component state for data, loading, and errors
2. **useEffect Hook** - Performing side effects and data fetching on component mount
3. **Fetch API** - Using native browser API for HTTP requests
4. **Axios** - Using third-party library for enhanced HTTP functionality
5. **Error Handling** - Implementing try-catch blocks and error state management
6. **Loading States** - Providing user feedback during asynchronous operations
7. **Data Filtering** - Implementing search and dropdown filters
8. **Component Communication** - Passing callbacks and managing navigation
9. **Responsive Design** - Creating mobile-friendly layouts

## 🎨 Features Breakdown

### LocalUserList Component
- Fetches data from `/users.json` using Fetch API
- Implements search functionality
- Displays user cards with emoji icons
- Handles loading and error states

### UserList Component
- Fetches from JSONPlaceholder API
- Filters users by city
- Shows extended user information
- Retry mechanism on error

### FakePostList Component
- Uses Axios for API calls
- Dropdown filter by User ID
- Refresh button to reload data
- Displays posts with tags and reactions
- Rich metadata display

### Dashboard Component
- Central navigation hub
- Info cards explaining each section
- Beautiful gradient buttons
- Smooth transitions between views

## 🚀 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

## 🎨 Styling Highlights

- **Gradient Backgrounds** - Beautiful purple gradient theme
- **Card Layouts** - Modern card-based design for data display
- **Hover Effects** - Interactive animations on buttons and cards
- **Responsive Design** - Mobile-first approach with media queries
- **Loading Animations** - Pulsing effect during data fetch
- **Color Coding** - Different color schemes for each section

## 📝 APIs Used

1. **JSONPlaceholder** - `https://jsonplaceholder.typicode.com/users`
   - Free fake REST API for testing and prototyping
   - Returns 10 user objects with comprehensive data

2. **DummyJSON** - `https://dummyjson.com/posts`
   - Modern fake API with realistic data
   - Returns posts with reactions, tags, and metadata

## 🔍 Component Details

### State Management
Each component manages:
- `data` - Array of fetched items
- `loading` - Boolean for loading state
- `error` - String for error messages
- `filter` - String/value for filtering data

### Error Handling
- Try-catch blocks for async operations
- User-friendly error messages
- Retry buttons on failed requests
- HTTP status code validation

## 🌟 Best Practices Implemented

✅ Proper error handling with try-catch blocks  
✅ Loading states for better UX  
✅ Clean component structure and separation of concerns  
✅ Reusable CSS classes and consistent styling  
✅ Responsive design for all screen sizes  
✅ Meaningful variable and function names  
✅ Comments where necessary  
✅ Async/await for cleaner asynchronous code  

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (< 768px)

## 🤝 Contributing

This is an educational project. Feel free to fork and experiment!

## 📄 License

This project is created for educational purposes as part of Full Stack Development experiments.

## 👨‍💻 Author

**Full Stack Experiment Series - Skill #11**

---

**Happy Coding! 🎉**

