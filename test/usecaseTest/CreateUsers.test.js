const CreateUser = require("../../usecases/user/CreateUser");
const inMemoryUserDB = require("../../db/repository/inMemoryUserDB");

describe("Create User", () => {
    let testUser;
    let db1;

    beforeEach(() => {
        testUser = {id: 1, username : "testUser", password : "testPassword", firstname : "testMan", dob : "2000"}
        db1 = new inMemoryUserDB();
    })

    test("should create a user", async () => {
        expect(await CreateUser(testUser.username,testUser.password,testUser.firstname,testUser.dob, db1)).toEqual(testUser)
    })


    test("should throw an error for empty parameters", () => {
        expect( async () => {
            await CreateUser(testUser.username,"",testUser.firstname,testUser.dob, db1)
        }).rejects.toThrow("parameter empty")
    })
})





