const express =  require('express');
const router = express.Router();

const {
    getAll,
    getBySchoolId
} = require('../controllers/schoolController');

/**
 * @swagger
 * components:
 *   schemas:
 *     School:
 *       type: object
 *       required:
 *         - id
 *         - school_id
 *         - name
 *         - address
 *         - postal_code
 *         - email
 *         - education_level
 *         - environment
 *         - school_type
 *         - country_id
 *         - country
 *         - location_id
 *         - admin_1_name
 *         - admin_2_name
 *         - admin_3_name
 *         - admin_4_name
 *       properties:
 *         id:
 *           type: int
 *           description: The unique id of the country
 *         code:
 *           type: string
 *           description: country code
 *         name:
 *           type: string
 *           description: country name
 *       example:
 *         id: 144
 *         code: BR
 *         name: Brazil
 */

/**
 * @swagger
 * /api/v1/schools:
 *   get:
 *     summary: Returns the list of 50 schools data
 *     tags: [School]
 *     responses:
 *       200:
 *         description: The list of the schools
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/School'
 */
 router.get('/', getAll);



/**
 * @swagger
 * /api/v1/schools/{school_id}:
 *   get:
 *     summary: Get a school by school_id
 *     tags: [School]
 *     parameters:
 *       - in: path
 *         name: school_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The school id
 *     responses:
 *       200:
 *         description: The school information filtered by school_id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *       404:
 *         description: The country was not found
 */

 router.get('/:school_id', getBySchoolId);





module.exports = router;