import React, { useState, useEffect } from 'react';

function UserList({ onBack }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCity, setFilterCity] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(`Failed to fetch users from API: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = filterCity
    ? users.filter(user => 
        user.address.city.toLowerCase().includes(filterCity.toLowerCase())
      )
    : users;

  if (loading) {
    return (
      <div>
        <button className="back-button" onClick={onBack}>← Back to Dashboard</button>
        <div className="loading">Fetching users from JSONPlaceholder API...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <button className="back-button" onClick={onBack}>← Back to Dashboard</button>
        <div className="error">
          <strong>Error:</strong> {error}
          <br /><br />
          <button className="nav-button" onClick={fetchUsers}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button className="back-button" onClick={onBack}>← Back to Dashboard</button>
      <h2>
        🌐 JSONPlaceholder API Users
        <span className="count-badge">{filteredUsers.length} users</span>
      </h2>
      
      <div className="filter-controls">
        <input
          type="text"
          placeholder="🏙️ Filter by city..."
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
          className="search-input"
        />
        {filterCity && (
          <button className="clear-button" onClick={() => setFilterCity('')}>Clear Filter</button>
        )}
      </div>

      <div className="user-grid">
        {filteredUsers.map(user => (
          <div key={user.id} className="user-card">
            <h3>👤 {user.name}</h3>
            <p><strong>Username:</strong> @{user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        ))}
      </div>
      
      {filteredUsers.length === 0 && (
        <p style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
          No users found in city "{filterCity}"
        </p>
      )}
    </div>
  );
}

export default UserList;
