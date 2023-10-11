const {CreateUser} = require("../usecases/CreateUser");

module.exports = (database) =>{
    const addNewUser = async(req, res) => {
        // recieve userinput
        const { username, password, firstname, dob } = req.body;

        // validate userinput
        // convert into model what use case expects
    
        // call the usecase and pass the models
        const newUser = CreateUser(username, password, firstname, dob, database);

        res.status(200).json(newUser);
    }

    const getAllUsers = async(req, res) => {
        
    }

    return{
        addNewUser
    }
}







