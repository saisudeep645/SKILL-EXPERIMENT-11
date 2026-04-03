import React, { useState } from 'react';
import LocalUserList from './LocalUserList.jsx';
import UserList from './UserList.jsx';
import FakePostList from './FakePostList.jsx';

function Dashboard() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigation = (view) => {
    console.log('Navigating to:', view);
    setCurrentView(view);
  };

  const renderView = () => {
    console.log('Current view:', currentView);
    switch (currentView) {
      case 'local-users':
        return <LocalUserList onBack={() => handleNavigation('home')} />;
      case 'api-users':
        return <UserList onBack={() => handleNavigation('home')} />;
      case 'fake-posts':
        return <FakePostList onBack={() => handleNavigation('home')} />;
      default:
        return (
          <div className="dashboard">
            <div className="welcome-section">
              <h2>🚀 Welcome to the API Experiment Dashboard</h2>
              <p className="subtitle">
                Explore different data fetching methods in React
              </p>
            </div>

            <div className="info-cards">
              <div className="info-card">
                <span className="info-icon">📁</span>
                <h4>Local JSON</h4>
                <p>Fetch data from local JSON file using Fetch API</p>
              </div>
              <div className="info-card">
                <span className="info-icon">🌐</span>
                <h4>External API</h4>
                <p>Fetch data from JSONPlaceholder using Fetch API</p>
              </div>
              <div className="info-card">
                <span className="info-icon">📝</span>
                <h4>Axios Integration</h4>
                <p>Fetch data from DummyJSON using Axios library</p>
              </div>
            </div>

            <div className="nav-buttons">
              <button 
                type="button"
                className="nav-button local-btn" 
                onClick={() => handleNavigation('local-users')}
                style={{ cursor: 'pointer' }}
              >
                <span className="btn-icon">📁</span>
                <div className="btn-content">
                  <strong>Local Users</strong>
                  <small>Fetch API + Local JSON</small>
                </div>
              </button>
              <button 
                type="button"
                className="nav-button api-btn" 
                onClick={() => handleNavigation('api-users')}
                style={{ cursor: 'pointer' }}
              >
                <span className="btn-icon">🌐</span>
                <div className="btn-content">
                  <strong>Users API</strong>
                  <small>Fetch API + JSONPlaceholder</small>
                </div>
              </button>
              <button 
                type="button"
                className="nav-button posts-btn" 
                onClick={() => handleNavigation('fake-posts')}
                style={{ cursor: 'pointer' }}
              >
                <span className="btn-icon">📝</span>
                <div className="btn-content">
                  <strong>Fake API Posts</strong>
                  <small>Axios + DummyJSON</small>
                </div>
              </button>
            </div>
          </div>
        );
    }
  };

  return <div className="app-container">{renderView()}</div>;
}

export default Dashboard;
