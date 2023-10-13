const UserRepository = require("../../entities/UserRepository");

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
        
        return this.users[this.users.length-1];
    }

    async getAll(){
        return this.users;
    }
}