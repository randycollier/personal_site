/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: ['moment/moment.js','jquery/dist/jquery.js', 'bootstrap-sass/assets/javascripts/bootstrap.js']
  });
};

