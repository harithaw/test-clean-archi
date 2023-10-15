const UpdateUser = require("../../usecases/user/UpdateUser");
const inMemoryUserDB = require("../../db/repository/inMemoryUserDB");

describe("Update User", () =>{
    let db1;
    const user2 = {id: 2, username : "editTestUser02", password : "editTestPassword2", firstname : "testWomen", dob : "1998"}

    beforeEach(() => {
        db1 = new inMemoryUserDB();
        db1.init();
    })

    test("should update a user", async () => {
        expect( await UpdateUser(user2.id, {username:"editTestUser02", password : "editTestPassword2"}, db1)).toEqual(user2);
    })

    test("should get undefined for missing user", async () => {
        expect( await UpdateUser(4, {username:"editUserName"}, db1)).toBe(undefined);
    })

    test("should throw an error for missing data", () => {
        expect( async () =>{
            await UpdateUser(user2.id, {}, db1)
        }).rejects.toThrow("no data to update");
    })

})