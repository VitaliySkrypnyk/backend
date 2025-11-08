const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Hello from Express!</h1><p><a href="/about">About</a> | <a href="/contact">Contact</a></p>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About us</h1><p>Це приклад сторінки About.</p>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact us</h1><p>Email: v.s.skrypnyk@student.khai.edu</p>');
});

const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' }
];

app.get('/products/:brand', (req, res) => {
  const { brand } = req.params;
  const filtered = products.filter(p => p.brand === brand);
  res.json(filtered);
});

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}/`);
});
