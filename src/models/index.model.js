const connection = require('./mongoConnection');

async function getAllModels(){
    const db = await connection();
    return db.collection('chamados').find({}).toArray()
}

module.exports = getAllModels;