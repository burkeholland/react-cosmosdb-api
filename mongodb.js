const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoUri = process.env.CosmosDBConnectionString;

function connect() {
  return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect,
  mongoose
};
