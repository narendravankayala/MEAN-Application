var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();


const route  = require('./routes/route');

//connecting to mongo database
mongoose.connect('mongodb://localhost:27017/contactlist');
//on connection with db
mongoose.connection.on('Connected', ()=>{
    console.log('Connected to mongo db successfully at port number : 27017');

});

mongoose.connection.on('Error', (err)=>{
    if (err){
        console.log('Error in connecting to mongo database at port number : 27017'+err);

    }
    

});

// define a port number
const port = 3000;

// Making two ports talk each other without hesitation
app.use(cors());

// To parse the json body from the request
app.use(bodyparser.json());

//pointing to static files
app.use(express.static(path.join(__dirname, 'public')));

//Directory for all the routes
app.use('/api',route);


//testing the server
app.get('/',(req, res) => {
    res.send('foobar');

});

//binding server with the above port number
app.listen(port,()=>{
    console.log('server started at port : ' + port);
});


