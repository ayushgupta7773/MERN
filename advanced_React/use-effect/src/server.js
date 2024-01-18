// server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 5173;

app.use(cors());

app.get('/spotifyData', async (req, res) => {
  try {
    const response = await fetch('https://open.spotify.com/track/1NPEUdteVjbCK9Z9fljNaz?si=a29b78ae895c471a');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
