const UserRepository = require('../../entities/UserRepository')

module.exports = class PostgresqlUser extends UserRepository {
  constructor (pool) {
    super()
    this.pool = pool
  }

  async add (user) {
    const { username, password, firstname, dob } = user
    let newUser

    try {
      newUser = await this.pool.query('INSERT INTO users (username, password, firstname, dob) values ($1, $2, $3, $4) RETURNING *', [username, password, firstname, dob])
    } catch (error) {
      throw new Error(error)
    }

    return newUser.rows[0]
  }

  async updateById (userId, data) {
    let user = await this.getById(userId)

    if (!user) {
      return user
    }

    if (data.hasOwnProperty('username')) {
      user.username = data.username
    }

    if (data.hasOwnProperty('password')) {
      user.password = data.password
    }

    if (data.hasOwnProperty('firstname')) {
      user.firstname = data.firstname
    }

    if (data.hasOwnProperty('dob')) {
      user.dob = data.dob
    }

    try {
      user = await this.pool.query('UPDATE users SET username=$1, password=$2, firstname=$3, dob=$4  WHERE id = $5 RETURNING *',
        [user.username, user.password, user.firstname, user.dob, user.id])
    } catch (error) {
      throw new Error(error)
    }

    return user.rows[0]
  }

  async delete (userId) {
    let user
    try {
      const id = parseInt(userId)
      user = await this.pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id])
    } catch (error) {
      throw new Error(error)
    }

    if (user.rowCount === 0) {
      return false
    }

    return true
  }

  async getById (userId) {
    let user
    try {
      const id = parseInt(userId)
      user = await this.pool.query('SELECT * FROM users WHERE id = $1', [id])
    } catch (error) {
      throw new Error(error)
    }

    return user.rows[0]
  }

  async getAll () {
    let users
    try {
      users = await this.pool.query('SELECT * FROM users ORDER BY id ASC')
    } catch (error) {
      throw new Error(error)
    }

    return users.rows
  }
}
