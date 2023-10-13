const DeleteUser =  require("../../usecases/user/DeleteUser");
const inMemoryUserDB = require("../../db/repository/inMemoryUserDB");

describe("Delete User", () => {
    let db1;

    beforeEach(() => {
        db1 = new inMemoryUserDB();
        db1.init();
    })

    test("should delete a user", async () => {
        expect( await DeleteUser(1,db1)).toBe(true);
    })

    test("should throw an error for empty paramaters", () => {
        expect( async() => {
            await DeleteUser("", db1)
        }).rejects.toThrow("id empty");
    })
})