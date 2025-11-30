// product.routes.js
const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

// GET /products - повертає всі продукти
router.get('/products', (req, res) => {
  return res.json(products);
});

// GET /products/:brand - повертає продукти за брендом (має middleware блокування Brand C)
router.get('/products/:brand', blockSpecialBrand, (req, res) => {
  const { brand } = req.params;
  const filteredProducts = products.filter(p => p.brand === brand);
  return res.json(filteredProducts);
});

// Додаткове завдання: GET /product/:id - повертає продукт за id
router.get('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.json(product);
});

// Маршрут, що навмисно кидає помилку (для демонстрації error handler)
router.get('/productswitherror', (req, res) => {
  const err = new Error('processing error');
  err.statusCode = 400;
  throw err;
});

module.exports = router;
