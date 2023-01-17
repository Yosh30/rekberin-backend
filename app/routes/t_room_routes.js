module.exports = app => {

    const t_room = require('../controller/t_room_controller');

    const router = require('express').Router();

    //create a new User
    router.post("/" , t_room.create);

    //Retrieve all User
    router.get("/",  t_room.findAll);

    app.use('/api/room', router);
}