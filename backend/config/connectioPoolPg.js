const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'avaliacao',
  password: 'h4ck3r',
  port: 5432,
})