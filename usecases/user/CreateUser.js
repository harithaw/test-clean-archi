const user = require("../../entities/Users");

function CreateUser( username, password, firstname, dob, userRepository){

    //bussiness rule validations
    if(!username || !password || !firstname || !dob){
        throw new Error('validation failed');
    }

    //create new user object
    let newUser  = new user(username, password, firstname, dob);

    //add new user to DB
    userRepository.add(newUser);
    

    return newUser;
}

module.exports = {
    CreateUser
}