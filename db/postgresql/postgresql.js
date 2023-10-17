const Pool = require('pg').Pool

const PGconnect = () => {
  const connectionString = 'postgres://admin:GkQItbMVwz0G6Ddqhc3gUNYISooejYCG@dpg-ckmgrfrj89us73cchtsg-a.singapore-postgres.render.com/testdb_nz42?ssl=true'

  const pool = new Pool({
    connectionString
  })

  return pool
}

module.exports = PGconnect
