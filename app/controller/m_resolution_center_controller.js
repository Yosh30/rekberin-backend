const db = require('../models');
const M_resolution_center = db.m_resolution_center;
const Op = db.Sequelize.Op;


exports.create = async (req, res) => {
    
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

    try {
        const m_res_cent = await M_resolution_center.create(m_resolution_center)
        res.status(200).json(m_res_cent)
    } catch(err){
        res.status(500).send({
            message:
                err.message || " error while trying to create data."
        })
    }
}

exports.findAll = async (req, res) => {

    const name = req.query.name
    var condition = name ? {name : {[Op.iLike]: `%{name}%`}} : null;
    try {
    const m_res_cent_find = await M_resolution_center.findAll({ where: condition });
    res.status(200).json(m_res_cent_find)
    } catch (err) {
        res.status(500).send({
            message:
                err.message
        })
    }
}
  