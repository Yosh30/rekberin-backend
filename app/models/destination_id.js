module.exports = (sequlize, Sequelize) => {
    const Destination_id = sequlize.define("destination_id", {

        id: {
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name : {
            type: Sequelize.STRING
        
        }
    },{
        freezeTableName: true
    }

    );

    return Destination_id;
};