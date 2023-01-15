const db = require('../models');
const M_resolution_center_chat = db.m_resolution_center_chat;
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
    const m_resolution_center_chat = {
        id: req.body.id,
        resolution_id: req.body.resolution_id,
        seller_id: req.body.seller_id,
        buyer_id: req.body.buyer_name,
    }

    //Save User to database
    M_resolution_center_chat.create(m_resolution_center_chat)
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
        // const sender_name = req.query.resolution_id;
        // var condition = sender_name ? { sender_name: { [Op.iLike]: `%{id}%` } } : null;
        M_resolution_center_chat.findAll()
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