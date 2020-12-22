var exec = require('cordova/exec');

var PLUGIN_NAME = "CordovaSnapPlugin";

var CordovaSnapPlugin = function() {}; 
// All of your plugin functions go below this. 
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.
CordovaSnapPlugin.snapCreativeKit = function(onSuccess, onError) {
   exec(onSuccess, onError, PLUGIN_NAME, "snapCreativeKit", []);
};
module.exports = CordovaSnapPlugin;