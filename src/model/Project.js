/**
 * Created by hugh on 19/9/28.
 */
const Base = require("./Base")
    
class Project extends Base {
    constructor() {
        super("mongo")
    }


    getSchema() {
        return {
            uid: { type: Number },
            name: { type: String, require: true },
            base_path: { type: String },
            group_id: { type: String }, // 标识 组 -> group.name
            description: String,
            langType: {type: String,  default: "javascript"}, // 语言类型
            creator: String,
            meta: {
                create_time: {type: Date, default: Date.now},
                update_time: {type: Date, default: Date.now}
            }
        }
    }

    getName(){
        return "project"
    }
    
    
}

module.exports = Project