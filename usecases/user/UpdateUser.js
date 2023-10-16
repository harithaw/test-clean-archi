async function UpdateUser (id, data, userRepository) {
  if (!id) {
    throw new Error('id empty')
  }

  if (data && Object.keys(data).length === 0 && data.constructor === Object) {
    throw Error('no data to update')
  }

  // update user at database
  const user = userRepository.updateById(id, data)

  return user
}

module.exports = UpdateUser
