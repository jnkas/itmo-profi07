/*
var exec = require('child_process').exec;
exec('node ./door.js', function(error, stdout, stderr) {
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
    if (error !== null) {
        console.log('exec error: ', error);
    }
});
*/
console.log('child process run');
process.on('message', (msg) => {
  const text = 'child runing';
  //process.send(text);
});

let counter = 0;

setInterval(() => {
  process.send({ counter: counter++ });
}, 1000);


