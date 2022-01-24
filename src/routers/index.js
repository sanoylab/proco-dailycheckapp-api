const express = require('express');

const router = express.Router();

const countries = require('./country');
const schools = require('./school');



router.use('/countries', countries);
router.use('/schools', schools);

module.exports = router;