const UserRepository = require("../../entities/UserRepository");

module.exports = class inMemoryUserDB extends UserRepository {
    constructor() {
        super();
        this.users = [];
        this.currentId = 1;
    }

    init() {
        const user1 = { id: 1, username: "testUser01", password: "testPassword1", firstname: "testMan", dob: "2000" }
        const user2 = { id: 2, username: "testUser02", password: "testPassword2", firstname: "testWomen", dob: "1998" }

        this.users.push(user1);
        this.users.push(user2);
        this.currentId = 3;
    }

    async add(user) {
        try {
            user.id = this.currentId;
            this.users.push(user);
            this.currentId++;
        }
        catch (error) {
            throw new Error('Error Occurred');
        }

        return user;
    }

    async updateById(userId, data) {

        const user = await this.getById(userId);

        if (!user){
            return user;
        }

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

    async delete(userId) {
        let result = false;
        try {
            const id = parseInt(userId);
            const userIndex = this.users.findIndex((u) => u.id === id)

            if (userIndex !== -1) {
                this.users.splice(userIndex, 1);
                result = true;
            }
        }
        catch (err) {
            throw new Error('Error Occurred');
        }

        return result
    }

    async getById(userId) {
        let user;
        try {
            const id = parseInt(userId);
            user = this.users.find((u) => u.id === id)
        }
        catch (err) {
            throw new Error('Error Occurred');
        }

        return user;
    }

    async getAll() {
        return this.users;
    }
}