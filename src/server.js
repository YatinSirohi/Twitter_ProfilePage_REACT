const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Create an instance of the Express server
const app = express();
app.use(cors());
// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://yatin1:pass123@cluster0.cwebnjg.mongodb.net/tweets', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Define a schema and model for the tweet
const tweetSchema = new mongoose.Schema({
  text: String,
});

const Tweet = mongoose.model('Tweet', tweetSchema);

// Route for fetching all tweets
app.get('/api/tweets', async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    res.status(500).json({ error: 'Failed to fetch tweets' });
  }
});

// Route for adding a new tweet
app.post('/api/tweets', async (req, res) => {
  try {
    const { text } = req.body;
    const newTweet = await Tweet.create({ text });
    res.json(newTweet);
  } catch (error) {
    console.error('Error adding tweet:', error);
    res.status(500).json({ error: 'Failed to add tweet' });
  }
});

// Route for deleting a tweet
app.delete('/api/tweets/:tweetId', async (req, res) => {
  try {
    const { tweetId } = req.params;
    await Tweet.findByIdAndDelete(tweetId);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting tweet:', error);
    res.status(500).json({ error: 'Failed to delete tweet' });
  }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

