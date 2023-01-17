const db = require('../models');
const M_resolution_center_detail = db.m_resolution_center_detail;
const Op = db.Sequelize.Op;


exports.create = async (req, res) => {

    const m_resolution_center_detail = {
        id: req.body.id,
        resolution_id: req.body.resolution_id,
        seller_id: req.body.seller_id,
        buyer_id: req.body.buyer_id,    }

    try {
        const m_res_cen_det = await M_resolution_center_detail.create(m_resolution_center_detail)
        res.status(200).json(m_res_cen_det)
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error while trying to create table"
        });
    }
}

exports.findAll = async(req, res) => {

    // const sender_name = req.query.sender_name;
    // var condition = sender_name ? { sender_name: { [Op.Ilike]: `%{sender_name}%`} } : null;

    try {
     const m_res_cen_det_find = await M_resolution_center_detail.findAll()
     res.status(200).json(m_res_cen_det_find)
    } catch (err) {
        
            res.status(500).send({
                message:
                    err.message || "error pas retrieve data cuyyy."
            });
        }
    }
