//npm i nodemon -g
//npm init
//npm i date-fns
// console.log("Testing!");
//npm i nodemon --save-dev / npm i nodemon -D
const {format}  = require('date-fns');
console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));