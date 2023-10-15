module.exports = class UserRepository{
    constructor() { }

    add(user) {
        return Promise.reject(new Error('not implemented'));
    }

    updateById(userId, data){
        return Promise.reject(new Error('not implemented'));
    }
    
    delete(userId){
        return Promise.reject(new Error('not implemented'));
    }

    getById(userId){
        return Promise.reject(new Error('not implemented'));
    }

    getAll() {
        return Promise.reject(new Error('not implemented'));
    }

}