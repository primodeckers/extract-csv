
module.exports = {

  client: 'postgresql',
  connection: {
    database: 'postgres',
    user:     'postgres',
    password: 'h4ck3r'
    
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
     tableName: 'knex_migrations'
  }













  


};

