const errorResponder = (err, req, res, next) => {
  // Якщо статус не заданий — 500
  const status = err && err.statusCode ? err.statusCode : 500;

  // Безпечна відповідь: тільки повідомлення (без stack) — як у вимозі
  res.header('Content-Type', 'application/json');
  res.status(status).send(JSON.stringify({ error: err.message || 'Internal Server Error' }));
};

module.exports = { errorResponder };
