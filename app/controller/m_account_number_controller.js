const db = require('../models');
const M_account_number = db.m_account_number
const Op = db.Sequelize.Op;

//Create and save a new Role 
    exports.create = (req, res) => {
        //validate Req 
        if(!req.body.account_name || !req.body.account_number || !req.body.account_destination_id ) {
            res.status(400).send({
                message: "Cant Save check your Requetst"
            });
            return;
        }

    const m_account_number = {
        id: req.body.id,
        user_id: req.body.user_id,
        account_name: req.body.account_name,
        account_number: req.body.account_number,
        account_destination_id: req.body.account_destination_id
    }

    M_account_number.create(m_account_number)
    .then(data=> {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Errow whike trying to create table."
        });
    });

}


exports.findAll = (req, res) => {
    const account_name = req.query.account_number;
    var condition = account_name ? { account_name: {[Op.iLike]: `%{account_name}%`}} : null;
    M_account_number.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || " Error while retrieve data"
        })
    })
}