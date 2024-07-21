// backend/routes/templateRoutes.js
const express = require('express');
const router = express.Router();
const templates = require('../templates');

router.get('/templates', (req, res) => {
  res.json(templates);
});

module.exports = router;
