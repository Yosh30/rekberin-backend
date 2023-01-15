const { m_role } = require('../models');
const db = require('../models');
const M_role = db.m_role;
const Op = db.Sequelize.Op;

    // //create
    // exports.create = (req, res) => {
    //     if ! 
    // }

exports.create = (req, res) => {


    const m_role = {
        id:  req.body.id,
        role_name: req.body.role_name
    }

    M_role.create(m_role)
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
        const role_name = req.query.role_name;
        var condition = role_name ? { role_name: { [Op.iLike]: `%{role_name}%` } } : null;
        m_role.findAll({ where: condition})
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