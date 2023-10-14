async function UpdateUser(id, data, userRepository){

    const user = await userRepository.getById(id);

    if (data.hasOwnProperty('username')) {
        user.username = data.username;
    }

    if (data.hasOwnProperty('password')) {
        user.password = data.password;
    }

    if (data.hasOwnProperty('firstname')) {
        user.firstname = data.firstname;
    }

    if (data.hasOwnProperty('dob')) {
        user.dob = data.dob;
    }

    return user;
}

module.exports = UpdateUser;