const {getParams} = require('./getParams');
const {checkParams} = require('./checkParams');
const {createStreams} = require('./createStreams');
const {transformData} = require('./transformData');

const {shift, action, output, input} = getParams();

if (!checkParams(shift, action)) {
  process.exit(-1)
}

transformData(action, shift, ...createStreams(input, output));


//
// process.stdin.resume();
// process.stdin.setEncoding('ascii');
//
// let inputString = '';
// let currentLine = 0;
//
// process.stdin.on('data', inputStdin => {
//   inputString += inputStdin;
// });
//
// process.stdin.on('end', _ => {
//   inputString = inputString.trim().split('\n').map(string => {
//     return string.trim();
//   });
//
//   printData();
// });
//
// function readline() {
//   return inputString[currentLine++];
// }
//
// function printData() {
//   process.stdout.write("hello: " + inputString);   // without auto '\n' (newline)
//
// }
