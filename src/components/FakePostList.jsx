import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FakePostList({ onBack }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterUserId, setFilterUserId] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('https://dummyjson.com/posts');
      setPosts(response.data.posts);
    } catch (err) {
      setError(`Failed to fetch posts: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchPosts();
  };

  // Get unique user IDs for dropdown
  const uniqueUserIds = [...new Set(posts.map(post => post.userId))].sort((a, b) => a - b);

  const filteredPosts = filterUserId
    ? posts.filter(post => post.userId === parseInt(filterUserId))
    : posts;

  if (loading) {
    return (
      <div>
        <button className="back-button" onClick={onBack}>← Back to Dashboard</button>
        <div className="loading">Loading posts with Axios...</div>
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
          <button className="nav-button" onClick={fetchPosts}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button className="back-button" onClick={onBack}>← Back to Dashboard</button>
      <h2>
        📝 Fake API Posts (Axios - DummyJSON)
        <span className="count-badge">{filteredPosts.length} posts</span>
      </h2>
      
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="userIdFilter">Filter by User ID:</label>
          <select 
            id="userIdFilter"
            value={filterUserId} 
            onChange={(e) => setFilterUserId(e.target.value)}
            className="filter-select"
          >
            <option value="">All Users</option>
            {uniqueUserIds.map(userId => (
              <option key={userId} value={userId}>User {userId}</option>
            ))}
          </select>
        </div>
        <button className="refresh-button" onClick={handleRefresh}>
          🔄 Refresh Data
        </button>
      </div>

      <div className="post-list">
        {filteredPosts.map(post => (
          <div key={post.id} className="post-card">
            <h3>📄 {post.title}</h3>
            <div className="post-meta">
              <span><strong>Post ID:</strong> {post.id}</span>
              <span><strong>User ID:</strong> {post.userId}</span>
              <span><strong>👍 {post.reactions.likes} Likes</strong></span>
              <span><strong>👎 {post.reactions.dislikes} Dislikes</strong></span>
            </div>
            <p className="post-body">{post.body}</p>
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
          No posts found for the selected user
        </p>
      )}
    </div>
  );
}

export default FakePostList;
