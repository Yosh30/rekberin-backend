
module.exports = (sequelize, Sequelize) => {
    const M_resolution_center = sequelize.define("m_resolution_center", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        trx_id: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        solution_type: {
            type: Sequelize.STRING
        },
        solution_value: {
            type: Sequelize.INTEGER
        },
        status_id: {
            type: Sequelize.INTEGER
        },
        created_by: {
            type: Sequelize.STRING
        },
        modified_by: {
            type: Sequelize.DOUBLE
        },
    }, {
        freezeTableName: true
    });
    return M_resolution_center;
};