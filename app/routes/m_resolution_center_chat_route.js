module.exports = app => {

    const m_user_resolution_center_chat = require('../controller/m_resolution_center_chat_controller');

    const router = require('express').Router();

    //create a new User
    router.post("/" , m_user_resolution_center_chat.create);

    //Retrieve all User
    router.get("/",   m_user_resolution_center_chat.findAll);

    app.use('/api/solution-center-chat', router);
}