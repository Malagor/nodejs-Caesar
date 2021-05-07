const {createReadStream, createWriteStream} = require('fs');

function createStreams(input = '', output = '', error = '') {
  const inputStream = input
    ? createReadStream(input)
    : process.stdin;

  const outputStream = output
    ? createWriteStream(output)
    : process.stdout;

  const errorStream = error
    ? createWriteStream(error)
    : process.stdout;

  return [inputStream, outputStream, errorStream];
}

module.exports ={
  createStreams
};
