
module.exports = (sequelize, Sequelize) => {
    const M_resolution_center_chat = sequelize.define("m_resolution_center_chat", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        resolution_id: {
            type: Sequelize.INTEGER
        },
        sender_id: {
            type: Sequelize.INTEGER
        },
        sender_name: {
            type: Sequelize.STRING
        },
        sending_time: {
            type: Sequelize.DATE
        }
    }, {
        freezeTableName: true
    });
    return M_resolution_center_chat;
};