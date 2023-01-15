const db = require('../models');
const Destination_id = db.destination_id;
const Op = db.Sequelize.Op;

    // //create
    // exports.create = (req, res) => {
    //     if ! 
    // }

exports.create = (req, res) => {


    const destination_id = {
        id:  req.body.id,
        name: req.body.name
    }

    Destination_id.create(destination_id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error while trying to create data"
        });
    });

};

    //Retrieve all User from database
    exports.findAll = (req, res) => {
        const name = req.query.name;
        var condition = name ? { name: { [Op.iLike]: `%{name}%` } } : null;
        Destination_id.findAll({ where: condition})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "error pas retrieve data cuyyy."
                });
            });
    }