const mongoose = require('mongoose')
const express = require('express');
var bodyParser = require('body-parser');

const DB = 'mongodb+srv://jeevan1234:jeevan@cluster0.cjf5boi.mongodb.net/?retryWrites=true&w=majorityter0.cjf5boi.mongodb.net/?retryWrites=true&w=majority'

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB, {
    useNewurlParser : true,
    //useCreatIndex: true,
    useUnifiedTopology:true,
    //useFindAndModify:false,
}).then( () =>{
     console.log(`MongoDB is connected`);
}).catch( (err) => console.log(`no connection`));


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
