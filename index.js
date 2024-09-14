require('dotenv').config()
var express = require('express');
const app = express()
var cors = require('cors') ;
var examRoute = require('./routes/index')
var bodyParser = require('body-parser') ;
var server = require('http').createServer(app);
require('./config')

const port = process.env.SERVER_PORT;

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/healthcheck' ,(req,res) => {    // Root path for Health check in servers
    res.send('Health check passed');
})

app.use('/onlineexam', examRoute);
server.listen(port, () => {
    console.log(`Server started at port ${port}`)
})