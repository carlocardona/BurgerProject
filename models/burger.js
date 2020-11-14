const orm = require("../config/orm.js");

const burger = {
    ALL: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    create: (cols,vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    },
};

module.exports = burger;