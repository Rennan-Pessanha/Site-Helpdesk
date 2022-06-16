const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb+srv://helpdesk:sitehelpdesk@cluster0.6syq1.mongodb.net/?retryWrites=true&w=majority';

const DB_NAME = 'Sitehelpdesk';

const connection = () => MongoClient
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = connection;