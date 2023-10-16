async function GetUser (id, userRepository) {
  if (!id) {
    throw new Error('id empty')
  }

  // get user from database
  const user = userRepository.getById(id)

  return user
}

module.exports = GetUser
