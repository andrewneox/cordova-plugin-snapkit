var exec = require('cordova/exec');

var PLUGIN_NAME = "CordovaPluginSnapkit";

var CordovaPluginSnapkit = function() {}; 
// All of your plugin functions go below this. 
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.
CordovaPluginSnapkit.snapCreativeKit = function(onSuccess, onError) {
   exec(onSuccess, onError, PLUGIN_NAME, "snapCreativeKit", []);
};
module.exports = CordovaPluginSnapkit;