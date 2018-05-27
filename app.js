const express = require('express');

const app = express();
app.listen(8000);

//================ ROUTES =================
app.use('/point', require('./routes/lines'));
app.use('/space', require('./routes/space'));
app.use('/lines', require('./routes/lines'));

//================ ./routes ===============