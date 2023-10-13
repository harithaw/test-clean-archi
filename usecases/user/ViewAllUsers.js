async function ViewAllUsers(userRepository){
    const users = userRepository.getAll();

    return users;
}

module.exports = ViewAllUsers;