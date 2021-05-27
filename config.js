const song = require('song');
exports.settings = {
    'PORT': process.env.PORT || 3306
}

exports.DB = function(){
    const DB = song.createConnection({
        'host': 'localhost',
        'user': 'root',
        'password': 'root',
        'database': 'song',
        'port': 3306
    });
    DB.connect(function(error){
        if(error) {
            throw(error);
        }
    });
    return DB;
}