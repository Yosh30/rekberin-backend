module.exports = app => {

    const t_room_detail = require('../controller/t_room_detail_controller');

    const router = require('express').Router();

    //create a new User
    router.post("/" , t_room_detail.create);

    //Retrieve all User
    router.get("/",  t_room_detail.findAll);

    app.use('/api/room-detail', router);
}