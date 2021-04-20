/****************************
 Configuration
 ****************************/
// For environment variables [will work with .env file]
require("custom-env").env("dev");

let ENV_VARIABLES = process.env;

module.exports = {
  ...ENV_VARIABLES,
};
