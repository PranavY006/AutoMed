
function sayHello(name){
    console.log("Hello"+ name);
}
sayHello("Atharva");

// setTimeout(),clearTimeout(),setInterval(),clearInterval()
var messgae = '';
console.log(global.message);
//mOdules
console.log(module);
//creating a module  |||||| use jshint app.js

// var log = require('./logger');
// log('message');

//
const path = require('path');
var pathObj =path.parse(__filename);
console.log(pathObj);
// file sys module
const fs = require('fs');
fs.readdir('./',function(err,files){
    if(err) console.log('Error',err);
    // else console.log('Result',files);
});

// event arguments
const EvenetEmitter = require('events');
// const emitter = new EvenetEmitter();

// emitter.on('messageLogged', (arg) =>{
//     console.log('Listner called',arg);
// });

// const log = require('./logger');
// log('message');
const Logger = require('./logger')
const logger = new Logger();

logger.on('messageLogged', (arg) =>{
        console.log('Listner called',arg);
    });
logger.log('message');
