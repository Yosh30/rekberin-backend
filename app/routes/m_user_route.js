module.exports = app => {

    const m_user = require('../controller/m_user_controller.js');

    const router = require('express').Router();

    //create a new User
    router.post("/" , m_user.create);

    //Retrieve all User
    router.get("/", m_user.findAll);

    router.get("/first_name",m_user.findAll)

    //Retrieve a single data
    router.get("/:id", m_user.findOne);

    app.use('/api/user', router);
}