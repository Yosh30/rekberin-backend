const m_role = require('../models/m_role.js');

module.exports = app => {

    const m_role = require('../controller/m_role_controller.js');

    const router = require('express').Router();

    //create a new User
    router.post("/" , m_role.create);

    //Retrieve all User
    router.get("/", m_role.findAll);

    app.use('/api/role', router);
}