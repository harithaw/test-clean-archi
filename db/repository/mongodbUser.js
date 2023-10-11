const UserRepository = require("../../entities/UserRepository");
const User = require('../mongodb/schema/UserSchema');

module.exports = class mongodbUser extends UserRepository {
    constructor(){
        super();
    }

    async add(user){
        const { username, password, firstname, dob } = user;

        try{
            await User.create({ username, password, firstname, dob });
        }
        catch(error){
            throw new Error('Error Occurred');
        }

        return user
    }

    async getAll(){
        const user = await User.find({});

        return user;
    }
}