import React from 'react';
import './TweetCard.css';
import axios from 'axios';

function TweetCard({ tweet, onDeleteTweet }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/tweets/${tweet._id}`);
      onDeleteTweet(tweet);
    } catch (error) {
      console.error('Error deleting tweet:', error);
    }
  };

  return (
    <div className="tweet-card">
      <h5 className="tweet-header">Yatin Sirohi @yatin</h5>
      <p className="tweet-text">{tweet.text}</p>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default TweetCard;

