const db = require('../models');
const M_role = db.m_role;
const Op = db.Sequelize.Op;


exports.create = async (req, res) => {

    const m_role = {
        id:  req.body.id,
        role_name: req.body.role_name
    }


    try {
        const m_role_cr = await M_role.create(m_role);
        res.status(200).json(m_role_cr)
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error while trying to create table"
        });
    }
}


exports.findAll = async (req, res) => {
    const role_name = req.query.role_name;
    var condition = role_name ? { role_name: { [Op.iLike]: `%{role_name}%`} } : null;
    try {
        const role_name_find = await M_role.findAll({ where: condition })
        res.status(200).json(role_name_find);
    } catch (err) {
        res.status(500).send({
            message:
            err.message || "Error while trying to create data"
        });

    }
}

