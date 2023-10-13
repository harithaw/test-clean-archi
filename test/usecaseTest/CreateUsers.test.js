const {CreateUser} = require("../../usecases/user/CreateUser");
const inMemoryUserDB = require("../../db/repository/inMemoryUserDB");


describe("Create User", () => {
    let testUser;
    let db1;

    beforeEach(() => {
        testUser = {username : "testUser", password : "testPassword", firstname : "testMan", dob : "2000"}
        db1 = new inMemoryUserDB();
    })

    test("should properly create a user", () => {
        expect(CreateUser(testUser.username,testUser.password,testUser.firstname,testUser.dob, db1)).toEqual(testUser)
    })


    test("should throw an error for empty parameters", () => {
        expect(() => {
            CreateUser(testUser.username,"",testUser.firstname,testUser.dob, db1)
        }).toThrow("parameter empty")
    })
})





