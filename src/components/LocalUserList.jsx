import React, { useState, useEffect } from 'react';

function LocalUserList({ onBack }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchLocalUsers();
  }, []);

  const fetchLocalUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/users.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(`Failed to load local users: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <button className="back-button" onClick={onBack}>← Back to Dashboard</button>
        <div className="loading">Loading local users...</div>
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
          <button className="nav-button" onClick={fetchLocalUsers}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button className="back-button" onClick={onBack}>← Back to Dashboard</button>
      <h2>
        📁 Local JSON Users 
        <span className="count-badge">{filteredUsers.length} users</span>
      </h2>
      
      <div className="filter-controls">
        <input
          type="text"
          placeholder="🔍 Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-button" onClick={() => setSearchTerm('')}>Clear</button>
        )}
      </div>

      <div className="user-grid">
        {filteredUsers.map(user => (
          <div key={user.id} className="user-card">
            <h3>👤 {user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        ))}
      </div>
      
      {filteredUsers.length === 0 && (
        <p style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
          No users found matching "{searchTerm}"
        </p>
      )}
    </div>
  );
}

export default LocalUserList;
