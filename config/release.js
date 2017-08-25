/* jshint node:true */
// var RSVP = require('rsvp');

// For details on each option run `ember help release`
module.exports = {
  // local: true,
  remote: 'https://github.com/cafreeman/ember-object-update.git',
  annotation: "Release %@",
  message: "Bumped version to %@",
  // manifest: [ 'package.json', 'bower.json', 'someconfig.json' ],
  publish: true,
  // strategy: 'date',
  // format: 'YYYY-MM-DD',
  timezone: 'America/Chicago',
  //
  // beforeCommit: function(project, versions) {
  //   return new RSVP.Promise(function(resolve, reject) {
  //     // Do custom things here...
  //   });
  // }
};
