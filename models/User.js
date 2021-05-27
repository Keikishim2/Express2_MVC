const user = require("../controllers/Users");
const DB = require('../config');

class User{
    fetch_heart(callback){
        const query = DB.format(`SELECT * FROM hearts ORDER BY name DESC`);
        DB.query(query, function(error, results){
            callback(error, results);
        });
    }
}

module.exports = User;