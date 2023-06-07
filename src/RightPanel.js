import React, { useState } from 'react';
import './RightPanel.css';

function RightPanel() {
  const [followStatuses, setFollowStatuses] = useState(Array(4).fill(false));

  const handleFollowClick = (index) => {
    const updatedStatuses = [...followStatuses];
    updatedStatuses[index] = !updatedStatuses[index];
    setFollowStatuses(updatedStatuses);
  };

  return (
    <div className="right-panel">
      <h3 className="panel-header">Who to follow</h3>
      <div className="user-container">
        <p className="user-info">Bjarne@bjarne</p>
        <button
          className="follow-button"
          onClick={() => handleFollowClick(0)}
        >
          {followStatuses[0] ? 'Following' : 'Follow'}
        </button>
        <p className="user-info">abc@twitter</p>
        <button
          className="follow-button"
          onClick={() => handleFollowClick(1)}
        >
          {followStatuses[1] ? 'Following' : 'Follow'}
        </button>
        <p className="user-info">connor@twitter</p>
        <button
          className="follow-button"
          onClick={() => handleFollowClick(2)}
        >
          {followStatuses[2] ? 'Following' : 'Follow'}
        </button>
      </div>
      <div className="user-container">
        <p className="user-info">Jomal@jomal</p>
        <button
          className="follow-button"
          onClick={() => handleFollowClick(3)}
        >
          {followStatuses[3] ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
}

export default RightPanel;

