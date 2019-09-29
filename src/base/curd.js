/**
 * Created by hugh on 19/9/27.
 */

const Project = require("../model/Project.js")

const BaseOpera = require("./BaseOpera.js")

class curd extends BaseOpera{

    constructor() {
        super()
        this.project = new Project();
        this.model = this.project.model
    }


    /**
     * test insert
     * @param data
     * @returns {*}
     */
    async insert(data) {
       let model = this.project.model
       return await model.insert(data)
    }

    
    
}

module.exports = curd