const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.send('Sending the user info!');
})

router.post('/create', (req, res) => {
  res.send('creating a new user')
})



module.exports = router