const getAllServices = require('../services/index.services')

const getAll = async (req, res) => {
    const all = await getAllServices();
    return res.status(200).json(all)
}

module.exports = getAll