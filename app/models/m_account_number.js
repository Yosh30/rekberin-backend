module.exports = (sequelize, Sequelize) => {
    const M_account_number = sequelize.define("m_account_number", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        account_name: {
            type: Sequelize.STRING
        },
        account_number: {
            type: Sequelize.INTEGER 
        },
        account_destination_id: {
            type: Sequelize.INTEGER
        } 
    }, {
        freezeTableName: true
    });

    return M_account_number;

};