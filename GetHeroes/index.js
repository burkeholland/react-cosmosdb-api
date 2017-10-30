// var MongoClient = require('mongodb').MongoClient;

// module.exports = function(context, req) {
//   MongoClient.connect(process.env.CosmosDBConnectionString, function(err, db) {
//     if (err) throw err;

//     db
//       .collection('heros')
//       .find({})
//       .toArray((err, result) => {
//         if (err) throw err;

//         result.forEach(item => {
//           delete item._id;
//         });

//         context.res = {
//           body: JSON.parse(JSON.stringify(result))
//         };
//         db.close();
//         context.done();
//       });
//   });
// };

var MongoClient = require('mongodb').MongoClient;

module.exports = function(context, req) {
  MongoClient.connect(process.env.CosmosDBConnectionString, function(err, db) {
    if (err) throw err;

    let hero = ({ id, name, saying } = req.body);

    db.heros.update(
      { id: 1 },
      { id: 1, name: 'ok', saying: 'you got it man!' },
      (err, heros) => {
        context.log(heros);

        if (err) throw err;
        context.res = {
          body: hero
        };
        db.close();
        context.done();
      }
    );
  });
};
