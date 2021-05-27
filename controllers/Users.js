const User = require("../models/User");
const user = new User();

class Users {
    index(request, response){
        response.render('index.ejs');
    }
    fetch_heart(request, response){
        user.fetch_heart(function(error, result){
            if(error){
                console.log('Error Fetching ', error);
                return;
            }
            response.render('heart.ejs', {hearts: result});
        })
    }
}
module.exports = Users;