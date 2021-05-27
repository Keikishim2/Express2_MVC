
class User{
    fetch_heart(callback){
        const query = DB.format(`SELECT * FROM hearts ORDER BY name DESC`);
        DB.query(query, function(error, results){
            callback(error, results);
        });
    }
}

module.exports = User;