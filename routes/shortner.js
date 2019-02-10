const express = require('express');
const router = express.Router();
const { getShortUrl, postUrl } = require('../controllers/shortner');

router.get('/:id', getShortUrl);

router.post('/new', postUrl);

module.exports = router;
