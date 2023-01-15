module.exports = app => {

    const m_account_number = require('../controller/m_account_number_controller.js');

    const router = require('express').Router();

    //create a new User
    router.post("/" , m_account_number.create);

    //Retrieve all User
    router.get("/", m_account_number.findAll);

    app.use('/api/account-number', router);
}