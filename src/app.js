const express = require('express');
const app = express();

app.use(express.json());

// Endpoint GET danh sách sản phẩm
app.get('/api/products', (req, res) => {
  res.status(200).json([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ]);
});

// Endpoint POST thêm sản phẩm
app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  res.status(201).json({ id: Date.now(), name, price });
});

module.exports = app;
