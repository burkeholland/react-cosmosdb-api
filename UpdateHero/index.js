var MongoClient = require('mongodb').MongoClient;

module.exports = function(context, req) {
  MongoClient.connect(process.env.CosmosDBConnectionString, function(err, db) {
    if (err) throw err;

    let hero = ({ id, name, saying } = req.body);

    db
      .collection('heroes')
      .findOneAndUpdate({ id: hero.id }, { $set: { hero } }, (err, heros) => {
        if (err) throw err;
        context.res = {
          body: hero
        };
        db.close();
        context.done();
      });
  });
};
