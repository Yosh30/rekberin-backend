const db = require('../models');
const Destination_id = db.destination_id;
const Op = db.Sequelize.Op;


exports.create = async (req, res) => {
    
    const destination_id = {
            id: req.body.id,
            name: req.body.name
    }

    try {
        const dest_id =  await Destination_id.create(destination_id);
        res.status(200).json(dest_id)
    } catch (err) {
        res.status(500).send({
            message: 
                err.message || " error while trying to save data."
        })
    }
} 


exports.findAll = async (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: {[Op.iLike]: `%{name}`}} : null;

    try {
        const des_id = await Destination_id.findAll({ where: condition})
        res.status(200).json(des_id)
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "error to find data."
        })
    }
}

