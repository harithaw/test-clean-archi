const UserRepository = require("../entities/UserRepository");

module.exports = class inMemoryUserDB extends UserRepository{
    constructor(){
        super();
        this.users = [];
        this.currentId = 0;
    }

    async add(user){
        try{
            this.users.push(user);
        }
        catch (error){
            throw new Error('Error Occurred');
        }

        return user;
    }

    async getAll(){
        return this.users;
    }
}