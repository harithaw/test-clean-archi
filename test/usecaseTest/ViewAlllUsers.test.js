const ViewAllUsers = require("../../usecases/user/ViewAllUsers");
const inMemoryUserDB = require("../../db/repository/inMemoryUserDB");

describe("Get All Users", () => {
    //dummy data
    const user1 = {id: 1, username : "testUser01", password : "testPassword1", firstname : "testMan", dob : "2000"}
    const user2 = {id: 2, username : "testUser02", password : "testPassword2", firstname : "testWomen", dob : "1998"}
    
    let db1;

    beforeEach(() => {
        db1 = new inMemoryUserDB();
        db1.init();
    })

    test("should get all users", async () => {
        expect(await ViewAllUsers(db1)).toEqual([{...user1}, {...user2}])
    })
})