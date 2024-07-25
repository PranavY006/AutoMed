// const EvenetEmitter = require('events');

// var url = 'http://mylogger.io/log';

// class Logger extends EvenetEmitter{
//  log(message){
//     //Send an http
//     console.log(message);

//     //raise an event
//     this.emit('messageLogged',{id: 1,url: 'http:// '});
// }}
// module.exports = Logger;

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hellow World');
        res.end();
    }
    if(req.url ==='/api/courses'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000...');