import React from 'react';
import './ProfileStats.css';

function ProfileStats({ tweetsCount }) {
  const followersCount = 483;
  const followingCount = 520;
  const likesCount = 192;

  return (
    <div className="profile-stats">
      <div className="stat-item">
        <span className="stat-label">Tweets</span>
        <span className="stat-count">{tweetsCount}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Followers</span>
        <span className="stat-count">{followersCount}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Following</span>
        <span className="stat-count">{followingCount}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Likes</span>
        <span className="stat-count">{likesCount}</span>
      </div>
    </div>
  );
}

export default ProfileStats;
