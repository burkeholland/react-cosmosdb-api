const heroService = require('../hero-service');

module.exports = async function(context, req) {
  try {
    let hero = await heroService.create(req);

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: hero
    };
  } catch (error) {
    context.res = {
      status: 400,
      body: error.message
    };
  }
};
