const db = require('../models');
const M_account_number = db.m_account_number
const Op = db.Sequelize.Op;

//Create and save a new Role 

exports.create = async (req, res) => {
    
const m_account_number = {
    id: req.body.id,
    user_id: req.body.user_id,
    account_name: req.body.account_name,
    account_number: req.body.account_number,
    account_destination_id: req.body.account_destination_id
}

    try {
        const m_acc_num = await M_account_number.create(m_account_number);
        res.status(200).json(m_acc_num)
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || " error while trying to save data."
        })
    }
} 




exports.findAll = async (req, res) => {
    const account_name = req.query.account_number;
    var condition = account_name ? { account_name: {[Op.iLike]: `%{account_name}%`}} : null;

    try {
        const m_acc_num = await M_account_number.findAll({ where: condition})
        res.status(200).json(m_acc_num)
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "error to find data."
        })
    }
}