
module.exports = (sequelize, Sequelize) => {
    const T_room_detail = sequelize.define("t_room_detail", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        room_id: {
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
    return T_room_detail;
};