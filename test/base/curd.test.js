/**
 * Created by hugh on 19/9/28.
 */

var CURD = require("../../src/base/curd")

const curd = new CURD();

it('init data', () => {

    curd.initData({name: "test"}).then(res => {
        console.log(res)
        expect(res).not(null)
    })
});

