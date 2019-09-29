/**
 * Created by hugh on 19/9/29.
 */

class BaseOpera {

    constructor() {
        this.model = null
    }

    async initData(data) {
        let model = this.model
        const res  = await model.remove({})
        console.log("已删除"+ res.deletedCount)
        // 插入数据
        const ires = await model.insertMany(data)
        return ires
    }

}

module.exports = BaseOpera