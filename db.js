const { Pool } = require('pg');

const pool = new Pool({
    user: 'oswaldopineda',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

module.exports = pool;