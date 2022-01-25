const knex = require('knex')

require("dotenv").config();

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'docker',
    user: '123456',
    password: 'db',
    database: 'postgres',
  },
})


