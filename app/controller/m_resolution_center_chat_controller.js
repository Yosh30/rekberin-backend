const db = require('../models');
const M_resolution_center_chat = db.m_resolution_center_chat;
const Op = db.Sequelize.Op;

//create and save a new userl

exports.create =  async (req, res) => {
    const m_resolution_center_chat = {
        id: req.body.id,
        resolution_id: req.body.resolution_id,
        sender_id: req.body.sender_id,
        sender_name: req.body.sender_name,
        sending_time: req.body.sending_time,
    }

    try {
        const m_res_cen_chat = await M_resolution_center_chat.create(m_resolution_center_chat)
        res.status(200).json(m_res_cen_chat)
    } catch (err ){
        res.status(500).send({
            message:
                err.message || "error while trying to create tab"
        })
    }
}


exports.findAll = async (req, res) => {
    // const id = req.params.id;
    try {
        const m_res_cen_chat_find= await M_resolution_center_chat.findAll()  
        res.status(200).json(m_res_cen_chat_find);
    } catch (err){
        res.status(500).send({
            message: 
                err.message || "error while trying to retrieve data"
        })
    }
}
