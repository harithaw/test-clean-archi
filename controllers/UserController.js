const CreateUser = require("../usecases/user/CreateUser");
const ViewAllUsers = require("../usecases/user/ViewAllUsers");
const GetUser = require("../usecases/user/GetUser");
const DeleteUser = require("../usecases/user/DeleteUser");

module.exports = (database) =>{
    const addNewUser = async(req, res) => {
        // recieve user input
        const { username, password, firstname, dob } = req.body;
    
        // call the usecase and pass the models
        const newUser = await CreateUser(username, password, firstname, dob, database);

        res.status(200).json(newUser);
    }

    const getUser = async(req, res) => {
        //recieve user input
        const { id } = req.params;

        // call the usecase and pass the models
        const user = await GetUser(id, database);
        
        if(!user){
            res.status(404).json({error:"user not found"});
        }
        
        res.status(200).json(user);
    }

    const deleteUser = async (req, res) => {
        //recieve user input
        const { id } = req.params;
        
        // call the usecase and pass the models
        const result = await DeleteUser(id, database);

        if(!result){
            res.status(404).json({error:"user not found"});
        }

        res.status(200).json({success:"user deleted"});
    }

    const getAllUsers = async(req, res) => {
        // call the usecase and pass the models
        const allUsers = await ViewAllUsers(database);

        res.status(200).json(allUsers);
    }

    return{
        addNewUser,
        getAllUsers,
        getUser,
        deleteUser
    }
}







