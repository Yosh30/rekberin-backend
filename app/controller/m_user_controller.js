const db = require('../models');
const M_user = db.m_user;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const { where } = require('sequelize');

//create and save a new userl

exports.create = async (req, res) => {
    //validate field
    if(!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.profile_picture ||  !req.body.phone_number || 
        !req.body.role_id || !req.body.password) {
        res.status(400).send({
            message:"Cant Save, check fields"
        });
        return;
    }
    
    //validate email
    const emailFormat = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const validateEmail = emailFormat.test(req.body.email);
    
    const checkEmail = await M_user.findOne({
        where: {
            email: req.body.email
        }
    });

    if (!validateEmail ) {
        res.status(400).send({
            message: "Cek Format Email."
        })
    } else if (checkEmail ) {
            res.status(400).send({
                message: "Email yang anda masukan telah digunakan."
            })
        } else {
                //password
                const salt = bcrypt.genSaltSync(10);
                const password = bcrypt.hashSync(req.body.password, salt); 

                //create a User
                const m_user = {
                    id: req.body.id,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    profile_picture: req.body.profile_picture,
                    phone_number: req.body.phone_number,
                    role_id: req.body.role_id,
                    password: password,
                    refferal_code: req.body.refferal_code,
                    balance: req.body.balance,
                    balance_refferal: req.body.balance_refferal,
                    created_by: req.body.created_by,
                    modified_by: req.body.modified_by,
                }

                try {
                    const saveUser = await M_user.create(m_user)
                    res.status(200).json(saveUser);
                    // console.log(saveUser);
                } catch (err) {
                    res.status(500).send({
                        message: 
                        err.message || "Failed to create data."
                    })
                }
        }

};

 //Retrieve all User from database
    exports.findAll = async (req, res) => {
        const first_name = req.query.first_name;
        var condition = first_name ? { first_name: { [Op.iLike]: `%{first_name}%` } } : null;
        try {
            const m_user = await M_user.findAll({ where: condition} );
            res.status(200).json(m_user);
        } catch(err) {
            res.status(500).send({
                message: 
                err.message || "retrieve data to database error."
            })
        }
    }
   


//find one
    exports.findOne = async (req, res) => {
        try {
            const m_user = await M_user.findByPk(req.params.id)
            res.status(200).json(m_user);
        } catch(err) {
            res.status(500).send({
                message:
                err.message || "error while find data."
            })
        }
    }
   