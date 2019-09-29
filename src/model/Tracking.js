/**
 * Created by yinhe on 18/11/28.
 */


const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const state = require('../utils/state')

const Base = require("./Base")
class Tracking extends Base {

    constructor () {
        super("mongo")
    }

    getSchema () {
        return {
            "appid": {"type": "String"},
            "trackingtype": {"type": "String"},
            "page": {"type": "String"},
            "guid": {"type": "String"},
            "sessionid": {"type": "String"},
            "userid": {"type": "String", "index": true},
            "localts": {"type": "Number", "index": true},
            "screenresolution": {"type": "String"},
            "viewport": {"type": "String"},
            "host": {"type": "String"},
            "latlong": {"type": "String"},
            "appversion": {"type": "String"},
            "network": {"type": "String"},
            "channelid": {"type": "String"},
            "os": {"type": "String"},
            "brand": {"type": "String"},
            "parameters": {
                type: Map,
                of: String
            },
            "timestamp": {"type": "String"},
            "ip": {"type": "String"},
            "useragent": {"type": "String"},
            "referrer": {"type": "String"},
            "app": {"type": "String"},
            "tracking": {"type": "String"},
        }
    }

    getName () {
        return "track_tmpl"
    }


}

module.exports = Tracking