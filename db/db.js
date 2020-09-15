// ============== DATABASE INFORMATION ============== //
// ============== DATABASE INFORMATION ============== //

const Pool = require("pg").Pool;
require("dotenv").config();

const production = process.env.DATABASE_URL;
const development = 'postgresql://@localhost:5432/xxx'

const pool = new Pool({
    connectionString:
        process.env.NODE_ENV = production || development,
});


// ====================== EXPORT ====================== //
// ====================== EXPORT ====================== //

module.exports = pool;