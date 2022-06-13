const getAllModels = require('../models/index.model');

async function getAllServices(){

    const all = await getAllModels();
    return all;
}

module.exports = getAllServices