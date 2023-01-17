const db = require('../models');
const T_room = db.t_room;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');


exports.create = async (req, res) => {
const t_room = {
    id: req.body.id,
    room_name: req.body.room_name,
    room_description: req.body.room_description,
    amount: req.body.amount,
    fee: req.body.fee,
    item_id: req.body.item_id,
    item_name: req.body.item_name,
    status_id: req.body.status_id,
    promo_code: req.body.promo_code,
    created_by: req.body.created_by,
    modified_by: req.body.modified_by
    
}

    try {
        const t_room_cr = await T_room.create(t_room)
        res.status(200).json(t_room_cr)
    } catch(err) {
        res.status(500).send({
            message:
                err.message || "Error while trying to create data."
        })
    }
}

exports.findAll = async (req, res) => {
    const room_name = req.query.room_name
    var condition = room_name ? {room_name : {[Op.iLike]: `%{room_name}%`}} : null;
    try {
    const t_room_find = await T_room.findAll({ where: condition });
    res.status(200).json(t_room_find)
    } catch (err) {
        res.status(500).send({
            message:
                err.message
        })
    }
}

