/**
 * Created by hugh on 19/9/29.
 */

const Tracking = require("../model/Tracking")
const BaseOpera = require("../base/BaseOpera")
    
class Pipeline extends BaseOpera{

    constructor(){
        super()
        this.tracking = new Tracking()
        this.model = this.tracking.model
    }

    /**
     * add field
     */
    async addFields(query) {
        var model = this.tracking.model;

        return await model.aggregate().match(query).addFields({"_time": "$localts"})

    }


}

module.exports = Pipeline