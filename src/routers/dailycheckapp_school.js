const express =  require('express');
const router = express.Router();

const {
    getAll,
    createDailycheckappSchool
} = require('../controllers/dailycheckapp_schoolController');

/**
 * @swagger
 * components:
 *   schemas:
 *     DailyCheckAppSchool:
 *       type: object
 *       required:
 *         - school_id
 *         - giga_id
 *         - country_id
 *         - os
 *         - ip_address
 *         - mac_address
 *         - app_version
 *       properties:
 *         school_id:
 *           type: string
 *           description: A school id provided by government
 *         giga_id:
 *           type: string
 *           description: A unique giga id
 *         country_id:
 *           type: int
 *           description: Country id
 *         os:
 *           type: string
 *           description: Operating system
 *         ip_address:
 *           type: string
 *           description: IP address 
 *         mac_address:
 *           type: string
 *           description: MAC address 
 *         created:
 *           type: date
 *           descripton: Created date
 *         app_version:
 *           type: string
 *           description: Daily check app version
 *       example:
 *         school_id: 25pjn0242r
 *         giga_id: fd75dc75-1f13-4b66-b0ab-91ee8f464eac
 *         country_id: 146
 *         os: Windows
 *         ip_address: 127.0.0.1
 *         mac_address: 2C:54:91:88:C9:E3
 *         created: 2022-01-01
 *         app_version: 1.0.0      
 */


/**
 * @swagger
 * /api/v1/dailycheckapp_schools:
 *   get:
 *     summary: Returns the list of registered schools on the Daily Check App database
 *     tags: [Daily Check App Schools]
 *     responses:
 *       200:
 *         description: The list of schools
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DailyCheckAppSchool'
 */
 router.get('/', getAll);

/**
 * @swagger
 * /api/v1/dailycheckapp_schools:
 *   post:
 *     summary: Register a school in to the Daily Check App database
 *     tags: [Daily Check App Schools]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DailyCheckAppSchool'
 *     responses:
 *       200:
 *         description: The school was successfully added to PCDC database
 *       500:
 *         description: Some server error
 */
 router.post('/', createDailycheckappSchool);




module.exports = router;