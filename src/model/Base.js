const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const state = require('../utils/state')
/**
 * 
 * type: 表示modal对于的数据类型
 * 
 */
class Base {
    constructor(type) {
        this.type = type || "mysql";
        this.schema = null;
        this.name = this.getName();
        this.model = null;

        this.init();
    }

    /**
     * 根据type初始化
     */
    init() {
        if(this.type == "mongo" ) {
            if(!state.mongoSchameMap[this.getName()]) {
                this.schema = new mongoose.Schema(this.getSchema());
                if(this.isNeedAutoIncrement() === true){
                    this.schema.plugin(autoIncrement.plugin, {
                        model: this.name,
                        field: this.getPrimaryKey(),
                        startAt: 11,
                        incrementBy: 1
                    });
                }

                this.model = mongoose.model(this.name, this.schema);
                state.mongoSchameMap[this.name] = this.model
            } else {
                this.model = state.mongoSchameMap[this.getName()]
            }

        }

    }

    isNeedAutoIncrement(){
        return false;
    }

    getModel() {
        return this.model
    }
    /**
     * 可通过覆盖此方法生成其他自增字段
     */
    getPrimaryKey(){
        return this.type == "mysql" ? 'id' : '_id';
    }

    /**
     * 获取collection的schema结构
     */
    getSchema(){
        console.log('Model Class need getSchema function', 'error');
    }

    /**
     * 用于定义实体对应的名称
     */
    getName(){
        console.log('Model Class need name', 'error');
    }

}

module.exports = Base