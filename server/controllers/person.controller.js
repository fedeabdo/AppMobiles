'use strict';

async function findAll(collection) {
    let all = collection.find({}, {projection:{ _id: 0 }}).toArray();
    return all;
}

module.exports.findAll = findAll;