module.exports = app => {

    const m_user_resolution_center_detail = require('../controller/m_resolution_center_detail_controller');

    const router = require('express').Router();

    //create a new User
    router.post("/" , m_user_resolution_center_detail.create);

    //Retrieve all User
    router.get("/", m_user_resolution_center_detail.findAll);

    app.use('/api/solution-center-detail', router);
}