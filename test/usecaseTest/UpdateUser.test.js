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

})