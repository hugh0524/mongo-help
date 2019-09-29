/**
 * Created by yinhe on 18/11/22.
 */

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const config = require('../config/index')


function connect(callback) {

    let dbConfig = config.mongo;
    let options = {useNewUrlParser:true};

    if (dbConfig.user) {
        options.user = dbConfig.user;
        options.pass = dbConfig.pass;
    }
    if(dbConfig.replsetOpts) {
        options.replset = dbConfig.replsetOpts
    }

    let serverInfo = `${dbConfig.servername}:${dbConfig.port}`;
    if(dbConfig.replset) {
        serverInfo = dbConfig.replset.map(function(item) {
            return `${item.host}:${item.port}`
        }).join(",")
    }

    var connectString = `mongodb://${serverInfo}/${dbConfig.DATABASE}`;
    if (dbConfig.authSource) {
        connectString = connectString + `?authSource=${dbConfig.authSource}`;
    }
    if(dbConfig.replset) {
        connectString += (connectString.indexOf("?")>0 ? "" : "?") + `&w=majority&replicaSet=${dbConfig.replsetOpts.rs_name}`
    }

    //加权限验证
    mongoose.connect(connectString, {
        user: options.user,
        pass: options.pass,
        useNewUrlParser:true
    });

    var db = mongoose.connection;
    db.on('error', function(e) {
    });
    db.once('open', function() {
        // we're connected!
        if(typeof callback === 'function'){
            callback.call(db)
        }
    });

    autoIncrement.initialize(db);
    return db;
}


module.exports = {
    connect: connect
}