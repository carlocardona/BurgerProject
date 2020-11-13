const connection = require("../config/connection.js");

const printQuestion = (num)=> {
    const arr = [];

    for(let i=0; i<num; i++){
        arr.push("?");
    }

    return arr.toString();
}

