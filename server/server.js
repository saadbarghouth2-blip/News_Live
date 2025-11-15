const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const GNEWS_API_KEY = process.env.GNEWS_API_KEY;

app.use(cors());
app.use(express.json());

if (!GNEWS_API_KEY) console.warn('GNEWS_API_KEY not set in .env');

app.get('/api/news', async (req, res) => {
  try {
    const q = req.query.q || '';
    const lang = req.query.lang || 'ar';
    const max = Math.min(parseInt(req.query.max || '12', 10), 50);
    const page = Math.max(1, parseInt(req.query.page || '1', 10));
    const category = req.query.category || '';

    let url = `https://gnews.io/api/v4/top-headlines?lang=${lang}&max=${max}&page=${page}&apikey=${GNEWS_API_KEY}`;
    if (q) url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&lang=${lang}&max=${max}&page=${page}&apikey=${GNEWS_API_KEY}`;
    if (category) url += `&topic=${encodeURIComponent(category)}`;

    const r = await fetch(url);
    const data = await r.json();
    return res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error', details: err.message });
  }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
