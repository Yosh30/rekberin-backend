
module.exports = (sequelize, Sequelize) => {
    const T_room = sequelize.define("t_room", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        room_name: {
            type: Sequelize.STRING
        },
        room_description: {
            type: Sequelize.TEXT
        },
        amount: {
            type: Sequelize.DOUBLE
        },
        fee: {
            type: Sequelize.DOUBLE
        },
        item_id: {
            type: Sequelize.STRING
        },
        item_name: {
            type: Sequelize.STRING
        },
        status_id: {
            type: Sequelize.INTEGER
        },
        promo_code: {
            type: Sequelize.STRING
        },
        created_by: {
            type: Sequelize.STRING
        },
        modified_by: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    });
    return T_room;
};