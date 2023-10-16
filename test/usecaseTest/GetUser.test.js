/* eslint-disable no-undef */
const GetUser = require('../../usecases/user/GetUser')
const InMemoryUserDB = require('../../db/repository/inMemoryUserDB')

describe('Get User', () => {
  // dummy data
  const user1 = { id: 1, username: 'testUser01', password: 'testPassword1', firstname: 'testMan', dob: '2000' }

  let db1

  beforeEach(() => {
    db1 = new InMemoryUserDB()
    db1.init() // add dummy data to DB
  })

  test('should get a object for valid user', async () => {
    expect(await GetUser(1, db1)).toEqual(user1)
  })

  test('should get undefined for missing user', async () => {
    expect(await GetUser(4, db1)).toEqual(undefined)
  })

  test('should throw an error for empty id parameter', () => {
    expect(async () => {
      await GetUser('', db1)
    }).rejects.toThrow('id empty')
  })
})
