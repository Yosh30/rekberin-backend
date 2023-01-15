const db = require('../models');
const M_user = db.m_user;
const Op = db.Sequelize.Op;

//create and save a new userl

exports.create = (req, res) => {
    //validate request 
    if(!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.profile_picture ||  !req.body.phone_number || 
        !req.body.role_id || !req.body.password) {
        res.status(400).send({
            message:"Cant Save"
        });
        return;
    }

    //create a User
    const m_user = {
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        profile_picture: req.body.profile_picture,
        phone_number: req.body.phone_number,
        role_id: req.body.role_id,
        password: req.body.password,
        refferal_code: req.body.refferal_code,
        balance: req.body.balance,
        balance_refferal: req.body.balance_refferal,
        created_by: req.body.created_by,
        modified_by: req.body.modified_by,
    }

    //Save User to database
    M_user.create(m_user)
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
        const first_name = req.query.first_name;
        var condition = first_name ? { first_name: { [Op.iLike]: `%{first_name}%` } } : null;
        M_user.findAll({ where: condition})
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

    exports.findOne = (req, res) => {
        const id = req.params.id; 
        M_user.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Failed to find data."
            })
        })
    }