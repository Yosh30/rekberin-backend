module.exports = app => {

    const m_status = require('../controller/m_status_controller');

    const router = require('express').Router();

    //create a new User
    router.post("/" , m_status.create);

    //Retrieve all User
    router.get("/",  m_status.findAll);

    app.use('/api/status', router);
}