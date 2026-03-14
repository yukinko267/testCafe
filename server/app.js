const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
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
      count: '100',
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

// メニュースクレイピング用エンドポイント
app.get('/api/scrape-menu', async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const menuItems = [];

    // メニュー情報の抽出（実際のHTML構造に応じて調整が必要）
    $('.menu-item').each((i, element) => {
      const name = $(element).find('.menu-name').text().trim();
      const price = $(element).find('.menu-price').text().trim().replace(/[^\d]/g, '');
      
      if (name) {
        menuItems.push({
          name,
          price: price || null
        });
      }
    });

    res.json(menuItems);
  } catch (error) {
    console.error('Scraping error:', error);
    res.status(500).json({ error: 'Failed to scrape menu' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});