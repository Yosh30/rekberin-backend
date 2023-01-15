const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./app/models");
        
        db.sequelize.sync();

        var corsOptions = {
                 origin: "http://localhost:8081"
        };


        app.use(cors(corsOptions));

        // parse requests of content-type - application/json
        app.use(express.json());
        
        // parse requests of content-type - application/x-www-form-urlencoded
        // app.use(bodyParser.urlencoded({ extended: true }));

        // simple route
        app.get("/", (req, res) => {
        res.json({ message: "Welcome to application." });
        });

        require('./app/routes/m_user_route')(app);
        require('./app/routes/m_account_number_route')(app);
        require('./app/routes/destination_id_route')(app);
        require('./app/routes/m_role_route')(app);
        require('./app/routes/m_resolution_center_chat_route')(app);
        require('./app/routes/m_resolution_center')(app);
        require('./app/routes/m_resolution_center_detail_route')(app);
        // require('./app/routes/t_room_routes')(app);

        // set port, listen for requests
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
});