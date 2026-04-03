import React from 'react';
import Dashboard from './components/Dashboard.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🚀 React API Integration Experiment</h1>
        <p className="header-subtitle">Mastering Fetch API, Axios & Local JSON</p>
      </header>
      <main className="main-content">
        <Dashboard />
      </main>
      <footer className="app-footer">
        <p>Built with React ⚛️ | Skill Experiment #11</p>
      </footer>
    </div>
  );
}

export default App;
