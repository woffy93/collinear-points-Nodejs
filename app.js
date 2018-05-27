const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen (8000, function () {
    console.log('server OK');
});



//================ ROUTES =================
app.use('/point', require('./routes/point'));
app.use('/space', require('./routes/space'));
app.use('/lines', require('./routes/lines'));

//================ ./routes ===============