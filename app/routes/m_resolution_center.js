module.exports = app => {

    const m_user_resolution_center = require('../controller/m_resolution_center_controller');

    const router = require('express').Router();

    //create a new User
    router.post("/" , m_user_resolution_center.create);

    //Retrieve all User
    router.get("/",  m_user_resolution_center.findAll);

    app.use('/api/solution-center', router);
}