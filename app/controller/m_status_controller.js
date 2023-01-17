const db = require('../models');
const M_status = db.m_status;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    const m_status = {
        id: req.body.id,
        status_code: req.body.status_code,
        status_name: req.body.status_name
    }

    try {
        const m_status_cr = await M_status.create(m_status)
        res.status(200).json(m_status_cr)
    } catch (err) {
        res.status(500).send({
            message:
                err.message || " error while trying to create data."
        })
    }
}

exports.findAll = async (req, res) => {
    const status_code = req.query.status_code
    var condition = status_code ? {name : {[Op.iLike]: `%{status_code}%`}} : null;
    try {
    const m_status_find = await M_status.findAll({ where: condition });
    res.status(200).json(m_status_find)
    } catch (err) {
        res.status(500).send({
            message:
                err.message
        })
    }
}
