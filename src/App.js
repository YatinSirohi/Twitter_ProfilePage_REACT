import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './navbar';
import ProfileCover from './ProfileCover';
import ProfileStats from './ProfileStats';
import NewTweet from './NewTweet';
import TweetCard from './TweetCard';
import ProfileInfo from './ProfileInfo';
import RightPanel from './RightPanel';

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/tweets');
      setTweets(response.data);
    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  const handleAddTweet = async (tweetText) => {
    try {
      const response = await axios.post('http://localhost:3001/api/tweets', { text: tweetText });
      setTweets([response.data, ...tweets]);
    } catch (error) {
      console.error('Error adding tweet:', error);
    }
  };

  const handleDeleteTweet = async (tweet) => {
    try {
      await axios.delete(`http://localhost:3001/api/tweets/${tweet._id}`);
      const updatedTweets = tweets.filter((t) => t._id !== tweet._id);
      setTweets(updatedTweets);
    } catch (error) {
      console.error('Error deleting tweet:', error);
    }
  };

  const top3Tweets = tweets.slice(0, 3);

  return (
    <div>
      <NavBar />
      <ProfileCover />
      <div className="left-section">
        <ProfileInfo />
      </div>
      <ProfileStats tweetsCount={tweets.length} />
      <div className="content-container">
        <NewTweet onAddTweet={handleAddTweet} tweetsCount={tweets.length} />
        <div className="tweet-container">
          {top3Tweets.map((tweet) => (
            <TweetCard
              key={tweet._id}
              tweet={tweet}
              onDeleteTweet={handleDeleteTweet}
            />
          ))}
        </div>
        <div className="right-section">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;

