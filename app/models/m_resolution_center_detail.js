
module.exports = (sequelize, Sequelize) => {
    const M_resolution_center_detail = sequelize.define("m_resolution_center_detail", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        resolution_id: {
            type: Sequelize.INTEGER
        },
        seller_id: {
            type: Sequelize.INTEGER
        },
        buyer_id: {
            type: Sequelize.INTEGER
        },
    }, {
        freezeTableName: true
    });
    return M_resolution_center_detail;
};