const express = require('express');
const app = express();

// CORS対応
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// HotPepper API
app.get('/api/hotpepper', async (req, res) => {
  try {
    const baseUrl = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/';
    const { budget } = req.query;

    const params = new URLSearchParams({
      key: '52b91f15b1d55058',
      large_area: 'Z063',
      range: '5',
      count: '50',
      genre: 'G014',
      format: 'json',
    });

    if (budget) {
      params.append('budget', budget);
    }

    const response = await fetch(`${baseUrl}?${params.toString()}`);
    console.log(`Fetching: ${response.url}`); // デバッグ用
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'API error' });
  }
});


app.listen(5000, () => {
  console.log('Server running on port 5000');
});