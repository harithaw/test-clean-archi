const CreateUser = require("../usecases/user/CreateUser");
const {ViewAllUsers} = require("../usecases/user/ViewAllUsers");

module.exports = (database) =>{
    const addNewUser = async(req, res) => {
        // recieve userinput
        const { username, password, firstname, dob } = req.body;
    
        // call the usecase and pass the models
        const newUser = await CreateUser(username, password, firstname, dob, database);

        res.status(200).json(newUser);
    }

    const getAllUsers = async(req, res) => {
        const allUsers = await ViewAllUsers(database);

        res.status(200).json(allUsers);
    }

    return{
        addNewUser,
        getAllUsers
    }
}







