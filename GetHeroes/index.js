var MongoClient = require('mongodb').MongoClient;

module.exports = function(context, req) {
  MongoClient.connect(process.env.CosmosDBConnectionString, function(err, db) {
    if (err) throw err;

    db
      .collection('heros')
      .find({})
      .toArray((err, result) => {
        if (err) throw err;

        context.res = {
          body: JSON.parse(JSON.stringify(result))
        };
        db.close();
        context.done();
      });
  });
};
