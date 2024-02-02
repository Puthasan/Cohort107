const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Sending Product info...')
});

router.post('/create', (req, res) => {
  res.send('Creating a new Product')
});


module.exports = router;