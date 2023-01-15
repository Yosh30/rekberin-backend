const db = require('../models');
const M_resolution_center_detail = db.m_resolution_center_detail;
const Op = db.Sequelize.Op;

//create and save a new userl

exports.create = (req, res) => {
    //validate request 
    // if(!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.profile_picture ||  !req.body.phone_number || 
    //     !req.body.role_id || !req.body.password) {
    //     res.status(400).send({
    //         message:"Cant Save"
    //     });
    //     return;
    // }

    //create a User
    const m_resolution_center_detail = {
        id: req.body.id,
        resolution_id: req.body.resolution_id,
        sender_id: req.body.sender_id,
        sender_name: req.body.sender_name,
        sending_time: req.body.sending_time
    }

    //Save User to database
    M_resolution_center_detail.create(m_resolution_center_detail)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Error while trying to create table"
        });
    });
};

    //Retrieve all User from database
    exports.findAll = (req, res) => {
        const sender_name = req.query.sender_name;
        var condition = sender_name ? { sender_name: { [Op.iLike]: `%{sender_name}%` } } : null;
        M_resolution_center_detail.findAll({ where: condition})
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