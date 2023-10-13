const UserRepository = require("../../entities/UserRepository");

module.exports = class inMemoryUserDB extends UserRepository{
    constructor(){
        super();
        this.users = [];
        this.currentId = 0;
    }

    init(){
        const user1 = {id: 0, username : "testUser01", password : "testPassword1", firstname : "testMan", dob : "2000"}
        const user2 = {id: 1, username : "testUser02", password : "testPassword2", firstname : "testWomen", dob : "1998"}

        this.users.push(user1);
        this.users.push(user2);
        this.currentId=2;
    }

    async add(user){
        try{
            user.id = this.currentId;
            this.users.push(user);
            
        }
        catch (error){
            throw new Error('Error Occurred');
        }
        
        return (this.users[this.currentId++]);
    }

    async getAll(){
        return this.users;
    }
}