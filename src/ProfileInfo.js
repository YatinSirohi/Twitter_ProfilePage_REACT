import React from 'react';
import './ProfileInfo.css';

function ProfileInfo() {
  return (
    <div className="profile-info">
      <h2 className="profile-name">Yatin Sirohi</h2>
      <p className="profile-username">@yatin</p>
      <p className="profile-username">twitter.com/yatin</p>
      <p className="profile-location">Perth, WA</p>
      <p className="profile-joined">Joined November 2020</p>
      <button className="tweet-to-yatin-button">Tweet to Yatin</button>
    </div>
  );
}

export default ProfileInfo;
