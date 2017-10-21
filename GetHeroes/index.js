// const Hero = require('../hero-model');
// const mongodb = require('../mongodb');

const MongoClient = require('mongodb');

module.exports = function(context, req) {
  try {
    mongodb.connect();
    const docquery = Hero.find({}).read();
    docquery
      .exec()
      .then(heroes => {
        context.res = {
          body: heroes
        };

        context.done();
      })
      .catch(err => {
        context.res = {
          status: 500,
          body: err.message
        };

        context.done();
      });
  } catch (error) {
    context.res = {
      body: error
    };

    context.done();
  }
};
