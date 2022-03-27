//npm i nodemon -g
//npm init
//npm i date-fns
// console.log("Testing!");
//npm i nodemon --save-dev / npm i nodemon -D
//"scripts": {
//     "start": "node index",
//     "dev" : "nodemon index"
//   }
//npm run dev
//npm i uuid
const {format}  = require('date-fns');
const {v4: uuid} = require('uuid');
console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));
console.log(uuid())