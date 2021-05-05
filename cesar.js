const {Command} = require('commander');
const {readFile, writeFile} = require('fs');
const {enigma} = require('./enigma');
const program = new Command();

const READ_FILENAME = 'input.txt';
const WRITE_FILENAME = 'output.txt';
// const READ_FILENAME = 'output.txt';
// const WRITE_FILENAME = 'decode.txt';

program.version('0.0.1');
program
  .option('-s, --shift <count>', 'a shift')
  .option('-a, --action <type>', 'an action encode/decode')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file');


program.parse(process.argv);

const options = program.opts();
// console.log(options);

const isShiftValid = options.shift && !isNaN(+options.shift);
const isActionValid = options.action === 'encode' || options.action === 'decode';

if (!isShiftValid || !isActionValid) {
  if (!isShiftValid) {
    console.log('-s, --shift mast to be number');
  }
  if (!isActionValid) {
    console.log('an action mast by encode/decode');
  }

  process.exit(-1);
}

// if (options.shift) console.log('Shift:' + options.shift);
// if (options.input) console.log('Input:' + options.input);
// if (options.output) console.log('Output:' + options.output);
// if (options.action) console.log('Action:' + options.action);


readFile(options.input || READ_FILENAME, 'utf-8', (err, data) => {
  if (err) throw err;

  const newData = enigma(options.action, options.shift, data);

  writeFile(options.output || WRITE_FILENAME, newData, (err) => {
      if (err) throw err;
      console.log('Данные записаны');
    }
  )

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
