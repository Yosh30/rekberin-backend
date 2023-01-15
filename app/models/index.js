const dbConfig = require("../../config/db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Associations

//role
// db.m_role.hasOne(db.m_user);

//user
// db.m_user.belongsTo(db.m_role);

db.m_user = require("./m_user")(sequelize, Sequelize);
db.m_account_number = require("./m_account_number")(sequelize, Sequelize);
db.destination_id = require("./destination_id")(sequelize, Sequelize);
db.m_role = require("./m_role")(sequelize, Sequelize);
db.m_resolution_center = require("./m_resolution_center")(sequelize, Sequelize);
db.m_resolution_center_detail = require("./m_resolution_center_detail")(sequelize, Sequelize);
db.m_resolution_center_chat = require("./m_resolution_center_chat")(sequelize, Sequelize);
db.t_room = require("./t_room")(sequelize, Sequelize);
db.t_room_detail = require("./t_room_detail")(sequelize, Sequelize);
db.m_status = require("./m_status")(sequelize, Sequelize);

//fk role_id Begin
db.m_role.hasOne(db.m_user, {
    foreignKey: 'role_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});
db.m_user.belongsTo(db.m_role, {
    foreignKey: 'role_id'
});
//fk role_id End


//fk for account_number begin
    //relati
db.m_user.hasOne(db.m_account_number, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"    
});
db.m_account_number.belongsTo(db.m_user, {
    foreignKey: 'user_id'
})

    //relati to destination_id
db.destination_id.hasOne(db.m_account_number, {
    foreignKey: "account_destination_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"    
});
db.m_account_number.belongsTo(db.destination_id, {
    foreignKey: 'account_destination_id'
})
// fk for account_number end


//fk for m resolution center begin
db.m_status.hasMany(db.m_resolution_center, {
    foreignKey: 'status_id',
    onDelete: "CASCADE",
    onUpdate: 'CASCADE'
});
db.m_resolution_center.belongsTo(db.m_status, {
    foreignKey: 'status_id'
});

//fk for m resolution end

//fk for m_res_cen_detail begin
db.m_resolution_center.hasOne(db.m_resolution_center_detail, {
    foreignKey: 'resolution_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
});
db.m_resolution_center_detail.belongsTo(db.m_resolution_center, {
    foreignKey: 'resolution_id'
});
//end

//fk for m_res_cen_chat begin
db.m_resolution_center.hasOne(db.m_resolution_center_chat, {
    foreignKey: 'resolution_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
})
db.m_resolution_center_chat.belongsTo(db.m_resolution_center, {
    foreignKey: 'resolution_id'
})
//end




module.exports = db;

