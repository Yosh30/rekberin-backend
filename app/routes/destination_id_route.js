module.exports = app => {

    const destination_id = require('../controller/destination_id_controller.js');

    const router = require('express').Router();

    //create a new User
    router.post("/" , destination_id.create);

    //Retrieve all User
    router.get("/", destination_id.findAll);

    app.use('/api/destinationId', router);
}