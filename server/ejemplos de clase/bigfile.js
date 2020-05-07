const fs = require('fs');

console.time('syn');
const data = fs.readFileSync('C:/Users/Usuario/Videos/Movavi Library/New Project.mp4');
console.timeEnd('syn');

console.time('callback');
console.time('asyn');
fs.readFile('C:/Users/Usuario/Videos/Movavi Library/New Project.mp4', (err, data) => {
  console.timeLog('callback');
});
console.timeEnd('asyn');
