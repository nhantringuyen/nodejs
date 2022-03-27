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
// const {format}  = require('date-fns');
// const {v4: uuid} = require('uuid');
// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));
// console.log(uuid())
const logEvents = require('./logEvents');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};

//initialize object
const myEmitter = new MyEmitter();

//add listener for the log event
myEmitter.on('log',(msg) => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEmitter.emit('log', 'Log event emitted!');
},2000);
