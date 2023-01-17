const db = require('../models');
const T_room_detail = db.T_room_detail;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');


exports.create = async (req, res) => {
const t_room_detail = {
    id: req.body.id,
    room_id: req.body.room_id,
    seller_id: req.body.seller_id,
    buyer_id: req.body.buyer_id
    
}

    try {
        const t_room_dt = await T_room_detail.create(t_room_detail)
        res.status(200).json(t_room_dt)
    } catch(err) {
        res.status(500).send({
            message:
                err.message || "Error while trying to create data."
        })
    }
}

exports.findAll = async (req, res) => {
    const id = req.params.id
    try {
    const t_room_find = await T_room_detail.findAll(id);
    res.status(200).json(t_room_find)
    } catch (err) {
        res.status(500).send({
            message:
                err.message
        })
    }
}

