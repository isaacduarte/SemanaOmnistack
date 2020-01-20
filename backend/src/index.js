const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://concitex:concitex2018@cluster0-rwdm7.azure.mongodb.net/rnc?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.use(express.json());
app.use(routes);


app.listen(8081);