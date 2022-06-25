require('dotenv').config();
const express = require('express');
const router = express.Router();

const apiKey = process.env.API_KEY;

router.get('/requestkey', (req, res) =>{
  res.status(200).json({key: apiKey});
});

module.exports = router;
