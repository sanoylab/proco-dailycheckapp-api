const express = require('express');

const router = express.Router();

const countries = require('./country');
const schools = require('./school');
const dailycheckApp = require('./dailycheckapp_school')



router.use('/countries', countries);
router.use('/schools', schools);
router.use('/dailycheckapp_schools', dailycheckApp)

module.exports = router;