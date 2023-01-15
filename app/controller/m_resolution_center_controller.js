const db = require('../models');
const M_resolution_center = db.m_resolution_center;
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
    const m_resolution_center = {
        id: req.body.id,
        trx_id: req.body.trx_id,
        name: req.body.name,
        description: req.body.description,
        solution_type: req.body.solution_type,
        solution_value: req.body.solution_value,
        status_id: req.body.status_id,
        created_by: req.body.created_by,
        modified_by: req.body.modified_by,
    }

    //Save User to database
    M_resolution_center.create(m_resolution_center)
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
        const name = req.query.name;
        var condition = name ? { name: { [Op.iLike]: `%{name}%` } } : null;
        M_resolution_center.findAll({ where: condition})
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