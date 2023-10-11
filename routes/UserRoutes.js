const express = require('express');
const UserController = require("../controllers/UserController");

const UserRouter = (database) => {
    const router = express.Router();

    const controller = UserController(database);

    router.route('/')
        .post(controller.addNewUser)
        .get(controller.getAllUsers);

    return router;
}

module.exports = UserRouter;