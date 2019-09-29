/**
 * Created by yinhe on 18/11/22.
 */

var config = require("./conf.json")


function getConfig () {

    this.env = process.env.NODE_ENV;

    this.config = config
    this.mongo = this.config.mongo;

}


var curConfig = new getConfig();

module.exports = curConfig;