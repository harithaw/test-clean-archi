const User = require('../../entities/Users')

async function CreateUser (username, password, firstname, dob, userRepository) {
  // bussiness rule validations
  if (!username || !password || !firstname || !dob) {
    throw new Error('parameter empty')
  }

  // create new user object
  let newUser = new User(null, username, password, firstname, dob)

  // add new user to DB
  newUser = userRepository.add(newUser)

  return newUser
}

module.exports = CreateUser
