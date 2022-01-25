const db = require('../db');

(async () => {
    try {
      await db.schema.dropTableIfExists('locations_country')
      await db.schema.withSchema('public').createTable('locations_country', (table) => {
        table.integer('id')
        table.string('name')
        table.string('code')
        table.string('flag')
      })
      console.log('Country table created!')


      await db.schema.dropTableIfExists('schools_school')
      await db.schema.withSchema('public').createTable('schools_school', (table) => {
        table.integer('id')
        table.string('external_id')
        table.string('name')
        
        table.string('address')
        table.string('postal_code')
        table.string('email')
        table.string('education_level')
        table.string('environment')
        table.string('school_type')
        table.integer('country_id')
        table.string('country')
        table.integer('location_id')
        table.string('admin_2_name')
        table.string('admin_3_name')
        table.string('admin_4_name')
        table.string('admin_1_name')
        table.string('giga_id')
      })
      console.log('School table created!')



      process.exit(0)
    } catch (err) {
      console.log(err)
      process.exit(1)
    }
  })()