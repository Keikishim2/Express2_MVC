const express = require('express');
const PORT = require('./config').settings.PORT;
const DB = require('./config');
const app = express();
const router = require('./routes');
const path = require('path');

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({
    extended: true
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view_engine', 'ejs');

app.use('/', router);

app.listen(8000, () => {
    console.log('Listening on port 8000');
})