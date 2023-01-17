
module.exports = (sequelize, Sequelize) => {
    const M_status = sequelize.define("m_status", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        status_code: {
            type: Sequelize.STRING
        },
        status_name: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true
    });
    return M_status;
};