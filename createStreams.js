const fs = require('fs');

function createStreams(input, output) {
  // input Stream
  const inputStream = input
    ? fs.createReadStream(input)
    : process.stdin;

  inputStream.on('error', errorHandler);

  // output Stream
  const outputStream = output
    ? fs.createWriteStream(output, {flags: 'a'})
    : process.stdout;

  outputStream.on('error', errorHandler);

  return {inputStream, outputStream};
}

function errorHandler(err) {
  if (err.code === 'ENOENT') {
    process.stderr.write('Incorrect write file');
  } else {
    process.stderr.write(err);
  }
  process.exit(-1);
}

module.exports = {
  createStreams
};
