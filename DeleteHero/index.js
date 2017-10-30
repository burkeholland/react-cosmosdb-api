var MongoClient = require('mongodb').MongoClient;

module.exports = function(context, req) {
  MongoClient.connect(process.env.CosmosDBConnectionString, (err, db) => {
    if (err) throw err;
    let heroId = parseInt(req.query.id);
    db.collection('heros').remove({ id: heroId }, (err, result) => {
      if (err) throw err;
      context.res = {
        body: JSON.stringify(result)
      };
      db.close();
      context.done();
    });
  });
};
