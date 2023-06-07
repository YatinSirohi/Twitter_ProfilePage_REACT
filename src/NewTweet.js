import React, { useState } from 'react';
import './NewTweet.css';
import axios from 'axios';

function NewTweet({ onAddTweet, tweetsCount }) {
  const [tweetText, setTweetText] = useState('');

  const handleInputChange = (event) => {
    setTweetText(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (tweetText.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:3001/api/tweets', { text: tweetText });
        onAddTweet(response.data.text);
        setTweetText('');
      } catch (error) {
        console.error('Error adding tweet:', error);
      }
    }
  };

  return (
    <div className="new-tweet">
      <form onSubmit={handleFormSubmit}>
        <textarea
          className="tweet-input"
          placeholder="What's happening?"
          value={tweetText}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit" className="tweet-button">
          Post Tweet
        </button>
      </form>
    </div>
  );
}

export default NewTweet;
