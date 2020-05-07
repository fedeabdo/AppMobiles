'use strict';



(async function start() {
    let mongoURL = "mongodb://127.0.0.1:27017/";
    let db_name = 'PERSONAS';
    var MongoClient = require('mongodb').MongoClient;
    let mongo = await MongoClient.connect(mongoURL, { useUnifiedTopology: true }); 
    const http = require('http')

    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer();
    server.on('request', async (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        let controller = require('./controllers/person.controller.js')
        let collection = mongo.db(db_name).collection("personas");
        let values = await controller.findAll(collection);
        res.end(JSON.stringify(values));
        console.log(values);
    });
    server.listen(port, () => {
        console.log('listening on port', port)
    });

})()
