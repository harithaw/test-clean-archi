async function DeleteUser(id, userRepository){
    if(!id){
        throw new Error("id empty")
    }

    //delete user from database
    const result = await userRepository.delete(id);

    return result;
}

module.exports = DeleteUser;