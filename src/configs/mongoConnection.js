const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://helpdesk:sitehelpdesk@cluster0.6syq1.mongodb.net/Sitehelpdesk');

const db = mongoose.connection;

module.exports = db;