const {Command} = require('commander');
const {createReadStream, createWriteStream} = require('fs');
const {enigma} = require('./enigma');
const program = new Command();

const ACTION_TYPE = ['encode', 'decode'];

program.version('0.0.1');
program
  .option('-s, --shift <count>', 'a shift')
  .option('-a, --action <type>', 'an action encode/decode')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file');

program.parse(process.argv);

const options = program.opts();

const {shift, action, output, input} = options;

const isShiftValid = shift && !isNaN(+shift);
const isActionValid = ACTION_TYPE.includes(action);

if (!isShiftValid || !isActionValid) {
  if (!isShiftValid) {
    console.log('-s, --shift mast to be number');
  }
  if (!isActionValid) {
    console.log('an action mast by encode/decode');
  }

  process.exit(-1);
}

const inputStream = input
  ? createReadStream(input)
  : process.stdin;

const outputStream = output
  ? createWriteStream(output)
  : process.stdout;

inputStream.on('readable', () => {
  const buffer = inputStream.read();
  if (buffer && buffer.includes('\n')) {
    const encode = enigma(action, shift, buffer.toString());
    outputStream.write(encode);
  }
});

inputStream.on('end', () => {
  console.log(`Data ${action}`);
});

inputStream.on('error', (err) => {
  if (err.code === 'ENOENT') {
    console.log('File not found');
  } else {
    console.error(err);
  }
});

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
