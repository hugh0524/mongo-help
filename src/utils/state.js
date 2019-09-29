/**
 * Created by yinhe on 18/11/24.
 */
var mongo = require("./mongoDb");

/**
 * 用于存储全局的状态、属性
 * 提供全局通用方法
 */
class State {
    constructor() {
        // mongoDb instance
        this.mongoDb = new mongo.connect();
        //
        this.mongoSchameMap = {};

    }

}

module.exports = new State();