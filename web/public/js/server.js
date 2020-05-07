var query
$(document).ready(()=>{
    query = require('../../../server/querys/querys.js');
    var server = require('../../../server/server.js');
    server.start();
});

function findAll() {
    $("#parafo").text(
        query.findAll
    )
};
