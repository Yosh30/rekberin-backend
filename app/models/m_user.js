
module.exports = (sequelize, Sequelize) => {
    const M_user = sequelize.define("m_user", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        profile_picture: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.INTEGER
        },
        role_id: {
            type: Sequelize.INTEGER
        },
        password: {
            type: Sequelize.STRING
        },
        refferal_code: {
            type: Sequelize.STRING
        },
        balance: {
            type: Sequelize.DOUBLE
        },
        balance_refferal: {
            type: Sequelize.DOUBLE
        },
        modified_by: {
            type: Sequelize.STRING
        },
        created_by: {
            type: Sequelize.STRING
        }

    }, {
        freezeTableName: true
    });
    return M_user;
};