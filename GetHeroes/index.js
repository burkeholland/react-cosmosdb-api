const Hero = require('../hero-model');
const mongodb = require('../mongodb');

module.exports = function(context, req) {
  try {
    mongodb.connect();
    const docquery = Hero.find({}).read();

    context.log('docquery');

    docquery
      .exec()
      .then(heroes => {
        context.log(heroes);

        context.res = {
          body: 'ok'
        };

        context.done();
      })
      .catch(err => {
        context.res = {
          status: 400,
          body: 'something went wrong'
        };

        context.done();
      });
  } catch (error) {
    context.res = {
      body: error
    };

    context.done;
  }
};
