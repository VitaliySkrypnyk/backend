// middleware.js

function logRequest(req, res, next) {
  console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
  next();
}

function blockSpecialBrand(req, res, next) {
  // Працює лише якщо параметр brand є у params
  if (req.params && req.params.brand === 'Brand C') {
    return res.status(403).send('Unavailable Brand');
  }
  next();
}

module.exports = { logRequest, blockSpecialBrand };
