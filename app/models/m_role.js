module.exports = (sequlize, Sequelize) => {
    const M_role = sequlize.define("m_role", {

        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        role_name : {
            type: Sequelize.STRING
        
        }
    },{
        freezeTableName: true
    }

    );

    return M_role;
};