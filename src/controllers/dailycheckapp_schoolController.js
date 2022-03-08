const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool();

module.exports.getAll = async (req, res) => {
  try {
    let query = `SELECT * FROM dailycheckapp_school ORDER BY created desc;`;

    let result = null;
    try {
      result = await pool.query(query);
    } catch (e) {
      console.log(e);
    }

    res
      .status(200)
      .json({ success: true, timestamp: new Date(), data: result.rows });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};

module.exports.createDailycheckappSchool = async (req, res) => {

  console.log(req.body)

  try {
    const res = await pool.query(
      `
    INSERT INTO dailycheckapp_school(school_id, giga_id, country_id, os, ip_address, mac_address, created,app_version) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
      [
        req.body.school_id,
        req.body.giga_id,
        req.body.country_id,
        req.body.os,
        req.body.ip_address,
        req.body.mac_address,
        req.body.created,
        req.body.app_version
      ]
    );

    //const company = new Company(req.body);
    // await company.save();
    res.send({success: true, timestamp: new Date(), data: [req.body]} ).status(200);
  } catch (e) {
    res.send(e).status(500);
  }
};
