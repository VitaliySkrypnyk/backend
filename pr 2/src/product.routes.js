const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

// handle get request for path /products
router.get('/products', (request, response) => {
   return response.json(products);
});

// handle get request for path /products/:brand
router.get('/products/:brand', blockSpecialBrand, (request, response) => {
   const { brand } = request.params;

   const filteredProducts = products.filter(product => product.brand === brand);

   response.json(filteredProducts);
});

// additional task: route by id
router.get('/products/id/:id', (request, response) => {
   const { id } = request.params;
   const product = products.find(product => String(product.id) === String(id));

   if (!product) {
      return response.status(404).json({ message: 'Product not found' });
   }

   return response.json(product);
});

// error route
router.get('/productswitherror', (request, response) => {
   let err = new Error('processing error');
   err.statusCode = 400;
   throw err;
});

module.exports = router;
